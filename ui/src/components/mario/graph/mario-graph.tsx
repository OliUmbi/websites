import "./mario-graph.scss"
import Flex from "../../flex/flex";
import Text from "../../text/text";

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
    points: 18
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
        <Flex xl={{width: true, height: true, direction: "column", gap: 2}}>
          {
            teams.sort((a, b) => b.points - a.points).map((team, index) => (
                <Flex xl={{width: true, height: true, direction: "column", gap: 0.5}} key={index}>
                  <Flex xl={{width: true, direction: "row", align: "center", justify: "between", gap: 1}} key={index}>
                    <Text type="h2">{team.name}</Text>
                    <Text type="h2">{team.points} <Text type="p" primary={false}>Punkte</Text></Text>
                  </Flex>
                  <div className="mario-graph__bar" data-code={team.code} style={{width: percentage(team) + "%"}}></div>
                </Flex>
            ))
          }
        </Flex>
      </div>
  )
}

export default MarioGraph
