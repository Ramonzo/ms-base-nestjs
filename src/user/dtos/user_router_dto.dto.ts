import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Entity } from 'typeorm';

@Entity()
export class UserRouterDTO {
    @Transform(({ value }) => String(value))
    @IsNotEmpty(
    {
        message: "Email precisa ser informado."
    })
    @IsEmail({
        domain_specific_validation: true,
        require_tld: true,
        blacklisted_chars: "\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0A\x0B\x0C\x0D\x0E\x0F\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1A\x1B\x1C\x1D\x1E\x1F\x7F'\"<>,|#!$%^&*()+=[]{};:`~?"
    },{
        message: "Email inválido. Verifique se o e-mail está correto."
    })
    email: string;
    
    @Transform(({ value }) => new String(value))
    @IsNotEmpty({
        message: "Informe uma senha."
    })
    @IsString({
        message: "SIS - password não pertence ao tipo informado."
    })
    password: string;

}