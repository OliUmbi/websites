import "./mario-log.scss"
import Text from "../../text/text";
import {useEffect} from "react";
import useApi from "../../../hooks/use-api";
import {Enviroment} from "../../../enums/shared/enviroment";
import Error from "../../error/error";
import {PointChangeBySpaceResponse} from "../../../interfaces/jublawoma/point";

interface Props {
  url: string
}

const MarioLog = (props: Props) => {

  const changes = useApi<PointChangeBySpaceResponse[]>(Enviroment.JUBLAWOMA, "GET", "/point/" + props.url + "/change")

  useEffect(() => {
    changes.execute()

    const interval = setInterval(() => changes.execute(), 2000)

    return () => clearInterval(interval);
  }, []);

  return (
      <div className="mario-log">
        {
          changes.data ? changes.data.map((change, index) => (
              <div className="mario-log__change" data-positive={change.change > 0} key={index}>
                <Text type="h3">{change.change > 0 ? "+" : ""}{change.change}</Text>
                <Text type="h3">{change.name}</Text>
              </div>
          )) : null
        }
        {
          changes.error ? <Error message={changes.error}/> : null
        }
      </div>
  )
}

export default MarioLog
