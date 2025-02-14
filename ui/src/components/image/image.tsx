import "./image.scss";

interface Props {
  src: string
  alt: string
  side: "width" | "height" | "both"
  rounded: boolean
  ratio?: "1:1" | "16:9"
}

const Image = (props: Props) => {

  return (
      <img className="image" src={props.src} alt={props.alt} data-side={props.side} data-rounded={props.rounded} data-ratio={props.ratio}/>
  )
}

export default Image;
 