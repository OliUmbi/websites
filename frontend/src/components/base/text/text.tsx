import {ReactNode} from "react";

export interface TextProps {
    children: ReactNode,
    type: "h1" | "h2" | "h3" | "p" | "s",
    mono: boolean,
    highlight: boolean,
}

const Text = (props: TextProps) => {

    const highlight = (children: ReactNode): ReactNode => {
        if (props.highlight) {
            return (
                <strong>{children}</strong>
            )
        }

        return children;
    }

    const mono = (children: ReactNode): ReactNode => {
        if (props.mono) {
            return (
                <code>{children}</code>
            )
        }

        return children;
    }
    
    const formatting = (): ReactNode => {
        return mono(highlight(props.children))
    }

    switch (props.type) {
        case "h1":
            return (
                <h1>{formatting()}</h1>
            );
        case "h2":
            return (
                <h2>{formatting()}</h2>
            );
        case "h3":
            return (
                <h3>{formatting()}</h3>
            );
        case "p":
            return (
                <p>{formatting()}</p>
            );
        case "s":
            return (
                <small>{formatting()}</small>
            );
    }
}

export default Text;
