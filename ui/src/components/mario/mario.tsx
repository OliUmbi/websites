import "./mario.scss"
import {ReactNode} from "react";

interface Props {
  children: ReactNode
}

const Mario = (props: Props) => {

  return (
      <div className="mario">
        {props.children}
      </div>
  )
}

export default Mario
