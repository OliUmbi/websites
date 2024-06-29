import "./header-sublink.scss";
import Text from "../../text/text";
import {NavLink} from "react-router-dom";

export interface Props {
    name: string,
    to: string,
    onClick: () => void
}

const HeaderSublink = (props: Props) => {

    return (
        <NavLink className="header-sublink" to={props.to} onClick={() => props.onClick()}>
            <Text type="p" primary={true}>{props.name}</Text>
        </NavLink>
    )
}

export default HeaderSublink;
