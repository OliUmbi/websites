import "./drawer.scss";
import {ReactNode, useEffect, useRef} from "react";

export interface DialogProps {
    children: ReactNode,
    open: boolean
}

const Drawer = (props: DialogProps) => {

    return (
        <div className={"drawer " + (props.open ? "open" : "")}>
            <div className="drawer__backdrop"></div>
            <div className="drawer__content">
                {props.children}
            </div>
        </div>
    )
}

export default Drawer
