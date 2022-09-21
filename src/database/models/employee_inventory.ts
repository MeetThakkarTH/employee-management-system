import { Model, DataTypes, Sequelize } from 'sequelize';
import Employee from './employee';
import Inventory from './inventory';

class EmployeeInventory extends Model {
  public id!: number;
  public employee_id!: number;
  public inventory_id!: number;
  public created_at!: Date;
  public updated_at!: Date;

  static initialize(sequelize: Sequelize): void {
    EmployeeInventory.init(
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
        inventory_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'inventory',
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
        tableName: 'employee_inventory',
        timestamps: true,
      }
    );
    Employee.hasMany(EmployeeInventory, { foreignKey: 'employee_id', as: 'employee_inventory' });
    EmployeeInventory.hasOne(Inventory, { sourceKey: 'inventory_id', foreignKey: 'id', as: 'inventory' });
    EmployeeInventory.hasOne(Employee, { sourceKey: 'employee_id', foreignKey: 'id', as: 'employee' });
  }
}

export default EmployeeInventory;
