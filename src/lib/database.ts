import { Sequelize } from 'sequelize';
import logger from './logging';

class Database {
  private static instance: Database;
  client: Sequelize | undefined;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  getClient(): Sequelize {
    if (!this.client) {
      this.client = new Sequelize(process.env.DATABASE_URL as string, {
        logging: (...msg) => logger.debug(msg),
      });
    }
    return this.client;
  }
}

export default Database;
