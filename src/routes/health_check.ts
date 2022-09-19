import { Router } from 'express';

export const addHealthCheckRoutes = (): Router => {
  const router = Router();

  router.get('/', function (req, res) {
    res.status(200).end();
  });
  return router;
};
