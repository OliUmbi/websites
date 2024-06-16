import "./button.scss";
import {ReactNode} from "react";

export interface ButtonProps {
  children: ReactNode,
  onClick: () => void,
  highlight: boolean
}

const Button = (props: ButtonProps) => {

  return (
      <button className="button" onClick={() => props.onClick()} data-highlight={props.highlight}>
        {props.children}
      </button>
  )
}

export default Button;
