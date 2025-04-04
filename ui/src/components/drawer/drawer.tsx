import "./drawer.scss";
import {ReactNode} from "react";
import IconButton from "../icon/button/icon-button";
import Text from "../text/text";
import Flex from "../flex/flex";

interface Props {
  children: ReactNode,
  open: boolean,
  setOpen: (open: boolean) => void,
  title: string
}

const Drawer = (props: Props) => {

  return (
      <div className="drawer" data-open={props.open}>
        <Flex xl={{width: true, height: true, direction: "column", justify: "end"}}>
          <div className="drawer__content" data-open={props.open}>
            <Flex xl={{direction: "row", align: "center", justify: "between"}}>
              <Text type="s" primary={false} mono={true}>{props.title}</Text>
              <IconButton size={1.5} onClick={() => props.setOpen(false)} highlight={false}>x</IconButton>
            </Flex>
            <div className="drawer__content__body">
              {props.children}
            </div>
          </div>
        </Flex>
      </div>
  )
}

export default Drawer
