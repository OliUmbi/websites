import "./carousel.scss";
import {Children, ReactNode, useEffect, useState} from "react";

interface Props {
  children: ReactNode
}

const Carousel = (props: Props) => {

  const [current, setCurrent] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      let value = current + 1

      if (value === Children.count(props.children)) {
        value = 0
      }

      setCurrent(value)
    }, 5000);

    return () => clearInterval(interval)
  }, [current, setCurrent, props.children]);

  return (
      <div className="carousel">
        <div className="carousel__body">
          {Children.map(props.children, (child, index) => (
              <div className="carousel__body__item" data-current={index === current} key={index}>
                {child}
              </div>
          ))}
        </div>
        <div className="carousel__head">
          {Children.map(props.children, (_, index) => (
              <button className="carousel__head__select" onClick={() => setCurrent(index)} data-current={index === current} key={index}/>
          ))}
        </div>
      </div>
  )
}

export default Carousel
