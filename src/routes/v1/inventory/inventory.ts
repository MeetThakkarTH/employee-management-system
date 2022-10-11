import express, { Router } from 'express';
import { ApplicationError } from '../../../application/exception';
import { InventoryApplication } from '../../../application/v1/inventory';
import logger from '../../../lib/logging';

const app = InventoryApplication();
export const inventory = (): Router => {
  const router = Router();

  router.post('/', async function (req: express.Request, res: express.Response) {
    try {
      const saveInventoryResponse = await app.createInventory.execute(req.body);
      res.status(200).json(saveInventoryResponse);
    } catch (err) {
      if (err instanceof ApplicationError) {
        res.status(err.status).json(err.payload);
      } else {
        logger.error(err);
        throw err;
      }
    }
  });

  router.get('/', async function (req: express.Request, res: express.Response) {
    try {
      const getInventoriesResponse = await app.getInventories.execute();
      res.status(200).json(getInventoriesResponse);
    } catch (err) {
      if (err instanceof ApplicationError) {
        res.status(err.status).json(err.payload);
      } else {
        logger.error(err);
        throw err;
      }
    }
  });

  router.get('/id', async function (req: express.Request, res: express.Response) {
    try {
      const getInventoryIdResponse = await app.getInventoryById.execute(req.body.id);
      res.status(200).json(getInventoryIdResponse);
    } catch (err) {
      if (err instanceof ApplicationError) {
        res.status(err.status).json(err.payload);
      } else {
        logger.error(err);
        throw err;
      }
    }
  });

  router.put('/', async function (req: express.Request, res: express.Response) {
    try {
      const updateInventoryResponse = await app.updateInventory.execute(req.body);
      res.status(200).json(updateInventoryResponse);
    } catch (err) {
      if (err instanceof ApplicationError) {
        res.status(err.status).json(err.payload);
      } else {
        logger.error(err);
        throw err;
      }
    }
  });

  router.delete('/', async function (req, res) {
    try {
      const deleteInventoryResponse = await app.deleteInventory.execute(req.body);
      res.status(200).json(deleteInventoryResponse);
    } catch (err) {
      if (err instanceof ApplicationError) {
        res.status(err.status).json(err.payload);
      } else {
        logger.error(err);
        throw err;
      }
    }
  });
  return router;
};
