import { JwtPayload } from './jwt-payload.interface';
import { UserService } from './user.service';
declare const jwtStrategy_base: any;
export declare class jwtStrategy extends jwtStrategy_base {
    private userService;
    constructor(userService: UserService);
    validate(payload: JwtPayload): unknown;
}
export {};
