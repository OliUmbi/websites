import "./picture.scss";
import {configuration} from "../../services/configuration";
import Image from "../image/image";

interface Props {
  api: string,
  id: string,
  alt: string,
  side: "width" | "height" | "both",
  rounded: boolean
}

const Picture = (props: Props) => {

  return (
      <picture className="picture">
        <source srcSet={props.api + "/image/" + props.id + "?size=xs"} media="(max-width: 20rem)"/>
        <source srcSet={props.api + "/image/" + props.id + "?size=s"} media="(max-width: 40rem)"/>
        <source srcSet={props.api + "/image/" + props.id + "?size=m"} media="(max-width: 60rem)"/>
        <source srcSet={props.api + "/image/" + props.id + "?size=l"} media="(max-width: 80rem)"/>
        <Image src={props.api + "/image/" + props.id + "?size=xl"} {...props}/>
      </picture>
  )
}

export default Picture;
