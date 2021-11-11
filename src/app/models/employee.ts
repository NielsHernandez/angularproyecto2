import {Department} from "./department";

export interface Employee {
  id: number;
  employeeCode: string;
  firstName: string;
  lastName: string;
  department: Department;
}
