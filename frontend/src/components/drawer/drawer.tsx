import "./drawer.scss";
import {ReactNode} from "react";
import IconButton from "../icon/button/icon-button";
import Text from "../text/text";
import Column from "../column/column";
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
            <Column width={true} height={true} gap={4} wrap="never">
              <Row align="center" justify="between">
                <Text type="p" primary={true} mono={false}>{props.title}</Text>
                <IconButton onClick={() => props.setOpen(false)} highlight={false}>close</IconButton>
              </Row>
              <div className="drawer__content__body">
                {props.children}
              </div>
            </Column>
          </div>
        </Row>
      </div>
  )
}

export default Drawer
