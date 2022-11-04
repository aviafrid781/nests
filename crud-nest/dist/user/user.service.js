"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const bcrypt = require("bcrypt");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("./schema/user.schema");
let UserService = class UserService {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    async createUser(fname, lname, email, password, number, address) {
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
        };
        const createdUser = await this.userModel.create(user);
        return createdUser;
    }
    async findAll(limit, skip, fname) {
        const limitValue = parseInt(limit) || 2;
        const skipValue = parseInt(skip) || 0;
        console.log(fname);
        console.log(limitValue);
        console.log(skipValue);
        const users = await this.userModel.find({ fname: fname }).sort({ fname: 1 }).skip(skipValue).limit(limitValue);
        return users;
    }
    async find(id) {
        return await this.userModel.findById(id);
    }
    async remove(id) {
        return await this.userModel.findByIdAndRemove(id);
    }
    async update(id, UserDocument) {
        return this.userModel.findByIdAndUpdate(id, UserDocument);
    }
    async signIn(email, password) {
        const user = await this.userModel.findOne({ email });
        if (email === user.email && (await bcrypt.compare(password, user.password))) {
            const payload = { email };
            const accessToken = await this.jwtService.sign(payload);
            return { user: user, accessToken: accessToken };
        }
        else {
            throw new common_1.UnauthorizedException('user not found');
        }
    }
    async findOne(email) {
        return await this.userModel.findOne({ email: email });
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map