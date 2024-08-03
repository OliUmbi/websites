import "./image.scss";

interface Props {
  src: string,
  alt: string,
  side: "width" | "height" | "both",
  rounded: boolean
}

const Image = (props: Props) => {

  return (
      <img className="image" src={props.src} alt={props.alt} loading="lazy" data-side={props.side} data-rounded={props.rounded}/>
  )
}

export default Image;
