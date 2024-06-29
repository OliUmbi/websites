import "./icon-button.scss";
import {ReactNode} from "react";
import Icon from "../icon";

export interface Props {
  children: ReactNode,
  onClick: () => void,
  highlight: boolean
}

const IconButton = (props: Props) => {

  return (
      <button className="icon-button" onClick={() => props.onClick()} data-highlight={props.highlight}>
        <Icon>{props.children}</Icon>
      </button>
  )
}

export default IconButton;
