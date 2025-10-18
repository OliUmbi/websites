import Flex from "../../components/flex/flex";
import Text from "../../components/text/text";
import {useEffect} from "react";
import useApi from "../../hooks/use-api";
import {Enviroment} from "../../enums/shared/enviroment";
import {PointBySpaceResponse, PointChangeBySpaceResponse} from "../../interfaces/jublawoma/point";
import Error from "../../components/error/error";
import Loading from "../../components/loading/loading";
import Point from "../../components/point/point";
import {date} from "../../services/date";

const Jublawoma15nerGame = () => {

  const points = useApi<PointBySpaceResponse[]>(Enviroment.JUBLAWOMA, "GET", "/point/15ner")
  const changes = useApi<PointChangeBySpaceResponse[]>(Enviroment.JUBLAWOMA, "GET", "/point/15ner/change")

  useEffect(() => {
    points.execute()
    changes.execute()

    const interval = setInterval(() => {
      points.execute()
      changes.execute()
    }, 2000)

    return () => clearInterval(interval);
  }, []);

  return (
      <Flex xl={{direction: "column", align: "center"}}>
        <Flex xl={{widthMax: "s", width: true, direction: "column", gap: 1}}>
          <Text type="h1">15ner Game</Text>
          {
            points.data ? points.data.map((point) => <Point space="15ner" {...point} key={point.id}/>) : null
          }
          {
            changes.data ? (
                <Flex xl={{direction: "column", gap: 1}}>
                  <Text type="h2">Verlauf</Text>
                  {
                    changes.data.map((change) => (
                        <Flex xl={{direction: "row", align: "center", justify: "between", gap: 1}} key={change.id}>
                          <Flex xl={{direction: "row", align: "center", justify: "between", gap: 1}}>
                            <Text type="s" primary={false} mono={true}>{date.locale(change.created, "time")}</Text>
                            <Text type="p">{change.name}</Text>
                          </Flex>
                          <Text type="p">{change.change} <Text type="s" primary={false} mono={true}>Pkt.</Text></Text>
                        </Flex>
                    ))
                  }
                </Flex>
            ) : null
          }
          {
            points.error ? <Error message={points.error}/> : null
          }
          {
            points.loading ? <Loading/> : null
          }
        </Flex>
      </Flex>
  )
}

export default Jublawoma15nerGame
