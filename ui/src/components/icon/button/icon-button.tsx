import "./icon-button.scss";
import {ReactNode} from "react";
import Icon from "../icon";

interface Props {
  children: string
  size: 1 | 1.5 | 2 | 3 | 4
  onClick: () => void
  highlight: boolean
}

const IconButton = (props: Props) => {

  return (
      <button className="icon-button" onClick={() => props.onClick()} data-size={props.size} data-highlight={props.highlight}>
        <Icon size={props.size}>{props.children}</Icon>
      </button>
  )
}

export default IconButton;
