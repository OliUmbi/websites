import "./grid-item.scss";
import {ReactNode} from "react";

export interface Props {
  children: ReactNode,
  xl?: number
  l?: number
  m?: number
  s?: number
  xs?: number
}

const GridItem = (props: Props) => {

  return (
      <div className="grid-item" data-xl={props.xl} data-l={props.l} data-m={props.m} data-s={props.s} data-xs={props.xs}>
        {props.children}
      </div>
  )
}

export default GridItem;
