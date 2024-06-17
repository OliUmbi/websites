import "./section.scss";
import {ReactNode} from "react";

export interface SectionProps {
  children: ReactNode,
  width: "xl" | "l" | "m" | "s" | "xs"
}

const Section = (props: SectionProps) => {

  return (
      <section className="section" data-width={props.width}>
        {props.children}
      </section>
  )
}

export default Section;
