import { CreateUserDto } from './dto/create-user.dto';
import { UserI } from './interfaces/user.interface';
import { UserDocument } from './schema/user.schema';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(createUserDto: CreateUserDto): Promise<any>;
    findAll(limit: string, skip: string, fname: string): Promise<any>;
    find(id: string): Promise<any>;
    remove(id: string): Promise<any>;
    update(id: string, UserDocument: UserDocument): Promise<any>;
    signIn(email: string, password: string): Promise<{
        accessToken: string;
    }>;
    test(req: any, user: UserI): {
        message: string;
        user: UserI;
    };
}
