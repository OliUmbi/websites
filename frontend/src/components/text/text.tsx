import "./text.scss";
import {ReactNode} from "react";

export interface TextProps {
    children: ReactNode,
    type: "h1" | "h2" | "h3" | "h4" | "p" | "s",
    primary: boolean
}

const Text = (props: TextProps) => {

    switch (props.type) {
        case "h1":
            return (
                <h1 className="text" data-primary={props.primary}>{props.children}</h1>
            );
        case "h2":
            return (
                <h2 className="text" data-primary={props.primary}>{props.children}</h2>
            );
        case "h3":
            return (
                <h3 className="text" data-primary={props.primary}>{props.children}</h3>
            );
        case "h4":
            return (
                <h4 className="text" data-primary={props.primary}>{props.children}</h4>
            );
        case "p":
            return (
                <p className="text" data-primary={props.primary}>{props.children}</p>
            );
        case "s":
            return (
                <small className="text" data-primary={props.primary}>{props.children}</small>
            );
    }
}

export default Text;
