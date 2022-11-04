import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtPayload } from './jwt-payload.interface';

import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { User, UserDocument } from './schema/user.schema';
@Injectable()
export class UserService {
    // findOne: any;
    constructor(@InjectModel(User.name)
    private userModel: Model<UserDocument>,
        private jwtService: JwtService
    ) { }

    async createUser(fname: string, lname: string, email: string, password: string, number: number, address: string) {

        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);
        console.log(' salt', salt);
        console.log(' hashPassword', hashPassword);
        const user = {

            fname: fname,
            lname: lname,
            email: email,
            password: hashPassword,
            number: number,
            address: address,
        }
        const createdUser = await this.userModel.create(user)
        // createdUser.save();
        return createdUser
    }

    async findAll(limit: string, skip: string, fname: string) {
        const limitValue = parseInt(limit) || 2;
        const skipValue = parseInt(skip) || 0;

        console.log(fname);
        console.log(limitValue);
        console.log(skipValue);

        const users = await this.userModel.find({ fname: fname }).sort({ fname: 1 }).skip(skipValue).limit(limitValue);
        return users
    }

    async find(id: string) {
        return await this.userModel.findById(id);
    }
    async remove(id: string) {

        return await this.userModel.findByIdAndRemove(id);
    }

    async update(id: string, UserDocument: UserDocument) {
        return this.userModel.findByIdAndUpdate(id, UserDocument);
    }


    async signIn(email: string, password: string): Promise<{ user: import("mongoose").Document<unknown, any, UserDocument> & User & Document & { _id: import("mongoose").Types.ObjectId; }; accessToken: string; }> {
        // console.log(" email dto", email)
        //console.log(" password dto", password)
        const user = await this.userModel.findOne({ email });
        // console.log(" database pass", user.password);
        // console.log(" database mail", user.email)
        if (email === user.email && (await bcrypt.compare(password, user.password))) {
            const payload: JwtPayload = { email };
            const accessToken: string = await this.jwtService.sign(payload);
            return { user: user, accessToken: accessToken };
        }
        else {
            throw new UnauthorizedException('user not found');
        }
    }

    async findOne(email: string) { 
        return await this.userModel.findOne({email: email})
    }

}
