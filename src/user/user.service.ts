import { Inject, Injectable } from '@nestjs/common';
import { User } from 'model/user.model';
import { Wallet } from 'model/wallet.model';
import { Transaction } from 'sequelize';
// import { Wallet } from 'model/wallet.model';

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: typeof User,
        @Inject('WALLET_REPOSITORY')
        private WalletRepository: typeof Wallet,
    ) { }

    async findUser(username: string): Promise<number> {
        return await this.userRepository.count({
            where: { username }
        })
    }

    async createUser(decodedToken: any, transaction?: Transaction): Promise<User> {
        return await this.userRepository.create(decodedToken, { transaction })
    }

    async createWallet(userId: number, walletPass: string, createdBy: string, transaction?: Transaction): Promise<Wallet> {
        return await this.WalletRepository.create({ walletPass, userId, createdBy }, { transaction })
    }
}