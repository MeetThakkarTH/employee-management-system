import { Model, DataTypes, Sequelize, DecimalDataType } from 'sequelize';
import Employee from './employee';

class LeaveType extends Model {
  public id!: number;
  public employee_id!: number;
  public name!: string;
  public leave_balance!: DecimalDataType;
  public created_at!: Date;
  public updated_at!: Date;

  static initialize(sequelize: Sequelize): void {
    LeaveType.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        employee_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'employee',
            key: 'id',
          },
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        leave_balance: {
          type: DataTypes.DECIMAL,
          allowNull: false,
        },
        created_at: {
          type: DataTypes.DATE,
        },
        updated_at: {
          type: DataTypes.DATE,
        },
      },
      {
        sequelize,
        underscored: true,
        tableName: 'leave_type',
        timestamps: true,
      }
    );
    LeaveType.hasOne(Employee, { sourceKey: 'employee_id', foreignKey: 'id', as: 'employee' });
  }
}

export default LeaveType;
