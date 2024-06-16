import "./image.scss";

export interface ButtonProps {
  src: string,
  alt: string,
  rounded: boolean,
  width?: number,
  height?: number
}

const Image = (props: ButtonProps) => {

  return (
      <img className="image" src={props.src} alt={props.alt} data-rounded={props.rounded} style={{
        width: (props.width ? props.width + "rem" : undefined),
        height: (props.height ? props.height + "rem" : undefined)
      }}/>
  )
}

export default Image;
