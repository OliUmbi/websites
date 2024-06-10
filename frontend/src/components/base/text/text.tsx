import {ReactNode} from "react";

export interface TextProps {
    children: ReactNode,
    type: "h1" | "h2" | "h3" | "h4" | "p" | "s"
}

const Text = (props: TextProps) => {

    switch (props.type) {
        case "h1":
            return (
                <h1>{props.children}</h1>
            );
        case "h2":
            return (
                <h2>{props.children}</h2>
            );
        case "h3":
            return (
                <h3>{props.children}</h3>
            );
        case "h4":
            return (
                <h4>{props.children}</h4>
            );
        case "p":
            return (
                <p>{props.children}</p>
            );
        case "s":
            return (
                <small>{props.children}</small>
            );
    }
}

export default Text;
