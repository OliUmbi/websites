import "./section.scss";
import {ReactNode} from "react";

export interface Props {
  children: ReactNode,
  width: "xl" | "l" | "m" | "s" | "xs"
}

const Section = (props: Props) => {

  return (
      <section className="section" data-width={props.width}>
        {props.children}
      </section>
  )
}

export default Section;
