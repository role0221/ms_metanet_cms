import { Inject, Injectable } from '@nestjs/common';
import { Wallet } from 'model/wallet.model';
// import { User } from 'model/user.model';

@Injectable()
export class WalletService {
    constructor(
        // @Inject('USER_REPOSITORY')
        // private userRepository: typeof User,
        @Inject('WALLET_REPOSITORY')
        private WalletRepository: typeof Wallet,
    ) { }

    async findTest(): Promise<Wallet[]> {
        return await this.WalletRepository.findAll()
    }
}