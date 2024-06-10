import "./icon.scss";
import {ReactNode} from "react";

export interface IconProps {
  children: ReactNode
}

const Icon = (props: IconProps) => {

  return (
      <span className="icon">{props.children}</span>
  )
}

export default Icon;
