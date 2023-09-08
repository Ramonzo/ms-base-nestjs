import { Body, Controller, Post, Put, ValidationPipe } from '@nestjs/common';
import { Address } from './address.entity';
import { AddressService } from './address.service';
import { AddressResponseDTO } from './dtos/address_respose.dto';
import { AddressRouterDTO } from './dtos/address_router_dto.dto';

@Controller('/api/v1/user/address')
export class AddressController {
    constructor(private readonly addressService: AddressService) {
    }

    @Post()
    async create(@Body(ValidationPipe) addressData: Partial<AddressRouterDTO>) {
        const response = new AddressResponseDTO();

        const newAddress = new Address();
        newAddress.street = addressData.street;
        newAddress.street_number = addressData.street_number;
        newAddress.complement = addressData.complement;
        newAddress.neighborhood = addressData.neighborhood;
        newAddress.federal_unit = addressData.federal_unit;
        newAddress.city = addressData.city;
        newAddress.zip_code = addressData.zip_code;

        try{
            const created = await this.addressService.create(newAddress);
            if(created){
                response.message = ["Endereço criado com sucesso!"]
            }else{
                const response = new AddressResponseDTO();
                response.message = ["Algo deu errado. Não foi possível criar o endereço."];
                response.statusCode = 400;
            }
            return response;
        } catch(err){
            response.message = ["Algo deu errado. Não foi possível criar o endereço."];
            response.error = err;
            response.statusCode = 500;
            return response;
        }
    }

    @Put()
    async edit(@Body(ValidationPipe) addressData: Partial<AddressRouterDTO>) {
        const response = new AddressResponseDTO();

        const editedAddress = new Address();
        editedAddress.address_id = addressData.address_id;
        editedAddress.street = addressData.street;
        editedAddress.street_number = addressData.street_number;
        editedAddress.complement = addressData.complement;
        editedAddress.neighborhood = addressData.neighborhood;
        editedAddress.federal_unit = addressData.federal_unit;
        editedAddress.city = addressData.city;
        editedAddress.zip_code = addressData.zip_code;

        try{
            const created = await this.addressService.update(editedAddress);
            if(created){
                response.message = ["Endereço editado com sucesso!"]
            }else{
                const response = new AddressResponseDTO();
                response.message = ["Algo deu errado. Não foi possível editar o endereço."];
                response.statusCode = 400;
            }
            return response;
        } catch(err){
            response.message = ["Algo deu errado. Não foi possível editar o endereço."];
            response.error = err;
            response.statusCode = 500;
            return response;
        }
    }
}
