import "./icon.scss";
import {IconProps} from "./icon.props.ts";
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
