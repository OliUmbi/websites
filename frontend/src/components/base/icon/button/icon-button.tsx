import "./icon-button.scss";
import {ReactNode} from "react";
import Icon from "../icon";

export interface IconButtonProps {
  children: ReactNode,
  onClick: () => void,
  highlight: boolean
}

const IconButton = (props: IconButtonProps) => {

  return (
      <button className={"icon-button " + (props.highlight ? "highlight" : "default")} onClick={() => props.onClick()}>
        <Icon>{props.children}</Icon>
      </button>
  )
}

export default IconButton;
