import "./mario-graph.scss"
import Flex from "../../flex/flex";
import Text from "../../text/text";
import {Fragment} from "react";

interface Props {
}

const teams = [
  {
    name: "Mario",
    code: "mario",
    points: 20
  },
  {
    name: "Peach",
    code: "peach",
    points: 34
  },
  {
    name: "Luigi",
    code: "luigi",
    points: 14
  },
  {
    name: "Daisy",
    code: "daisy",
    points: -18
  },
  {
    name: "Yoshi",
    code: "yoshi",
    points: 40
  },
  {
    name: "Kamek",
    code: "kamek",
    points: 33
  },
  {
    name: "Donkey Kong",
    code: "donkey",
    points: 19
  },
  {
    name: "Bowser",
    code: "bowser",
    points: 27
  }
]

const MarioGraph = (props: Props) => {

  const percentage = (team) => {
    if (team.points <= 0) {
      return 2
    }

    let highest = 0

    teams.forEach(t => {
      if (t.points > highest) {
        highest = t.points
      }
    })

    return 100 / highest * team.points
  }

  return (
      <div className="mario-graph">
          {
            teams.sort((a, b) => b.points - a.points).map((team, index) => (
                <Fragment key={index}>
                  <Text type="h2">{team.points} <Text type="s" primary={false}>Pkt.</Text></Text>
                  <Text type="h2">{team.name}</Text>
                  <div className="mario-graph__bar" data-code={team.code} style={{width: percentage(team) + "%"}}></div>
                </Fragment>
            ))
          }
      </div>
  )
}

export default MarioGraph
