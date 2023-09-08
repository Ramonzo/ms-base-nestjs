import { IsNumber, IsNumberString, IsString } from 'class-validator';
import { Exclude } from 'class-transformer';
import { Entity } from 'typeorm';

@Entity()
export class AddressRouterDTO {
    @Exclude()
    @IsNumber()
    address_id: number;

    @IsString({
        message: "SIS - street não pertence ao tipo informado."
    })
    street: string;

    @IsString({
        message: "SIS - street_number não pertence ao tipo informado."
    })
    street_number: string;

    @IsString({
        message: "SIS - complement não pertence ao tipo informado."
    })
    complement: string;

    @IsString({
        message: "SIS - neighborhood não pertence ao tipo informado."
    })
    neighborhood: string;

    @IsString({
        message: "SIS - federal_unit não pertence ao tipo informado."
    })
    federal_unit: string;

    @IsString({
        message: "SIS - city não pertence ao tipo informado."
    })
    city: string;

    @IsString({
        message: "SIS - zip_code não pertence ao tipo informado."
    })
    @IsNumberString({ no_symbols: true }, {
        message: "SIS - zip_code contém valores inválidos. Forneça apenas números."
    })
    zip_code: string;
}