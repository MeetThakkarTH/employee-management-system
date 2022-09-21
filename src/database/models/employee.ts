import { Model, DataTypes, Sequelize } from 'sequelize';

class Employee extends Model {
  public id!: number;
  public first_name!: string;
  public last_name!: string;
  public email!: string;
  public gender!: string;
  public address!: string;
  public mobile_no!: string;
  public date_of_birth!: Date;
  public date_of_joining!: Date;
  public created_at!: Date;
  public updated_at!: Date;

  static initialize(sequelize: Sequelize): void {
    Employee.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        first_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        last_name: {
          type: DataTypes.STRING,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        gender: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        address: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        date_of_birth: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        date_of_joining: {
          type: DataTypes.DATE,
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
        tableName: 'employee',
        timestamps: true,
      }
    );
  }
}

export default Employee;
