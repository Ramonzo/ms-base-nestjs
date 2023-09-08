import { Body, Controller, Post, Put, ValidationPipe } from '@nestjs/common';
import { ProfileResponseDTO } from './dtos/profile_respose.dto';
import { ProfileRouterDTO } from './dtos/profile_router_dto.dto';
import { Profile } from './profile.entity';
import { ProfileService } from './profile.service';

@Controller('/api/v1/user/profile')
export class ProfileController {
    constructor(private readonly profileService: ProfileService) {
    }

    @Post()
    async create(@Body(ValidationPipe) profileData: ProfileRouterDTO) {
        const response = new ProfileResponseDTO();

        const newProfile = new Profile();
        newProfile.name = profileData.name;
        newProfile.date_of_birthday = profileData.date_of_birthday;
        newProfile.phone_number = profileData.phone_number;

        try{
            const created = await this.profileService.create(newProfile);
            if(created){
                response.message = ["Perfil criado com sucesso!"]
            }else{
                const response = new ProfileResponseDTO();
                response.message = ["Algo deu errado. Não foi possível criar o perfil."];
                response.statusCode = 400;
            }
            return response;
        } catch(err){
            response.message = ["Algo deu errado. Não foi possível criar o perfil."];
            response.statusCode = 500;
            return response;
        }
    }

    @Put()
    async edit(@Body(ValidationPipe) profileData: Partial<ProfileRouterDTO>) {
        const response = new ProfileResponseDTO();

        const editProfile = new Profile();
        editProfile.profile_id = profileData.profile_id;
        editProfile.name = profileData.name;
        editProfile.date_of_birthday = profileData.date_of_birthday;
        editProfile.phone_number = profileData.phone_number;

        try{
            const created = await this.profileService.update(editProfile);
            if(created){
                response.message = ["Perfil criado com sucesso!"]
            }else{
                const response = new ProfileResponseDTO();
                response.message = ["Algo deu errado. Não foi possível criar o perfil."];
                response.statusCode = 400;
            }
            return response;
        } catch(err){
            response.message = ["Algo deu errado. Não foi possível criar o perfil."];
            response.statusCode = 500;
            return response;
        }
    }
}
