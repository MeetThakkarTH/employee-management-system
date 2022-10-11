import EmployeeRepository, { EmployeeNotFoundError } from '../../../domain/employee/employee_repository';
import EmployeeModel from '../../../database/models/employee';
import { IEmployee } from '../../../domain/employee/employee';
import logger from '../../../lib/logging';
import { BadImplementationError, NotFoundError } from '../../exception';

class UpdateEmployee {
  constructor(private employeeRepository: EmployeeRepository) {}
  async execute(body: IEmployee): Promise<EmployeeModel | any> {
    try {
      const employee = await this.employeeRepository.updateEmployee(body);
      return employee;
    } catch (err: any) {
      logger.error(`Error when getting employee for id. ${err.toString()}. ${err.stack}`);
      switch (err.constructor) {
        case EmployeeNotFoundError:
          throw new NotFoundError('Employee not found', 404);
        default:
          throw new BadImplementationError('Something went wrong.', err.toString());
      }
    }
  }
}

export default UpdateEmployee;
