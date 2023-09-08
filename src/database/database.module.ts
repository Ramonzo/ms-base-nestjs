
import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { UserController } from 'src/user/user.controller';
import { UserService } from 'src/user/user.service';
import { ProfileController } from 'src/profile/profile.controller';
import { AddressController } from 'src/address/address.controller';
import { ProfileService } from 'src/profile/profile.service';
import { AddressService } from 'src/address/address.service';
import { Address } from 'src/address/address.entity';
import { Profile } from 'src/profile/profile.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
  ],
  controllers: [
    UserController,
    ProfileController,
    AddressController
  ],
  providers: [
    UserService,
    ProfileService,
    AddressService
  ],
})

export class DatabaseModule {
  constructor(private dataSource: DataSource) {}
}
