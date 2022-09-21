import { Model, DataTypes, Sequelize } from 'sequelize';
import Employee from './employee';

class LeaveType extends Model {
  public id!: number;
  public name!: string;
  public employee_id!: number;
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
        tableName: 'leave_type',
        timestamps: true,
      }
    );
    LeaveType.hasOne(Employee, { sourceKey: 'employee_id', foreignKey: 'id', as: 'employee' });
  }
}

export default LeaveType;
