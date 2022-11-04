import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { clear } from 'console';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';


@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://crud1:vxftT8WQCrv7j2uA@cluster0.tamfjg8.mongodb.net/?retryWrites=true&w=majority`,
    ),

    // MongooseModule.forFeature([{ user ,schema: userSchema }]), 
    UserModule,

    

   
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
