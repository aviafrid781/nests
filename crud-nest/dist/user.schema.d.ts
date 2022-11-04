import * as mongoose from 'mongoose';
export declare const userSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    fname?: string;
    lname?: string;
    email?: string;
    phone?: number;
    address?: string;
    created_at?: string;
    updated_at?: string;
}>;
