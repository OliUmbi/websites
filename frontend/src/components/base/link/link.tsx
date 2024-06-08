import "./link.scss";
import {ReactNode} from "react";

export interface ButtonProps {
    children: ReactNode,
    to: string
}

const Link = (props: ButtonProps) => {

    return (
        <a className="link" href={props.to}>
            {props.children}
        </a>
    )
}

export default Link;
