import { Profile } from 'src/profile/profile.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

@Entity()
export class User  {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({ default: true })
    refresh_token: string;

    @Column()
    token: string;
    
    @Column()
    profile_id: number;

    @OneToOne(() => Profile, (profile) => profile.user)
    profile: Profile;

    @Column({ default: true })
    delete: boolean;

    @Column()
    block: boolean;

    @Column()
    block_expire: string;

    @Column({ default: true })
    cookies: boolean;
}