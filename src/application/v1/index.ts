import Database from '../../lib/database';
import EmployeeRepository from '../../domain/employee/employee_repository';
import CreateEmployee from './employee/create_employee';
import GetEmployees from './employee/get_employees';
import UpdateEmployee from './employee/update_employee';
import DeleteEmployee from './employee/delete_employee';
import GetEmployeeById from './employee/get_employee_by_id';

export interface EmployeeApplication {
  createEmployee: CreateEmployee;
  getEmployees: GetEmployees;
  updateEmployee: UpdateEmployee;
  deleteEmployee: DeleteEmployee;
  getEmployeeById: GetEmployeeById;
}
export const EmployeeApplication = (): EmployeeApplication => {
  const employeeRepository = new EmployeeRepository(Database.getInstance());
  const createEmployee = new CreateEmployee(employeeRepository);
  const getEmployees = new GetEmployees(employeeRepository);
  const updateEmployee = new UpdateEmployee(employeeRepository);
  const deleteEmployee = new DeleteEmployee(employeeRepository);
  const getEmployeeById = new GetEmployeeById(employeeRepository);
  return { createEmployee, getEmployees, updateEmployee, deleteEmployee, getEmployeeById };
};
export default {
  EmployeeApplication,
};
