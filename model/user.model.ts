import { Table, Column, Model, PrimaryKey, DataType, Default, UpdatedAt, CreatedAt, AutoIncrement } from 'sequelize-typescript';
import { ROW_STATUS } from '@/constants/status';

@Table({
    modelName: 'ms_cms_user',
    tableName: 'ms_cms_user',
},)

export class User extends Model<User> {

    @PrimaryKey
    @AutoIncrement
    @Column({ type: DataType.INTEGER, allowNull: false })
    userId: number;

    @Column({ type: DataType.STRING(200), allowNull: false })
    username: string;

    @Column({ type: DataType.STRING(200), allowNull: false })
    password: string;

    @Default(ROW_STATUS.ACTIVE)
    @Column({ type: DataType.ENUM(...Object.values(ROW_STATUS)) })
    status: ROW_STATUS;

    @Default(null)
    @Column({ type: DataType.STRING(50) })
    updatedBy: string;

    @UpdatedAt
    @Default(null)
    @Column({ type: DataType.DATE })
    updatedAt: Date;

    @Column({ type: DataType.STRING(50) })
    createdBy: string;

    @CreatedAt
    @Column({ type: DataType.DATE, allowNull: false })
    createdAt: Date;

}

export const UserAttributes = ['id', 'username', 'password', 'status', 'updatedBy', 'updatedAt', 'createdBy', 'createdAt'];
export const FilterUserAttributes = ['id', 'username', 'password'];