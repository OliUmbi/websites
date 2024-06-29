import "./button.scss";
import {ReactNode} from "react";

export interface Props {
  children: ReactNode,
  onClick: () => void,
  highlight: boolean
}

const Button = (props: Props) => {

  return (
      <button className="button" onClick={() => props.onClick()} data-highlight={props.highlight}>
        {props.children}
      </button>
  )
}

export default Button;
