import { WalletController } from './wallet.controller';
import { walletProviders } from './wallet.providers';
import { WalletService } from './wallet.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [WalletController],
  providers: [WalletService, ...walletProviders]
})
export class WalletModule { }