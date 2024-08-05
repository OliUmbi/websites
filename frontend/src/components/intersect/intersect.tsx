import {useEffect, useRef, useState} from "react";

interface Props {
  onIntersect: () => void
}

const Intersect = (props: Props) => {

  const intersect = useRef<HTMLDivElement | null>(null);
  const [intersected, setIntersected] = useState<boolean>(false)

  useEffect(() => {
    if (!intersected) {
      const observer = new IntersectionObserver((entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
          props.onIntersect();
          setIntersected(true)
        }
      });

      if (intersect.current) {
        observer.observe(intersect.current);
      }

      return () => {
        if (intersect.current) {
          observer.unobserve(intersect.current);
        }
      };
    }

    return () => {}
  }, [props.onIntersect, intersected]);

  return (
      <div ref={intersect}></div>
  )
}

export default Intersect
