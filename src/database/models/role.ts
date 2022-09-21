import { Model, DataTypes, Sequelize } from 'sequelize';

class Roles extends Model {
  public id!: number;
  public name!: string;
  public created_at!: Date;
  public updated_at!: Date;

  static initialize(sequelize: Sequelize): void {
    Roles.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
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
        tableName: 'roles',
        timestamps: true,
      }
    );
  }
}

export default Roles;
