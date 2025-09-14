import "./icon.scss";

interface Props {
  children: string
  size: 1 | 1.5 | 2 | 3 | 4
}

const Icon = (props: Props) => {

  return (
      <div className="icon" data-size={props.size}>{props.children}</div>
  )
}

export default Icon;
