import { Table, Column, Model, PrimaryKey, DataType, Default, UpdatedAt, CreatedAt, AutoIncrement } from 'sequelize-typescript';

@Table({
    modelName: 'ms_cms_wallet',
    tableName: 'ms_cms_wallet',
},)

export class Wallet extends Model<Wallet> {

    @PrimaryKey
    @AutoIncrement
    @Column({ type: DataType.INTEGER, allowNull: false })
    walletId: number;

    @Column({ type: DataType.STRING(200), allowNull: false })
    username: string;

    @Column({ type: DataType.STRING(200), allowNull: false })
    password: string;

    @Column({ type: DataType.INTEGER, allowNull: false })
    amount: number;

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