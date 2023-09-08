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
            // since we have errors lets rollback the changes we made
            await queryRunner.rollbackTransaction();

            throw err;
        } finally {
            // you need to release a queryRunner which was manually instantiated
            await queryRunner.release();
        }
        return true;
    }
}
