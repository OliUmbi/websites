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
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
  rows?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
}

const GridItem = (props: Props) => {

  return (
      <div className="grid-item"
           data-xlcolumns={props.xl?.columns} data-xlrows={props.xl?.rows}
           data-lcolumns={props.l?.columns} data-lrows={props.l?.rows}
           data-mcolumns={props.m?.columns} data-mrows={props.m?.rows}
           data-scolumns={props.s?.columns} data-srows={props.s?.rows}
           data-xscolumns={props.xs?.columns} data-xsrows={props.xs?.rows}
      >
        {props.children}
      </div>
  )
}

export default GridItem;
