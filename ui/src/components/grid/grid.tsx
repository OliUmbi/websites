import "./grid.scss";
import {ReactNode} from "react";

interface Props {
  children: ReactNode
  xl?: Grid
  l?: Grid
  m?: Grid
  s?: Grid
  xs?: Grid
}

interface Grid {
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
  gap?: 0 | 0.5 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
}

const Grid = (props: Props) => {

  return (
      <div className="grid"
           data-xlcolumns={props.xl?.columns} data-xlgap={props.xl?.gap}
           data-lcolumns={props.l?.columns} data-lgap={props.l?.gap}
           data-mcolumns={props.m?.columns} data-mgap={props.m?.gap}
           data-scolumns={props.s?.columns} data-sgap={props.s?.gap}
           data-xscolumns={props.xs?.columns} data-xsgap={props.xs?.gap}
      >
        {props.children}
      </div>
  )
}

export default Grid;
