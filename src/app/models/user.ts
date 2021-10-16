import {Employee} from "./employee";
import {Role} from "./role";

export interface User {
  id: number;
  employee: Employee;
  role: Role;
  username: string;
  password: string;
}
