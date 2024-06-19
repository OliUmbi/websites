import "./row.scss";
import {ReactNode} from "react";

export interface RowProps {
  children: ReactNode,
  gap: "0" | "1" | "2" | "4" | "6" | "8"
}

const Row = (props: RowProps) => {

  return (
      <div className="row" data-gap={props.gap}>
        {props.children}
      </div>
  )
}

export default Row;
