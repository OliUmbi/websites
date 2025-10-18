import "./button.scss";
import {ReactNode} from "react";

interface Props {
  children: ReactNode,
  onClick: () => void,
  highlight: boolean,
  disabled?: boolean
  square?: boolean
}

const Button = (props: Props) => {

  return (
      <button className="button" onClick={() => props.onClick()} data-highlight={props.highlight} disabled={props.disabled} data-square={props.square}>
        {props.children}
      </button>
  )
}

export default Button;
