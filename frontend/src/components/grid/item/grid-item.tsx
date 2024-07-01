import "./grid-item.scss";
import {ReactNode} from "react";

export interface Props {
  children: ReactNode,
  xl?: "2" | "3" | "4" | "5" | "6" | "7" | "8"
  l?: "2" | "4" | "6" | "8" | "16"
  m?: "2" | "4" | "6" | "8" | "16"
  s?: "2" | "4" | "6" | "8" | "16"
  xs?: "2" | "4" | "6" | "8" | "16"
}

const GridItem = (props: Props) => {

  return (
      <div className="grid-item" data-xl={props.xl} data-l={props.l} data-m={props.m} data-s={props.s} data-xs={props.xs}>
        {props.children}
      </div>
  )
}

export default GridItem;
