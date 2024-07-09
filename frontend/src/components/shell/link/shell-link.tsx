import "./shell-link.scss";
import {NavLink} from "react-router-dom";
import Text from "../../text/text";

export interface Props {
  name: string,
  to: string,
  primary: boolean,
  onClick: () => void
}

const ShellLink = (props: Props) => {

  return (
      <NavLink className="shell-link" to={props.to} onClick={() => props.onClick()}>
        <Text type={props.primary ? "h2" : "p"} primary={true} mono={false}>{props.name}</Text>
      </NavLink>
  )
}

export default ShellLink
