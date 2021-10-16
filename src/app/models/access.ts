import {User} from "./user";
import {AccessType} from "./access-type";
import {Time} from "@angular/common";

export interface Access {
  id: number;
  user: User;
  accessType: AccessType;
  createdAt: Date;
}
