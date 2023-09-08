import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Profile } from 'src/profile/profile.entity';
import { Address } from 'src/address/address.entity';
import { ProfileModule } from '../profile/profile.module';
import { AddressModule } from '../address/address.module';

@Module({
    imports: [
        ProfileModule, 
        AddressModule,
        TypeOrmModule.forFeature([User, Profile, Address]),
    ],
    controllers: [UserController],
    providers: [UserService],
    exports: [TypeOrmModule]
})
export class UserModule { }
