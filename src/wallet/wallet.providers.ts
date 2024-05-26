import { User } from "model/user.model";
import { Wallet } from "model/wallet.model";

export const walletProviders = [
    { provide: 'USER_REPOSITORY', useValue: User },
    { provide: 'WALLET_REPOSITORY', useValue: Wallet },
]