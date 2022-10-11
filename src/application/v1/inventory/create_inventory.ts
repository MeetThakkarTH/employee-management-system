import InventoryRepository from '../../../domain/inventory/inventory_repository';
import InventoryModel from '../../../database/models/inventory';
import logger from '../../../lib/logging';
import { BadImplementationError } from '../../exception';
import { IInventory } from '../../../domain/inventory/inventory';

class CreateInventory {
  constructor(private inventoryRepository: InventoryRepository) {}
  async execute(body: IInventory): Promise<InventoryModel> {
    try {
      return await this.inventoryRepository.createInventory(body);
    } catch (err: any) {
      logger.error(err.message);
      throw new BadImplementationError(err.message);
    }
  }
}

export default CreateInventory;
