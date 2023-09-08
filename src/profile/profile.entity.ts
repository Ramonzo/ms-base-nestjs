import { Address } from 'src/address/address.entity';
import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

@Entity()
export class Profile  {
    @PrimaryGeneratedColumn()
    profile_id: number;

    @Column()
    name: string;
    
    @Column()
    date_of_birth: string;
    
    @Column()
    individual_taxpayer_registration: string;
    
    @Column()
    telephone_number: string;
    
    @Column()
    address_id: number;

    @OneToOne(() => Address, (address) => address.profile)
    address: Address;

    @Column()
    billing_address_id: number;

    @OneToOne(() => Address, (address) => address.profile)
    billing_address: Address;

    @OneToOne(() => User, (user) => user.profile)
    user: User
}