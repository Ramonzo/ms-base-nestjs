import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Entity } from 'typeorm';

@Entity()
export class UserResponseDTO {
    message: string[] = [];
    error: string = "";
    statusCode: number = 200;
}