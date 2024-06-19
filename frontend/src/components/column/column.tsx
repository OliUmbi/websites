import "./column.scss";
import {ReactNode} from "react";

export interface SectionProps {
  children: ReactNode,
  gap: "0" | "1" | "2" | "4" | "6" | "8",
  justify: boolean
}

const Column = (props: SectionProps) => {

  return (
      <div className="column" data-gap={props.gap} data-justify={props.justify}>
        {props.children}
      </div>
  )
}

export default Column;
