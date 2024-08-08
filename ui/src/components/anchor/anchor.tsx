import "./anchor.scss";
import {ReactNode} from "react";
import {Link} from "react-router-dom";

interface Props {
    children: ReactNode,
    to: string
}

const Anchor = (props: Props) => {

    return (
        <Link className="anchor" to={props.to}>
            {props.children}
        </Link>
    )
}

export default Anchor;
