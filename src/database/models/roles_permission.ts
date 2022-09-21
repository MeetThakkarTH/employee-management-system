import { Model, DataTypes, Sequelize } from 'sequelize';
import Roles from './role';
import Permissions from './permission';

class RolePermission extends Model {
  public id!: number;
  public permission_id!: number;
  public role_id!: number;
  public created_at!: Date;
  public updated_at!: Date;

  static initialize(sequelize: Sequelize): void {
    RolePermission.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        permission_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'permissions',
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
        tableName: 'roles_permissions',
        timestamps: true,
      }
    );
    RolePermission.hasOne(Roles, { sourceKey: 'role_id', foreignKey: 'id', as: 'roles' });
    RolePermission.hasOne(Permissions, { sourceKey: 'permission_id', foreignKey: 'id', as: 'permissions' });
  }
}

export default RolePermission;
