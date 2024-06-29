import "./split.scss";
import {ReactNode} from "react";

export interface Props {
  children: ReactNode,
  ratio: "1-1" | "1-2" | "2-1" | "1-3" | "3-1"
  gap: "0" | "1" | "2" | "4" | "6" | "8"
  break: "l" | "m" | "s" | "xs"
  breakGap: "0" | "1" | "2" | "4" | "6" | "8"
  breakReverse: boolean
}

const Split = (props: Props) => {

  // todo review

  return (
      <div className="split" data-ratio={props.ratio} data-gap={props.gap} data-break={props.break} data-breakgap={props.breakGap} data-breakreverse={props.breakReverse}>
        {props.children}
      </div>
  )
}

export default Split;
