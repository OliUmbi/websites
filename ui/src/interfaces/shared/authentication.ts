import {SharedAccountPermissionPermission} from "../../enums/shared/permission";

export interface AuthenticationCreateResponse {
  id: string
  token: string
  permissions: SharedAccountPermissionPermission[]
}
