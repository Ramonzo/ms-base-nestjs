import { Entity } from 'typeorm';

@Entity()
export class ProfileResponseDTO {
    message: string[] = [];
    error: string = "";
    statusCode: number = 200;
}