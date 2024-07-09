import "./icon.scss";
import {ReactNode} from "react";

export interface Props {
  children: ReactNode
}

const Icon = (props: Props) => {

  return (
      <div className="icon">{props.children}</div>
  )
}

export default Icon;
