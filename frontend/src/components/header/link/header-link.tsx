import "./header-link.scss";
import Text from "../../text/text";
import {NavLink} from "react-router-dom";

export interface HeaderLinkProps {
    name: string,
    to: string,
    onClick: () => void
}

const HeaderLink = (props: HeaderLinkProps) => {

    return (
        <NavLink className="header-link" to={props.to} onClick={() => props.onClick()}>
            <Text type="h1" primary={true}>{props.name}</Text>
        </NavLink>
    )
}

export default HeaderLink;
