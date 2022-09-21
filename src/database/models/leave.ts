import { Model, DataTypes, Sequelize } from 'sequelize';
import LeaveType from './leave_type';

class Leave extends Model {
  public id!: number;
  public reason!: string;
  public leave_type_id!: number;
  public created_at!: Date;
  public updated_at!: Date;

  static initialize(sequelize: Sequelize): void {
    Leave.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        leave_type_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'leave_type',
            key: 'id',
          },
        },
        reason: {
          type: DataTypes.STRING,
        },
        duration: {
          type: DataTypes.DECIMAL,
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        sequelize,
        underscored: true,
        tableName: 'leave',
        timestamps: true,
      }
    );
    Leave.hasOne(LeaveType, { sourceKey: 'leave_type_id', foreignKey: 'id', as: 'leave_type' });
  }
}

export default Leave;
