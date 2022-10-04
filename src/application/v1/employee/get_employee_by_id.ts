import EmployeeRepository, { EmployeeNotFoundError } from '../../../domain/employee/employee_repository';
import EmployeeModel from '../../../database/models/employee';
import logger from '../../../lib/logging';
import { BadImplementationError, NotFoundError } from '../../exception';

class GetEmployeeById {
  constructor(private employeeRepository: EmployeeRepository) {}
  async execute(id: number): Promise<EmployeeModel | any> {
    try {
      const getEmployeeId = await this.employeeRepository.getEmployeeById(id);
      return getEmployeeId;
    } catch (err: any) {
      logger.error(`Error when getting user for id. ${err.toString()}. ${err.stack}`);
      switch (err.constructor) {
        case EmployeeNotFoundError:
          throw new NotFoundError('Employee not found', 404);
        default:
          throw new BadImplementationError('Something went wrong.', err.toString());
      }
    }
  }
}

export default GetEmployeeById;
