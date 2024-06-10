import "./drawer.scss";
import {ReactNode} from "react";
import IconButton from "../icon/button/icon-button";

export interface DialogProps {
  children: ReactNode,
  open: boolean,
  setOpen: (open: boolean) => void
}

const Drawer = (props: DialogProps) => {

  return (
      <div className="drawer" data-open={props.open}>
        <div className="drawer__content" data-open={props.open}>
          <IconButton onClick={() => props.setOpen(false)} highlight={false}>close</IconButton>
          {props.children}
        </div>
      </div>
  )
}

export default Drawer
