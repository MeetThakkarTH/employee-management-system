import { Optional } from 'sequelize';

export interface ICreateEmployeeAttributes {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  address: string;
  mobile_no: string;
  date_of_birth: Date;
  date_of_joining: Date;
  created_at: Date;
  updated_at: Date;
}

export type IEmployee = Optional<ICreateEmployeeAttributes, 'id' | 'created_at' | 'updated_at'>;
