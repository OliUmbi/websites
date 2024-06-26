import "./row.scss";
import {ReactNode} from "react";

export interface Props {
  children: ReactNode
  width?: boolean
  height?: boolean
  align?: "top" | "center" | "bottom"
  justify?: "left" | "center" | "right" | "between"
  gap?: "1" | "2" | "3" | "4" | "5" | "6"
  wrap?: "never" | "wrap" | "reverse"
}

const Row = (props: Props) => {

  return (
      <div className="row" data-width={props.width} data-height={props.height} data-align={props.align} data-justify={props.justify} data-gap={props.gap} data-wrap={props.wrap}>
        {props.children}
      </div>
  )
}

export default Row;
