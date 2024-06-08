import "./drawer.scss";
import {ReactNode, useEffect, useRef} from "react";

export interface DialogProps {
    children: ReactNode,
    modal: boolean,
    open: boolean
}

const Drawer = (props: DialogProps) => {

    const dialog = useRef<HTMLDialogElement | null>(null)

    useEffect(() => {
        if (dialog.current) {
            if (props.open) {
                if (props.modal) {
                    dialog.current.showModal()
                } else {
                    dialog.current.show()
                }
            } else {
                dialog.current.close()
            }
        }
    }, [props.open, props.modal]);

    return (
        <dialog className="drawer" ref={dialog}>
            {props.children}
        </dialog>
    )
}

export default Drawer
