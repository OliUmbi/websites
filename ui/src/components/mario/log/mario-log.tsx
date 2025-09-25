import "./mario-log.scss"
import Text from "../../text/text";

interface Props {
}

const logs = [
  {
    team: "Bowser",
    change: -10,
    time: "2024-10-01T15:36:00"
  },
  {
    team: "Yoshi",
    change: 5,
    time: "2024-10-01T14:36:00"
  },
  {
    team: "Kamek",
    change: 1,
    time: "2024-10-01T13:36:00"
  },
  {
    team: "Donkey Kong",
    change: -2,
    time: "2024-10-01T12:36:00"
  },
  {
    team: "Yoshi",
    change: 5,
    time: "2024-10-01T14:36:00"
  },
  {
    team: "Kamek",
    change: 1,
    time: "2024-10-01T13:36:00"
  },
  {
    team: "Donkey Kong",
    change: -2,
    time: "2024-10-01T12:36:00"
  },
  {
    team: "Yoshi",
    change: 5,
    time: "2024-10-01T14:36:00"
  },
  {
    team: "Kamek",
    change: 1,
    time: "2024-10-01T13:36:00"
  },
  {
    team: "Donkey Kong",
    change: -2,
    time: "2024-10-01T12:36:00"
  },
  {
    team: "Donkey Kong",
    change: -2,
    time: "2024-10-01T12:36:00"
  },
  {
    team: "Yoshi",
    change: 5,
    time: "2024-10-01T14:36:00"
  },
  {
    team: "Kamek",
    change: 1,
    time: "2024-10-01T13:36:00"
  },
  {
    team: "Donkey Kong",
    change: -2,
    time: "2024-10-01T12:36:00"
  }
]

const MarioLog = (props: Props) => {

  return (
      <div className="mario-log">
        {
          logs.map((log, index) => (
              <div className="mario-log__change" data-positive={log.change > 0} key={index}>
                <Text type="h3">{log.change > 0 ? "+" : ""}{log.change}</Text>
                <Text type="h3">{log.team}</Text>
              </div>
          ))
        }
      </div>
  )
}

export default MarioLog
