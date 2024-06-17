import "./header-sublink.scss";
import Text from "../../text/text";
import {Link} from "react-router-dom";

export interface HeaderSublinkProps {
    name: string,
    to: string,
    onClick: () => void
}

const HeaderSublink = (props: HeaderSublinkProps) => {

    return (
        <Link className="header-sublink" to={props.to} onClick={() => props.onClick()}>
            <Text type="p" primary={true}>{props.name}</Text>
        </Link>
    )
}

export default HeaderSublink;
