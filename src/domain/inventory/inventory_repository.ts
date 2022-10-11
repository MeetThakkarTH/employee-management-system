import InventoryModel from '../../database/models/inventory';
import Database from '../../lib/database';
import CustomError from '../../lib/error';
import { IInventory } from './inventory';
import logger from '../../lib/logging';

class InventoryRepositoryError extends CustomError {}
class InventoryNotFoundError extends CustomError {}

class InventoryRepository {
  constructor(database: Database) {
    InventoryModel.initialize(database.getClient());
  }
  async createInventory(body: IInventory): Promise<InventoryModel> {
    try {
      const saveInventory = await InventoryModel.create(body);
      return saveInventory;
    } catch (error: any) {
      logger.error(`${error} ${error.stack}`);
      throw new InventoryRepositoryError(`Error while saving the Inventory: ${error}`);
    }
  }

  async getInventories(): Promise<InventoryModel[]> {
    try {
      const getInventory = await InventoryModel.findAll();
      return getInventory;
    } catch (error: any) {
      logger.error(`${error} ${error.stack}`);
      throw new InventoryRepositoryError(`Error while getting the Inventory: ${error}`);
    }
  }

  async getInventoryById(id: number): Promise<InventoryModel | any> {
    try {
      const getInventoryId = await InventoryModel.findByPk(id);

      if (getInventoryId !== null) {
        return getInventoryId;
      } else {
        throw new InventoryNotFoundError('Inventory id not found');
      }
    } catch (error: any) {
      logger.error(`${error} ${error.stack}`);
      throw error;
    }
  }

  async updateInventory(body: IInventory): Promise<InventoryModel | any> {
    try {
      const inventoryFindById = await InventoryModel.findByPk(body.id);
      if (inventoryFindById !== null) {
        await InventoryModel.update(body, {
          where: { id: body.id },
        });

        return { message: 'Inventory updated successfully' };
      } else {
        throw new InventoryNotFoundError('Inventory id not found');
      }
    } catch (error: any) {
      logger.error(`${error} ${error.stack}`);
      throw error;
    }
  }

  async deleteInventory(body: IInventory): Promise<InventoryModel | any> {
    try {
      const inventoryFindById = await InventoryModel.findByPk(body.id);
      if (inventoryFindById) {
        await InventoryModel.destroy({
          where: {
            id: body.id,
          },
        });

        return { message: 'Inventory deleted successfully' };
      } else {
        throw new InventoryNotFoundError('Inventory id not found');
      }
    } catch (error: any) {
      logger.error(error);
      throw error;
    }
  }
}

export { InventoryRepositoryError, InventoryNotFoundError };
export default InventoryRepository;
