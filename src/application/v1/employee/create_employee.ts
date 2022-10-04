import EmployeeRepository from '../../../domain/employee/employee_repository';
import Employee from '../../../database/models/employee';
import { IEmployee } from '../../../domain/employee/employee';
import logger from '../../../lib/logging';
import { BadImplementationError } from '../../exception';

class CreateEmployee {
  constructor(private employeeRepository: EmployeeRepository) {}
  async execute(body: IEmployee): Promise<Employee> {
    try {
      return await this.employeeRepository.createEmployee(body);
    } catch (err: any) {
      logger.error(err.message);
      throw new BadImplementationError(err.message);
    }
  }
}

export default CreateEmployee;
