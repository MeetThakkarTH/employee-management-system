import { Model, DataTypes, Sequelize } from 'sequelize';
import Employee from './employee';
import Leave from './leave';

class EmployeeLeave extends Model {
  public id!: number;
  public employee_id!: number;
  public leave_id!: number;
  public leave_request_id!: number;
  public created_at!: Date;
  public updated_at!: Date;

  static initialize(sequelize: Sequelize): void {
    EmployeeLeave.init(
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
        leave_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'leave',
            key: 'id',
          },
        },
        leave_request_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'employee',
            key: 'id',
          },
        },
        status: {
          type: DataTypes.ENUM('Approved', 'Rejected', 'Pending'),
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
        tableName: 'employee_leave',
        timestamps: true,
      }
    );
    EmployeeLeave.hasOne(Leave, { sourceKey: 'leave_id', foreignKey: 'id', as: 'leave' });
    EmployeeLeave.hasOne(Employee, { sourceKey: 'employee_id', foreignKey: 'id', as: 'employee' });
  }
}

export default EmployeeLeave;
