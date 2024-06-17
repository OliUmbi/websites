import "./anchor.scss";
import {ReactNode} from "react";
import {Link} from "react-router-dom";

export interface ButtonProps {
    children: ReactNode,
    to: string
}

const Anchor = (props: ButtonProps) => {

    return (
        <Link className="anchor" to={props.to}>
            {props.children}
        </Link>
    )
}

export default Anchor;
