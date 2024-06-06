import "./icon.scss";
import {IconProps} from "./icon.props.ts";

const Icon = (props: IconProps) => {

  return (
      <span class="icon">{props.children}</span>
  )
}

export default Icon;
