import { DecimalDataType, Optional } from 'sequelize';

export interface ICreateLeaveAttributes {
  id: number;
  employee_id: number;
  name: string;
  leave_balance: DecimalDataType;
  created_at: Date;
  updated_at: Date;
}

export type ILeave = Optional<ICreateLeaveAttributes, 'id' | 'created_at' | 'updated_at'>;
