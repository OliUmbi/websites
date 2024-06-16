import "./header-sublink.scss";
import Text from "../../text/text";

export interface HeaderSublinkProps {
    name: string,
    to: string
}

const HeaderSublink = (props: HeaderSublinkProps) => {

    return (
        <a className="header-sublink" href={props.to}>
            <Text type="p" primary={true}>{props.name}</Text>
        </a>
    )
}

export default HeaderSublink;
