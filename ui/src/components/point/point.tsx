import "./point.scss"
import useApi from "../../hooks/use-api";
import {MessageResponse} from "../../interfaces/shared/message";
import {Enviroment} from "../../enums/shared/enviroment";
import Text from "../text/text";
import {useState} from "react";
import Icon from "../icon/icon";

interface Props {
  space: string
  id: string
  name: string
  code: string
  points: number
}

const Point = (props: Props) => {
  const create = useApi<MessageResponse>(Enviroment.JUBLAWOMA, "POST", "/point/")
  const [change, setChange] = useState(0)

  const handleChange = () => {
    const payload = {
      body: {
        change: change
      },
      path: props.id + "/change"
    }

    create.execute(payload)
  }

  return (
      <div className="point">
        <div className="point__information">
          <div className="point__points">
            <Text type="h3" mono={true}>{props.points}</Text>
            <Text type="s" primary={false} mono={true}>Pkt.</Text>
          </div>
          <div className="point__name">
            <Text type="h3">{props.name}</Text>
          </div>
        </div>
        <div className="point__control">
          <button className="point__button" onClick={() => setChange(0)}>{change}</button>
          <button className="point__button" onClick={() => setChange(prev => prev + 1)}><Icon size={1}>plus</Icon></button>
          <button className="point__button" onClick={() => setChange(prev => prev - 1)}><Icon size={1}>minus</Icon></button>
          <button className="point__button" onClick={() => handleChange()}><Icon size={1}>save</Icon></button>
        </div>
      </div>
  )
}

export default Point
