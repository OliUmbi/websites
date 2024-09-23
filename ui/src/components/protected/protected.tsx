import {Navigate, Outlet} from "react-router-dom";
import {Permission} from "../../enums/shared/permission";
import {Account} from "../../interfaces/shared/account";
import Unauthorized from "../unauthorized/unauthorized";
import useLocal from "../../hooks/use-local";

interface Props {
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
