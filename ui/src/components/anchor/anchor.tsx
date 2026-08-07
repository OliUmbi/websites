import "./anchor.scss";
import {ReactNode} from "react";
import {Link} from "react-router-dom";

interface Props {
    children: ReactNode,
    to: string,
    external?: boolean
}

const Anchor = (props: Props) => {

    return (
        <Link className="anchor" to={props.to} target={props.external ? "_blank" : "_self"}>
            {props.children}
        </Link>
    )
}

export default Anchor;
