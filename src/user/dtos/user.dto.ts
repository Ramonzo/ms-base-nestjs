import { IsBoolean, IsDateString, IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Profile } from 'src/profile/profile.entity';
import { Entity } from 'typeorm';

@Entity()
export class UserDTO {
    readonly user_id: number;
    
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
    
    @IsNotEmpty({
        message: "Informe uma senha."
    })
    @IsString({
        message: "SIS - password não pertence ao tipo informado."
    })
    password: string;

    @IsString({
        message: "SIS - refresh_token não pertence ao tipo informado."
    })
    refresh_token: string;

    @IsString({
        message: "SIS - token não pertence ao tipo informado."
    })
    token: string;
    
    readonly profile_id: number;
    
    profile: Profile;
    
    @IsBoolean({
        message: "SIS - delete não pertence ao tipo informado."
    })
    delete: boolean = false;
    
    @IsBoolean({
        message: "SIS - block não pertence ao tipo informado."
    })
    block: boolean = false;
    
    @IsDateString({},{
        message: "Formato de data inválido."
    })
    block_expire: string;
    
    @IsBoolean({
        message: "SIS - cookies não pertence ao tipo informado."
    })
    readonly cookies: boolean = false;

    constructor(user: UserDTO) {
        this.email = user.email;
        this.password = user.password;
        this.delete = user.delete;
        this.block = user.block;
        this.block_expire = user.block_expire;
        this.cookies = user.cookies;
    }
}