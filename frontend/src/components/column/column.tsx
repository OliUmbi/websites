import "./column.scss";
import {ReactNode} from "react";

export interface Props {
  children: ReactNode
  width?: boolean
  height?: boolean
  align?: "left" | "center" | "right"
  justify?: "top" | "center" | "bottom" | "between"
  gap?: number
  wrap?: "never" | "wrap" | "reverse"
}

const Column = (props: Props) => {

  return (
      <div className="column" data-width={props.width} data-height={props.height} data-align={props.align} data-justify={props.justify} data-gap={props.gap} data-wrap={props.wrap}>
        {props.children}
      </div>
  )
}

export default Column;
