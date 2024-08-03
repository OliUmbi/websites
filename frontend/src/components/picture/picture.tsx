import "./picture.scss";
import {enviroment} from "../../services/enviroment";
import Image from "../image/image";

interface Props {
  id: string,
  alt: string,
  side: "width" | "height" | "both",
  rounded: boolean
}

const Picture = (props: Props) => {

  return (
      <picture className="picture">
        <source srcSet={enviroment.backendImage + "/" + props.id + "/xs"} media="(max-width: 20rem)"/>
        <source srcSet={enviroment.backendImage + "/" + props.id + "/s"} media="(max-width: 40rem)"/>
        <source srcSet={enviroment.backendImage + "/" + props.id + "/m"} media="(max-width: 60rem)"/>
        <source srcSet={enviroment.backendImage + "/" + props.id + "/l"} media="(max-width: 80rem)"/>
        <Image src={enviroment.backendImage + "/" + props.id + "/xl"} {...props}/>
      </picture>
  )
}

export default Picture;
