import "./header-link.scss";
import Text from "../../text/text";

export interface HeaderLinkProps {
    name: string,
    to: string
}

const HeaderLink = (props: HeaderLinkProps) => {

    return (
        <a className="header-link" href={props.to}>
            <Text type="h1" primary={true}>{props.name}</Text>
        </a>
    )
}

export default HeaderLink;
