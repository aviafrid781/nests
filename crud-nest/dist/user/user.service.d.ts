import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { User, UserDocument } from './schema/user.schema';
export declare class UserService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<UserDocument>, jwtService: JwtService);
    createUser(fname: string, lname: string, email: string, password: string, number: number, address: string): Promise<any>;
    findAll(limit: string, skip: string, fname: string): Promise<any>;
    find(id: string): Promise<any>;
    remove(id: string): Promise<any>;
    update(id: string, UserDocument: UserDocument): Promise<any>;
    signIn(email: string, password: string): Promise<{
        user: import("mongoose").Document<unknown, any, UserDocument> & User & Document & {
            _id: import("mongoose").Types.ObjectId;
        };
        accessToken: string;
    }>;
    findOne(email: string): Promise<any>;
}
