import {Navigate, Outlet} from "react-router-dom";
import {Permission} from "../../enums/permission";
import {Account} from "../../interfaces/account";
import Unauthorized from "../unauthorized/unauthorized";
import useLocal from "../../hooks/use-local";

export interface Props {
  permissions: Permission[]
}

const Protected = (props: Props) => {
  const [account] = useLocal<Account>("account")

  if (!account) {
    return <Navigate to="/login" state={{path: location.pathname}} replace={true}/>
  }

  return props.permissions.some(permission => account.permissions.includes(permission)) ? <Outlet/> : <Unauthorized/>
}

export default Protected;
