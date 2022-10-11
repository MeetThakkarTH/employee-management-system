import InventoryRepository, { InventoryNotFoundError } from '../../../domain/inventory/inventory_repository';
import InventoryModel from '../../../database/models/inventory';
import { IInventory } from '../../../domain/inventory/inventory';
import logger from '../../../lib/logging';
import { BadImplementationError, NotFoundError } from '../../exception';

class UpdateInventory {
  constructor(private inventoryRepository: InventoryRepository) {}
  async execute(body: IInventory): Promise<InventoryModel | any> {
    try {
      const updateInventory = await this.inventoryRepository.updateInventory(body);
      return updateInventory;
    } catch (err: any) {
      logger.error(`Error when getting inventory for id. ${err.toString()}. ${err.stack}`);
      switch (err.constructor) {
        case InventoryNotFoundError:
          throw new NotFoundError('Inventory not found', 404);
        default:
          throw new BadImplementationError('Something went wrong.', err.toString());
      }
    }
  }
}

export default UpdateInventory;
