import "./icon.scss";
import {ReactNode} from "react";

export interface Props {
  children: ReactNode
}

const Icon = (props: Props) => {

  return (
      <span className="icon">{props.children}</span>
  )
}

export default Icon;
