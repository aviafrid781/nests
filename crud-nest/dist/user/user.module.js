"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var UserModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const passport_1 = require("@nestjs/passport");
const user_schema_1 = require("./schema/user.schema");
const user_controller_1 = require("./user.controller");
const user_service_1 = require("./user.service");
const jwt_1 = require("@nestjs/jwt");
const jwt_strategy_1 = require("./jwt.strategy");
let UserModule = UserModule_1 = class UserModule {
};
UserModule = UserModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: user_schema_1.User.name, schema: user_schema_1.UserSchema }]),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.register({
                secret: 'topSecret51',
                signOptions: {
                    expiresIn: 3600,
                },
            }),
            UserModule_1,
        ],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService, jwt_strategy_1.jwtStrategy],
        exports: [jwt_strategy_1.jwtStrategy, mongoose_1.MongooseModule]
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map