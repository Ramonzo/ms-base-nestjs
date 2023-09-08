import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Profile } from './profile.entity';

@Injectable()
export class ProfileService {
    constructor(private dataSource: DataSource) {}

    async create(profileData: Partial<Profile>): Promise<any> {
        const queryRunner = this.dataSource.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const profile = await queryRunner.manager.create(Profile, profileData);
            
            await queryRunner.commitTransaction();
        } catch (err) {
            await queryRunner.rollbackTransaction();

            throw err;
        } finally {
            await queryRunner.release();
        }
        return true;
    }

    async update(profileData: Partial<Profile>): Promise<any> {
        const queryRunner = this.dataSource.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const profile = await queryRunner.manager.update(Profile, profileData.profile_id, profileData);
            
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
