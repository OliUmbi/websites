import "./sheet.scss";
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

const Sheet = (props: Props) => {

  return (
      <div className="sheet" data-open={props.open}>
        <Flex xl={{width: true, height: true, direction: "row", justify: "end"}}>
          <div className="sheet__content" data-open={props.open}>
            <Flex xl={{direction: "row", align: "center", justify: "between"}}>
              <Text type="s" primary={false} mono={true}>{props.title}</Text>
              <IconButton size={1.5} onClick={() => props.setOpen(false)} highlight={false}>x</IconButton>
            </Flex>
            <div className="sheet__content__body">
              {props.children}
            </div>
          </div>
        </Flex>
      </div>
  )
}

export default Sheet
