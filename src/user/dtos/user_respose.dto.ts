import { Entity } from 'typeorm';

@Entity()
export class UserResponseDTO {
    message: string[] = [];
    error: string = "";
    statusCode: number = 200;
}