import "./section.scss";
import {ReactNode} from "react";

export interface Props {
  children: ReactNode,
  width: "xl" | "l" | "m" | "s" | "xs"
}

const Section = (props: Props) => {

  return (
      <div className="section" data-width={props.width}>
        {props.children}
      </div>
  )
}

export default Section;
