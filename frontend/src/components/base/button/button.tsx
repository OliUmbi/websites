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
      <button className={"button " + (props.highlight ? "highlight" : "default")} onClick={() => props.onClick()}>
        <Text type="s" highlight={true} mono={false}>{props.children}</Text>
      </button>
  )
}

export default Button;
