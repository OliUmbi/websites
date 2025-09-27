import "./mario-graph.scss"
import Text from "../../text/text";
import {Fragment, useEffect} from "react";
import useApi from "../../../hooks/use-api";
import {PointBySpaceResponse} from "../../../interfaces/jublawoma/point";
import {Enviroment} from "../../../enums/shared/enviroment";
import Error from "../../error/error";

interface Props {
  url: string
}

const MarioGraph = (props: Props) => {

  const points = useApi<PointBySpaceResponse[]>(Enviroment.JUBLAWOMA, "GET", "/point/" + props.url)

  useEffect(() => {
    points.execute()

    const interval = setInterval(() => points.execute(), 2000)

    return () => clearInterval(interval);
  }, []);

  const percentage = (point: PointBySpaceResponse) => {
    if (point.points <= 0) {
      return 2
    }

    let highest = 0

    points.data?.forEach(t => {
      if (t.points > highest) {
        highest = t.points
      }
    })

    return 100 / highest * point.points
  }

  return (
      <div className="mario-graph">
        {
          points.data ? points.data.sort((a, b) => b.points - a.points).map((point, index) => (
              <Fragment key={index}>
                <Text type="h2">{point.points} <Text type="s" primary={false}>Pkt.</Text></Text>
                <Text type="h2">{point.name}</Text>
                <div className="mario-graph__bar" data-code={point.code} style={{width: percentage(point) + "%"}}></div>
              </Fragment>
          )) : null
        }
        {
          points.error ? <Error message={points.error}/> : null
        }
      </div>
  )
}

export default MarioGraph
