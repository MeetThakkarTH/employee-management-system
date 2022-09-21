import { Model, DataTypes, Sequelize } from 'sequelize';
import Designation from './designation';
import Employee from './employee';

class EmployeeDesignation extends Model {
  public id!: number;
  public employee_id!: number;
  public designation_id!: number;
  public created_at!: Date;
  public updated_at!: Date;

  static initialize(sequelize: Sequelize): void {
    EmployeeDesignation.init(
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
        designation_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'designation',
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
        tableName: 'employee_designation',
        timestamps: true,
      }
    );
    Employee.hasMany(EmployeeDesignation, { foreignKey: 'employee_id', as: 'employee_designation' });
    EmployeeDesignation.hasOne(Designation, { sourceKey: 'designation_id', foreignKey: 'id', as: 'designation' });
    EmployeeDesignation.hasOne(Employee, { sourceKey: 'employee_id', foreignKey: 'id', as: 'employee' });
  }
}

export default EmployeeDesignation;
