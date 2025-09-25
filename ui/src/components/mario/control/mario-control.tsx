import "./mario-control.scss"
import Text from "../../text/text";
import Flex from "../../flex/flex";

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

const MarioControl = (props: Props) => {

  const handlePoints = (points: number) => {
    // todo update teams to rerender (get new data)
  }

  return (
      <div className="mario-control">
        {
          teams.map((team, index) => (
              <div className="mario-control__team" key={index}>
                <Flex xl={{direction: "row", gap: 1, justify: "between", align: "center"}}>
                  <Text type="h3">{team.name}</Text>
                  <Text type="h3">{team.points} <Text type="s" primary={false}>Pkt.</Text></Text>
                </Flex>
                <div className="mario-control__team__points">
                  <button onClick={() => handlePoints(1)} data-positive={true}>+1</button>
                  <button onClick={() => handlePoints(2)} data-positive={true}>+2</button>
                  <button onClick={() => handlePoints(3)} data-positive={true}>+3</button>
                  <button onClick={() => handlePoints(5)} data-positive={true}>+5</button>
                  <button onClick={() => handlePoints(7)} data-positive={true}>+7</button>
                  <button onClick={() => handlePoints(10)} data-positive={true}>+10</button>
                  <button onClick={() => handlePoints(-1)} data-positive={false}>-1</button>
                  <button onClick={() => handlePoints(-2)} data-positive={false}>-2</button>
                  <button onClick={() => handlePoints(-3)} data-positive={false}>-3</button>
                  <button onClick={() => handlePoints(-5)} data-positive={false}>-5</button>
                  <button onClick={() => handlePoints(-7)} data-positive={false}>-7</button>
                  <button onClick={() => handlePoints(-10)} data-positive={false}>-10</button>
                </div>
              </div>
          ))
        }
      </div>
  )
}

export default MarioControl
