import EmployeeModel from '../../database/models/employee';
import Database from '../../lib/database';
import CustomError from '../../lib/error';
import { IEmployee } from './employee';
import logger from '../../lib/logging';
import LeaveType from '../../database/models/leave_type';
class EmployeeRepositoryError extends CustomError {}
class EmployeeNotFoundError extends CustomError {}
class EmployeeRepository {
  constructor(database: Database) {
    EmployeeModel.initialize(database.getClient());
    LeaveType.initialize(database.getClient());
  }
  async createEmployee(body: IEmployee): Promise<EmployeeModel> {
    try {
      const saveEmployee = await EmployeeModel.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
        address: body.address,
        mobile_no: body.mobile_no,
        date_of_birth: body.date_of_birth,
        date_of_joining: body.date_of_joining,
      });
      if (saveEmployee) {
        await LeaveType.create({
          employee_id: saveEmployee.id,
          name: body.leave.name,
          leave_balance: body.leave.leave_balance,
        });
      }
      return saveEmployee;
    } catch (error: any) {
      logger.error(`${error} ${error.stack}`);
      throw new EmployeeRepositoryError(`Error while saving the employee: ${error}`);
    }
  }
  async getEmployees(): Promise<EmployeeModel[]> {
    try {
      const getEmployee = await EmployeeModel.findAll();
      return getEmployee;
    } catch (error: any) {
      logger.error(`${error} ${error.stack}`);
      throw new EmployeeRepositoryError(`Error while getting the employee: ${error}`);
    }
  }
  async getEmployeeById(id: number): Promise<EmployeeModel | any> {
    try {
      const getEmployeeId = await EmployeeModel.findByPk(id);
      if (getEmployeeId !== null) {
        return getEmployeeId;
      } else {
        throw new EmployeeNotFoundError('Employee id not found');
      }
    } catch (error: any) {
      logger.error(`${error} ${error.stack}`);
      throw error;
    }
  }
  async updateEmployee(body: IEmployee): Promise<EmployeeModel | any> {
    try {
      const employeeFindById = await EmployeeModel.findByPk(body.id);
      if (employeeFindById !== null) {
        await EmployeeModel.update(body, {
          where: { id: body.id },
        });
        return { message: 'Employee updated successfully' };
      } else {
        throw new EmployeeNotFoundError('Employee id not found');
      }
    } catch (error: any) {
      logger.error(`${error} ${error.stack}`);
      throw error;
    }
  }
  async deleteEmployee(body: IEmployee): Promise<EmployeeModel | any> {
    try {
      const employeeFindById = await EmployeeModel.findByPk(body.id);
      if (employeeFindById) {
        await EmployeeModel.destroy({
          where: {
            id: body.id,
          },
        });
        return { message: 'Employee deleted successfully' };
      } else {
        throw new EmployeeNotFoundError('Employee id not found');
      }
    } catch (error: any) {
      logger.error(error);
      throw error;
    }
  }
}
export { EmployeeRepositoryError, EmployeeNotFoundError };
export default EmployeeRepository;
