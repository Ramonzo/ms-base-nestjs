import { IsDateString, IsNumber, IsNumberString, IsString } from 'class-validator';
import { Entity } from 'typeorm';

@Entity()
export class ProfileRouterDTO {
    @IsNumber()
    profile_id: number;

    @IsString({
        message: "SIS - name não pertence ao tipo informado."
    })
    name: string;

    @IsString({
        message: "SIS - phone_number não pertence ao tipo informado."
    })
    @IsNumberString({ no_symbols: true }, {
        message: "SIS - phone_number contém valores inválidos. Forneça apenas números."
    })
    phone_number: string;

    @IsDateString({}, {
        message: "Formato de data inválido."
    })
    date_of_birthday: string;
}