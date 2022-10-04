import express, { Router } from 'express';
import { ApplicationError } from '../../../application/exception';
import { EmployeeApplication } from '../../../application/v1/index';
import logger from '../../../lib/logging';

const app = EmployeeApplication();
export const employee = (): Router => {
  const router = Router();

  router.post('/', async function (req: express.Request, res: express.Response) {
    try {
      const saveEmployeeResponse = await app.createEmployee.execute(req.body);
      res.status(200).json(saveEmployeeResponse);
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
      const getEmployeeResponse = await app.getEmployees.execute();
      res.status(200).json(getEmployeeResponse);
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
      const getEmployeeIdResponse = await app.getEmployeeById.execute(req.body.id);
      res.status(200).json(getEmployeeIdResponse);
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
      const updateEmployeeResponse = await app.updateEmployee.execute(req.body);
      res.status(200).json(updateEmployeeResponse);
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
      const deleteEmployeeResponse = await app.deleteEmployee.execute(req.body);
      res.status(200).json(deleteEmployeeResponse);
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
