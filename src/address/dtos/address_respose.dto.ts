import { Entity } from 'typeorm';

@Entity()
export class AddressResponseDTO {
    message: string[] = [];
    error: string = "";
    statusCode: number = 200;
}