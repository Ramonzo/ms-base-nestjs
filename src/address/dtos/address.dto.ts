import { IsDateString, IsString } from 'class-validator';
import { Entity } from 'typeorm';

@Entity()
export class AddressDTO {
    readonly address_id: number;

    constructor(address: AddressDTO) {
    }
}