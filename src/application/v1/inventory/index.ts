import Database from '../../../lib/database';
import InventoryRepository from '../../../domain/inventory/inventory_repository';
import CreateInventory from './create_inventory';
import GetInventories from './get_inventories';
import UpdateInventory from './update_inventory';
import DeleteInventory from './delete_inventory';
import GetInventoryById from './get_inventory_by_id';

export interface InventoryApplication {
  createInventory: CreateInventory;
  getInventories: GetInventories;
  updateInventory: UpdateInventory;
  deleteInventory: DeleteInventory;
  getInventoryById: GetInventoryById;
}
export const InventoryApplication = (): InventoryApplication => {
  const inventoryRepository = new InventoryRepository(Database.getInstance());
  const createInventory = new CreateInventory(inventoryRepository);
  const getInventories = new GetInventories(inventoryRepository);
  const updateInventory = new UpdateInventory(inventoryRepository);
  const deleteInventory = new DeleteInventory(inventoryRepository);
  const getInventoryById = new GetInventoryById(inventoryRepository);
  return { createInventory, getInventories, updateInventory, deleteInventory, getInventoryById };
};
export default {
  InventoryApplication,
};
