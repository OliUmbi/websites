import "./drawer.scss";
import {ReactNode} from "react";
import IconButton from "../icon/button/icon-button";
import Text from "../text/text";
import Row from "../row/row";

export interface Props {
  children: ReactNode,
  open: boolean,
  setOpen: (open: boolean) => void,
  title: string
}

const Drawer = (props: Props) => {

  return (
      <div className="drawer" data-open={props.open}>
        <Row width={true} height={true} justify="right">
          <div className="drawer__content" data-open={props.open}>
            <Row align="center" justify="space-between">
              <Text type="p" primary={true} mono={true}>{props.title}</Text>
              <IconButton onClick={() => props.setOpen(false)} highlight={false}>close</IconButton>
            </Row>
            <div className="drawer__content__body">
              {props.children}
            </div>
          </div>
        </Row>
      </div>
  )
}

export default Drawer
