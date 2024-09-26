import {SharedAccountPermissionPermission} from "../../enums/shared/permission";

export interface SharedAccount {
  id: string,
  name: string,
  sessions: SharedSession,
  permissions: SharedPermission[]
}

export interface SharedSession {
  id: string,
  expires: string
}

export interface SharedPermission {
  id: string,
  permission: SharedAccountPermissionPermission
}

