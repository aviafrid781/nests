import { Document } from 'mongoose';
export interface UserI extends Document {
    readonly fname: string;
    IsNotEmpty(): any;
    readonly lname: string;
    readonly password: string;
    readonly email: string;
    readonly phone: number;
    readonly address: string;
    readonly created_at: string;
    readonly updated_at: string;
}
