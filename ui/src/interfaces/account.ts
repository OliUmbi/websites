import {Permission} from "../enums/permission";

export interface Account {
  account_id: string,
  name: string,
  token: string,
  expires: string,
  permissions: Permission[]
}
