import EmployeeRepository from '../../../domain/employee/employee_repository';
import EmployeeModel from '../../../database/models/employee';
import logger from '../../../lib/logging';

class GetEmployees {
  constructor(private employeeRepository: EmployeeRepository) {}
  async execute(): Promise<EmployeeModel[]> {
    try {
      const getEmployee = await this.employeeRepository.getEmployees();
      return getEmployee;
    } catch (err: any) {
      logger.error(err.message);
      throw err;
    }
  }
}

export default GetEmployees;
