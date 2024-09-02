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
        <Flex xl={{width: true, height: true, direction: "row", justify: "end"}}>
          <div className="drawer__content" data-open={props.open}>
            <Flex xl={{direction: "row", align: "center", justify: "between"}}>
              <Text type="p" primary={true} mono={true}>{props.title}</Text>
              <IconButton onClick={() => props.setOpen(false)} highlight={false}>close</IconButton>
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
