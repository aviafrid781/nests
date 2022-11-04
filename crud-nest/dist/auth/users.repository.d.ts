import { User } from './user.entity';
import { Document } from 'mongoose';
export declare class UsersRepository extends Document<User> {
    readonly username: string;
    readonly password: string;
}
