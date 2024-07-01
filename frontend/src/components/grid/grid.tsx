import "./grid.scss";
import {ReactNode} from "react";

export interface Props {
  children: ReactNode,
  gap?: "1" | "2" | "4" | "6" | "8"
}

const Grid = (props: Props) => {

  return (
      <div className="grid" data-gap={props.gap}>
        {props.children}
      </div>
  )
}

export default Grid;
