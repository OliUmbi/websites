import "./header-link.scss";
import Text from "../../text/text";
import {NavLink} from "react-router-dom";

export interface Props {
    name: string,
    to: string,
    onClick: () => void
}

const HeaderLink = (props: Props) => {

    return (
        <NavLink className="header-link" to={props.to} onClick={() => props.onClick()}>
            <Text type="h2" primary={true} mono={false}>{props.name}</Text>
        </NavLink>
    )
}

export default HeaderLink;
