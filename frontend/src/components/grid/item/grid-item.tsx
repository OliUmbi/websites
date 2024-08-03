import "./grid-item.scss";
import {ReactNode} from "react";

interface Props {
  children: ReactNode
  xl?: GridItem
  l?: GridItem
  m?: GridItem
  s?: GridItem
  xs?: GridItem
}

interface GridItem {
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
}

const GridItem = (props: Props) => {

  return (
      <div className="grid-item"
           data-xlspan={props.xl?.span}
           data-lspan={props.l?.span}
           data-mspan={props.m?.span}
           data-sspan={props.s?.span}
           data-xsspan={props.xs?.span}
      >
        {props.children}
      </div>
  )
}

export default GridItem;
