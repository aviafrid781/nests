import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUser } from './get-user.decorator';
import { UserI } from './interfaces/user.interface';
import { UserDocument } from './schema/user.schema';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('create')
    async createUser(@Body() createUserDto: CreateUserDto) {
        //const { password } = createUserDto;
        return await this.userService.createUser(createUserDto.fname, createUserDto.lname, createUserDto.email, createUserDto.password, createUserDto.number, createUserDto.address)


    }
    // @Post('create')
    // async createUser(@Body('fname') fname: string, @Body('lname') lname: string, @Body('email') email: string, @Body('number') number: number, @Body('address') address: string,) {

    //     return await this.userService.createUser(fname, lname, email, number, address)
    // }


    @Get()
    findAll(@Param('limit') limit: string, @Param('skip') skip: string, @Param('fname') fname: string) {
        return this.userService.findAll(limit, skip, fname);
    }

    @Get(':id')
    async find(@Param('id') id: string) {
        return this.userService.find(id);
    }


    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.userService.remove(id);
    }


    @Put(':id')
    update(@Param('id') id: string, @Body('') UserDocument: UserDocument) {
        return this.userService.update(id, UserDocument);
    }


    @Post('signIn')
    signIn(@Body('email') email: string, @Body('password') password: string): Promise<{ accessToken: string }> {
        return this.userService.signIn(email, password);
    }
    @Post('test')
    @UseGuards(AuthGuard('jwt'))
    test(@Req() req, @GetUser() user: UserI) {
        console.log(req);
        return { message: "User is authenticated", user: user }
    }



}
