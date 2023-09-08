import { IsNotEmpty, IsString } from 'class-validator';
import { Entity } from 'typeorm';

@Entity()
export class AddressDTO {
    readonly address_id: number;

    @IsNotEmpty({
        message: "Rua precisa ser informado."
    })
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

    @IsNotEmpty({
        message: "Bairro precisa ser informado."
    })
    @IsString({
        message: "SIS - neighborhood não pertence ao tipo informado."
    })
    neighborhood: string;

    @IsNotEmpty({
        message: "UF precisa ser informada."
    })
    @IsString({
        message: "SIS - federal_unit não pertence ao tipo informado."
    })
    federal_unit: string;

    @IsNotEmpty({
        message: "Cidade precisa ser informada."
    })
    @IsString({
        message: "SIS - city não pertence ao tipo informado."
    })
    city: string;

    @IsNotEmpty({
        message: "CEP precisa ser informado."
    })
    @IsString({
        message: "SIS - zip_code não pertence ao tipo informado."
    })
    zip_code: string;

    constructor(address: AddressDTO) {
        this.street = address.street;
        this.street_number = address.street_number;
        this.complement = address.complement;
        this.neighborhood = address.neighborhood;
        this.federal_unit = address.federal_unit;
        this.city = address.city;
        this.zip_code = address.zip_code;
    }
}