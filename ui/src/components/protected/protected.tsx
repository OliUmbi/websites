import {Navigate, Outlet} from "react-router-dom";
import {Permission} from "../../enums/shared/permission";
import {Account} from "../../interfaces/shared/account";
import Unauthorized from "../unauthorized/unauthorized";
import useLocal from "../../hooks/use-local";
import {AuthenticationCreateResponse} from "../../interfaces/shared/authentication";

interface Props {
  permissions: Permission[]
}

const Protected = (props: Props) => {
  const authentication = useLocal<AuthenticationCreateResponse>("authentication")

  if (!authentication.value) {
    return <Navigate to="/login" state={{path: location.pathname}} replace={true}/>
  }

  let permissions = authentication.value.permissions;
  // todo review this
  return props.permissions.some(permission => permissions.includes(permission)) ? <Outlet/> : <Unauthorized/>
}

export default Protected;
