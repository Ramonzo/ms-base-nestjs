import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserRouterDTO } from './dtos/user_router_dto.dto';
import { UserResponseDTO } from './dtos/user_respose.dto';

@Controller('/api/v1/user')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Post()
    async create(@Body(ValidationPipe) userData: UserRouterDTO) {
        const response = new UserResponseDTO();

        const newUser = new User();
        newUser.email = userData.email;
        newUser.password = userData.password;

        try{
            const created = await this.userService.create(newUser);
            if(created){
                response.message = ["Usuário criado com sucesso!"]
            }else{
                const response = new UserResponseDTO();
                response.message = ["Algo deu errado. Não foi possível criar o usuário."];
                response.statusCode = 400;
            }
            return response;
        } catch(err){
            if(err.errno === 1062){
                response.message = ["Email não permitido para cadastro."];
                response.statusCode = 400;
            }else{
                response.message = ["Algo deu errado. Não foi possível criar o usuário."];
                response.statusCode = 500;
            }
            return response;
        }
    }
}
