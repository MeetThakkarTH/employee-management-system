import EmployeeRepository, { EmployeeNotFoundError } from '../../../domain/employee/employee_repository';
import Employee from '../../../database/models/employee';
import { IEmployee } from '../../../domain/employee/employee';
import { BadImplementationError, NotFoundError } from '../../exception';
import logger from '../../../lib/logging';

class DeleteEmployee {
  constructor(private employeeRepository: EmployeeRepository) {}
  async execute(body: IEmployee): Promise<Employee | any> {
    try {
      const employee = await this.employeeRepository.deleteEmployee(body);
      return employee;
    } catch (error: any) {
      logger.error(`Error when deleting employee. ${error.toString()}. ${error.stack}`);
      switch (error.constructor) {
        case EmployeeNotFoundError:
          throw new NotFoundError('Employee not found', 404);
        default:
          throw new BadImplementationError('Something went wrong.', error.toString());
      }
    }
  }
}

export default DeleteEmployee;
