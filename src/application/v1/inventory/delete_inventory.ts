import InventoryRepository, { InventoryNotFoundError } from '../../../domain/inventory/inventory_repository';
import InventoryModel from '../../../database/models/inventory';
import logger from '../../../lib/logging';
import { BadImplementationError, NotFoundError } from '../../exception';
import { IInventory } from '../../../domain/inventory/inventory';

class DeleteInventory {
  constructor(private inventoryRepository: InventoryRepository) {}
  async execute(body: IInventory): Promise<InventoryModel | any> {
    try {
      const deleteInventory = await this.inventoryRepository.deleteInventory(body);
      return deleteInventory;
    } catch (error: any) {
      logger.error(`Error when deleting inventory. ${error.toString()}. ${error.stack}`);
      switch (error.constructor) {
        case InventoryNotFoundError:
          throw new NotFoundError('Inventory not found', 404);
        default:
          throw new BadImplementationError('Something went wrong.', error.toString());
      }
    }
  }
}

export default DeleteInventory;
