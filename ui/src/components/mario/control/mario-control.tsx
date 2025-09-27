import "./mario-control.scss"
import Text from "../../text/text";
import Flex from "../../flex/flex";
import useApi from "../../../hooks/use-api";
import {PointBySpaceResponse} from "../../../interfaces/jublawoma/point";
import {Enviroment} from "../../../enums/shared/enviroment";
import {useEffect} from "react";
import Error from "../../error/error";
import {MessageResponse} from "../../../interfaces/shared/message";

interface Props {
  title: string,
  url: string
}

const MarioControl = (props: Props) => {

  const points = useApi<PointBySpaceResponse[]>(Enviroment.JUBLAWOMA, "GET", "/point/" + props.url)
  const create = useApi<MessageResponse>(Enviroment.JUBLAWOMA, "POST", "/point/")

  useEffect(() => {
    points.execute()

    const interval = setInterval(() => points.execute(), 10000)

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (create.data) {
      points.execute()
    }
  }, [create.data]);

  const handlePoints = (id: string, points: number) => {
    const payload = {
      body: {
        change: points
      },
      path: id + "/change"
    }

    create.execute(payload)
  }

  return (
      <div className="mario-control">
        <Text type="h1">{props.title}</Text>
        {
          points.data ? points.data.map((point, index) => (
              <div className="mario-control__team" key={index}>
                <Flex xl={{direction: "row", gap: 1, justify: "between", align: "center"}}>
                  <Text type="h3">{point.name}</Text>
                  <Text type="h3">{point.points} <Text type="s" primary={false}>Pkt.</Text></Text>
                </Flex>
                <div className="mario-control__team__points">
                  <button onClick={() => handlePoints(point.id, 1)} data-positive={true}>+1</button>
                  <button onClick={() => handlePoints(point.id, 2)} data-positive={true}>+2</button>
                  <button onClick={() => handlePoints(point.id, 3)} data-positive={true}>+3</button>
                  <button onClick={() => handlePoints(point.id, 5)} data-positive={true}>+5</button>
                  <button onClick={() => handlePoints(point.id, 7)} data-positive={true}>+7</button>
                  <button onClick={() => handlePoints(point.id, 10)} data-positive={true}>+10</button>
                  <button onClick={() => handlePoints(point.id, -1)} data-positive={false}>-1</button>
                  <button onClick={() => handlePoints(point.id, -2)} data-positive={false}>-2</button>
                  <button onClick={() => handlePoints(point.id, -3)} data-positive={false}>-3</button>
                  <button onClick={() => handlePoints(point.id, -5)} data-positive={false}>-5</button>
                  <button onClick={() => handlePoints(point.id, -7)} data-positive={false}>-7</button>
                  <button onClick={() => handlePoints(point.id, -10)} data-positive={false}>-10</button>
                </div>
              </div>
          )) : null
        }
        {
          points.error ? <Error message={points.error}/> : null
        }
      </div>
  )
}

export default MarioControl
