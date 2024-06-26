import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from 'database/database.module';
import { UserModule } from './user/user.module';
import { WalletModule } from './wallet/wallet.module';

@Module({
  imports: [DatabaseModule, UserModule, WalletModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }