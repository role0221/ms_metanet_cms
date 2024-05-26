import { Controller } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { WalletService } from './wallet.service';

@ApiBearerAuth()
@ApiTags(`wallet`)
@Controller(`wallet`)
// @ApiHeaders([{ name: 'hospCode', required: true }, { name: 'username', required: true }, { name: 'provinceCode', required: true }, { name: 'userCode', required: true },])
export class WalletController {
    constructor(readonly walletService: WalletService) { }


}