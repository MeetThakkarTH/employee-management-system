import { Optional } from 'sequelize';

export interface ICreateInventoryAttributes {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
}

export type IInventory = Optional<ICreateInventoryAttributes, 'id' | 'created_at' | 'updated_at'>;
