import { Model, DataTypes, Sequelize } from 'sequelize';
import Employee from './employee';

class Feedback extends Model {
  public id!: number;
  public feedback_receiver_id!: number;
  public feedback_sender_id!: number;
  public feedback!: string;
  public created_at!: Date;
  public updated_at!: Date;

  static initialize(sequelize: Sequelize): void {
    Feedback.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        feedback_receiver_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'employee',
            key: 'id',
          },
        },
        feedback_sender_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'employee',
            key: 'id',
          },
        },
        feedback: {
          type: DataTypes.STRING,
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
        tableName: 'feedback',
        timestamps: true,
      }
    );
    Feedback.hasOne(Employee, { sourceKey: 'employee_id', foreignKey: 'id', as: 'employee' });
  }
}

export default Feedback;
