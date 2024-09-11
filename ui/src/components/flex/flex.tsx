import "./flex.scss";
import {ReactNode} from "react";

interface Props {
  children: ReactNode
  xl?: Flex
  l?: Flex
  m?: Flex
  s?: Flex
  xs?: Flex
}

interface Flex {
  width?: boolean
  widthMax?: "xl" | "l" | "m" | "s" | "xs"
  height?: boolean
  heightMax?: "xl" | "l" | "m" | "s" | "xs"
  direction?: "row" | "column"
  align?: "start" | "center" | "end"
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly"
  gap?: 0 | 0.5 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
  wrap?: "never" | "wrap" | "reverse"
}

const Flex = (props: Props) => {

  return (
      <div className="flex"
           data-xlwidth={props.xl?.width} data-xlwidthmax={props.xl?.widthMax} data-xlheight={props.xl?.height} data-xlheightmax={props.xl?.heightMax} data-xldirection={props.xl?.direction} data-xlalign={props.xl?.align} data-xljustify={props.xl?.justify} data-xlgap={props.xl?.gap} data-xlwrap={props.xl?.wrap}
           data-lwidth={props.l?.width} data-lwidthmax={props.l?.widthMax} data-lheight={props.l?.height} data-lheightmax={props.l?.heightMax} data-ldirection={props.l?.direction} data-lalign={props.l?.align} data-ljustify={props.l?.justify} data-lgap={props.l?.gap} data-lwrap={props.l?.wrap}
           data-mwidth={props.m?.width} data-mwidthmax={props.m?.widthMax} data-mheight={props.m?.height} data-mheightmax={props.m?.heightMax} data-mdirection={props.m?.direction} data-malign={props.m?.align} data-mjustify={props.m?.justify} data-mgap={props.m?.gap} data-mwrap={props.m?.wrap}
           data-swidth={props.s?.width} data-swidthmax={props.s?.widthMax} data-sheight={props.s?.height} data-sheightmax={props.s?.heightMax} data-sdirection={props.s?.direction} data-salign={props.s?.align} data-sjustify={props.s?.justify} data-sgap={props.s?.gap} data-swrap={props.s?.wrap}
           data-xswidth={props.xs?.width} data-xswidthmax={props.xs?.widthMax} data-xsheight={props.xs?.height} data-xsheightmax={props.xs?.heightMax} data-xsdirection={props.xs?.direction} data-xsalign={props.xs?.align} data-xsjustify={props.xs?.justify} data-xsgap={props.xs?.gap} data-xswrap={props.xs?.wrap}
      >
        {props.children}
      </div>
  )
}

export default Flex
