import { Document } from 'mongoose';
import { IsEmail, Matches, IsNotEmpty, IsString,  MaxLength, MinLength } from 'class-validator';
export interface UserI extends Document {
   
  readonly fname: string;

    IsNotEmpty();
  readonly lname: string;


  readonly password: string;

  readonly email: string;
  readonly phone: number;
  readonly address: string;
  readonly created_at: string;
  readonly updated_at: string;
}
