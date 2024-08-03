import "./text.scss";
import {ReactNode} from "react";

interface Props {
    children: ReactNode,
    type: "h1" | "h2" | "h3" | "p" | "s",
    primary: boolean,
    mono: boolean
}

const Text = (props: Props) => {

    switch (props.type) {
        case "h1":
            return (
                <h1 className="text" data-primary={props.primary} data-mono={props.mono}>{props.children}</h1>
            );
        case "h2":
            return (
                <h2 className="text" data-primary={props.primary} data-mono={props.mono}>{props.children}</h2>
            );
        case "h3":
            return (
                <h3 className="text" data-primary={props.primary} data-mono={props.mono}>{props.children}</h3>
            );
        case "p":
            return (
                <p className="text" data-primary={props.primary} data-mono={props.mono}>{props.children}</p>
            );
        case "s":
            return (
                <small className="text" data-primary={props.primary} data-mono={props.mono}>{props.children}</small>
            );
    }
}

export default Text;
