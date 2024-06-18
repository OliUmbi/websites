import "./image.scss";

export interface ButtonProps {
  src: string,
  alt: string,
  side: "width" | "height" | "both",
  rounded: boolean
}

const Image = (props: ButtonProps) => {

  return (
      <img className="image" src={props.src} alt={props.alt} data-side={props.side} data-rounded={props.rounded}/>
  )
}

export default Image;
