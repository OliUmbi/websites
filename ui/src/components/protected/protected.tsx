import {Navigate, Outlet} from "react-router-dom";
import Unauthorized from "../unauthorized/unauthorized";
import useLocal from "../../hooks/use-local";
import {AccountSessionCreateResponse} from "../../interfaces/shared/account";
import {SharedAccountPermissionPermission} from "../../enums/shared/permission";

interface Props {
  permissions: SharedAccountPermissionPermission[]
}

const Protected = (props: Props) => {
  const session = useLocal<AccountSessionCreateResponse>("session")

  if (!session.value) {
    return <Navigate to="/login" state={{path: location.pathname}} replace={true}/>
  }

  let permissions = session.value.permissions;
  // todo review this
  return props.permissions.some(permission => permissions.includes(permission)) ? <Outlet/> : <Unauthorized/>
}

export default Protected;
