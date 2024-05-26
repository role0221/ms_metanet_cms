import { Wallet } from "model/wallet.model";
import { User } from "model/user.model";

export const userProviders = [
    { provide: 'USER_REPOSITORY', useValue: User },
    { provide: 'WALLET_REPOSITORY', useValue: Wallet },
]