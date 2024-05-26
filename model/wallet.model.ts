import { Table, Column, Model, PrimaryKey, DataType, Default, UpdatedAt, CreatedAt, AutoIncrement, ForeignKey } from 'sequelize-typescript';
import { User } from './user.model';

@Table({
    modelName: 'ms_cms_wallet',
    tableName: 'ms_cms_wallet',
},)

export class Wallet extends Model<Wallet> {

    @PrimaryKey
    @AutoIncrement
    @Column({ type: DataType.INTEGER, allowNull: false })
    walletId: number;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER, allowNull: false })
    userId: number;

    @Column({ type: DataType.STRING(200), allowNull: false })
    walletPass: string;

    @Default(0)
    @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
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

export const WalletAttributes = ['walletId', 'userId', 'walletPass', 'amount', 'status', 'updatedBy', 'updatedAt', 'createdBy', 'createdAt'];
export const FilterWalletAttributes = ['walletId', 'userId', 'walletPass'];