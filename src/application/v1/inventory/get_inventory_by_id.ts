import InventoryRepository, { InventoryNotFoundError } from '../../../domain/inventory/inventory_repository';
import InventoryModel from '../../../database/models/inventory';
import logger from '../../../lib/logging';
import { BadImplementationError, NotFoundError } from '../../exception';

class GetInventoryById {
  constructor(private inventoryRepository: InventoryRepository) {}
  async execute(id: number): Promise<InventoryModel | any> {
    try {
      const getInventoryId = await this.inventoryRepository.getInventoryById(id);
      return getInventoryId;
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

export default GetInventoryById;
