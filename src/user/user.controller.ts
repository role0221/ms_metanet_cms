import { ApiBearerAuth, ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { BadRequestException, Controller, Post, Res } from '@nestjs/common';
import { sequelize } from 'database/database.providers';
import { UserService } from './user.service';
import { FastifyReply } from 'fastify';
import * as jwt from 'jsonwebtoken';

import { BodyWithCreatedBy } from '@/decorator/created-by.decorator';
import { CreateUserJwtDto } from './dto/create.dto';
import { MSG_USER } from './user.schema';

@ApiBearerAuth()
@ApiTags(`user`)
@Controller(`user/private`)
// @ApiHeaders([{ name: 'hospCode', required: true }, { name: 'username', required: true }, { name: 'provinceCode', required: true }, { name: 'userCode', required: true },])
export class UserController {
    constructor(readonly userService: UserService) { }

    @Post()
    @ApiOperation({ summary: `Create user & wallet` })
    @ApiOkResponse({ type: String })
    @ApiBody({ type: CreateUserJwtDto })
    async create(@Res() res: FastifyReply,
        // @GetHeader(['hospCode', 'userCode', 'username']) header: HeaderDto,
        @BodyWithCreatedBy() createUserJwtDto: CreateUserJwtDto) {
        const decodedToken = jwt.verify(createUserJwtDto.jwt, process.env.JWT_SECRET);
        const hasUser = await this.userService.findUser(decodedToken.username)
        if (hasUser) throw new BadRequestException(MSG_USER.DUPLICATE_USER)

        const transaction = await sequelize.transaction();
        try {

            const hasCreateUser = await this.userService.createUser(decodedToken, transaction)
            if (!hasCreateUser) throw new BadRequestException(MSG_USER.INVALID_CREATED)

            const hasCreateWallet = await this.userService.createWallet(hasCreateUser.userId, decodedToken.password, decodedToken.createdBy, transaction)
            if (!hasCreateWallet) throw new BadRequestException(MSG_USER.INVALID_CREATED)

            await transaction.commit();
            return res.send(hasCreateUser.userId)
        } catch (error) {
            console.log(error)
            await transaction.rollback();
            if (hasUser) throw new BadRequestException(MSG_USER.INVALID_CREATED)
        }
    }
}