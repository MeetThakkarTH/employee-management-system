import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import { addHealthCheckRoutes } from './routes/health_check';

const app = express();
const healthCheckRoutes = addHealthCheckRoutes();

app.use(express.json());
app.use(cors());
app.use(
  morgan('combined', {
    skip: req => process.env.NODE_ENV === 'test' || req.path === '/',
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());
app.use('/', healthCheckRoutes);

export default app;
