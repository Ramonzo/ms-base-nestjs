import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { User } from './user.entity';
import { generatePassword } from 'src/utils/generateSalt';

@Injectable()
export class UserService {
    constructor(private dataSource: DataSource) {}

    async create(userData: Partial<User>): Promise<any> {
        
        userData.password = await generatePassword(userData.password);

        const queryRunner = this.dataSource.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.save(userData);

            await queryRunner.commitTransaction();
        } catch (err) {
            await queryRunner.rollbackTransaction();

            throw err;
        } finally {
            await queryRunner.release();
        }
        return true;
    }
}
