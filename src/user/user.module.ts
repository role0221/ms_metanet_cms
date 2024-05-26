import { UserController } from './user.controller';
import { userProviders } from './user.providers';
import { UserService } from './user.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [UserController],
  providers: [UserService, ...userProviders]
})
export class UserModule { }
