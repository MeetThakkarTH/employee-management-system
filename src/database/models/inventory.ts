import { Model, DataTypes, Sequelize } from 'sequelize';

class Inventory extends Model {
  public id!: number;
  public name!: string;
  public created_at!: Date;
  public updated_at!: Date;

  static initialize(sequelize: Sequelize): void {
    Inventory.init(
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
        tableName: 'inventory',
        timestamps: true,
      }
    );
  }
}

export default Inventory;
