import "./button.scss";
import {ReactNode} from "react";
import Text from "../text/text";

export interface ButtonProps {
  children: ReactNode,
  onClick: () => void,
  highlight: boolean
}

const Button = (props: ButtonProps) => {

  return (
      <button className="button" onClick={() => props.onClick()} data-highlight={props.highlight}>
        <Text type="s">{props.children}</Text>
      </button>
  )
}

export default Button;
