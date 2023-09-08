import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Address } from './address.entity';

@Injectable()
export class AddressService {
    constructor(private dataSource: DataSource) {}

    async create(addressData: Partial<Address>): Promise<any> {
        const queryRunner = this.dataSource.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const address = await queryRunner.manager.create(Address, addressData);
            
            await queryRunner.commitTransaction();
        } catch (err) {
            await queryRunner.rollbackTransaction();

            throw err;
        } finally {
            await queryRunner.release();
        }
        return true;
    }

    async update(addressData: Partial<Address>): Promise<any> {
        const queryRunner = this.dataSource.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const address = await queryRunner.manager.update(Address, addressData.address_id, addressData);
            
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
