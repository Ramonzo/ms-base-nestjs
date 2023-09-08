import { Profile } from 'src/profile/profile.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

@Entity()
export class Address  {
    @PrimaryGeneratedColumn()
    address_id: number;

    @Column()
    street: string;

    @Column()
    street_number: string;
    
    @Column()
    complement: string;

    @Column()
    neighborhood: string;
    
    @Column()
    federal_unit: string;

    @Column()
    city: string;

    @Column()
    zip_code: string;

    // @Column()
    // latitude: string;

    // @Column()
    // longitude: string;

    @OneToOne(() => Profile, (profile) => profile.address)
    profile: Profile;
}