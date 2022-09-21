import { Model, DataTypes, Sequelize } from 'sequelize';
import Employee from './employee';
import Roles from './role';

class EmployeeRole extends Model {
  public id!: number;
  public employee_id!: number;
  public role_id!: number;
  public created_at!: Date;
  public updated_at!: Date;

  static initialize(sequelize: Sequelize): void {
    EmployeeRole.init(
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
        role_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'roles',
            key: 'id',
          },
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
        tableName: 'employee_roles',
        timestamps: true,
      }
    );
    Employee.hasMany(EmployeeRole, { foreignKey: 'employee_id', as: 'employee_roles' });
    EmployeeRole.hasOne(Roles, { sourceKey: 'role_id', foreignKey: 'id', as: 'roles' });
    EmployeeRole.hasOne(Employee, { sourceKey: 'employee_id', foreignKey: 'id', as: 'employee' });
  }
}

export default EmployeeRole;
