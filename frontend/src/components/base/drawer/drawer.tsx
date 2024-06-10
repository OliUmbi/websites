import "./drawer.scss";
import {ReactNode} from "react";
import IconButton from "../icon/button/icon-button";
import Text from "../text/text";

export interface DialogProps {
  children: ReactNode,
  open: boolean,
  setOpen: (open: boolean) => void,
  title: string
}

const Drawer = (props: DialogProps) => {

  return (
      <div className="drawer" data-open={props.open}>
        <div className="drawer__content" data-open={props.open}>
          <div className="drawer__content-head">
            <Text type="p">{props.title}</Text>
            <IconButton onClick={() => props.setOpen(false)} highlight={false}>close</IconButton>
          </div>
          {props.children}
        </div>
      </div>
  )
}

export default Drawer
