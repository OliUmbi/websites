import "./grid.scss";
import {ReactNode} from "react";

export interface Props {
  children: ReactNode,
  gap?: number
}

const Grid = (props: Props) => {

  return (
      <div className="grid" data-gap={props.gap}>
        {props.children}
      </div>
  )
}

export default Grid;
