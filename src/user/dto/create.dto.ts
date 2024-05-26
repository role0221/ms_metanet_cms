import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateUserJwtDto {

    @ApiProperty()
    @IsNotEmpty({ message: 'JWT_REQUIRED' })
    readonly jwt: string;

}