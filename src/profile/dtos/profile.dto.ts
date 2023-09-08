import { IsDateString, IsString } from 'class-validator';
import { Entity } from 'typeorm';

@Entity()
export class ProfileDTO {
    readonly profile_id: number;

    readonly address_id: number;

    readonly billing_address_id: number;
    
    @IsString({
        message: "SIS - name não pertence ao tipo informado."
    })
    name: string;

    @IsString({
        message: "SIS - phone_number não pertence ao tipo informado."
    })
    phone_number: string;

    @IsDateString({}, {
        message: "Formato de data inválido."
    })
    date_of_birthday: string;

    constructor(profile: ProfileDTO) {
        this.name = profile.name;
        this.phone_number = profile.phone_number;
        this.date_of_birthday = profile.date_of_birthday;
    }
}