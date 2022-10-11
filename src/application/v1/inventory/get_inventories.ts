import InventoryRepository from '../../../domain/inventory/inventory_repository';
import InventoryModel from '../../../database/models/inventory';
import logger from '../../../lib/logging';

class GetInventories {
  constructor(private inventoryRepository: InventoryRepository) {}
  async execute(): Promise<InventoryModel[]> {
    try {
      const getInventories = await this.inventoryRepository.getInventories();
      return getInventories;
    } catch (err: any) {
      logger.error(err.message);
      throw err;
    }
  }
}

export default GetInventories;
