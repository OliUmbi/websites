import Text from "../../components/text/text";
import Flex from "../../components/flex/flex";
import {date} from "../../services/date";
import Icon from "../../components/icon/icon";
import Grid from "../../components/grid/grid";
import GridItem from "../../components/grid/item/grid-item";
import Image from "../../components/image/image";

const JublawomaEvents = () => {

  let data = [
    {
      from: "2024-09-14T00:00:00.000Z",
      to: "2024-09-14T00:00:00.000Z",
      name: "Jubla-Tag",
      location: "Infos folgen",
      image: "/assets/jublawoma/images/doodles/ice-cream.svg"
    },
    {
      from: "2024-09-28T00:00:00.000Z",
      to: "2024-10-05T00:00:00.000Z",
      name: "Herbstlager",
      location: "Infos folgen",
      image: "/assets/jublawoma/images/doodles/ballet.svg"
    },
    {
      from: "2024-10-26T00:00:00.000Z",
      to: "2024-10-26T00:00:00.000Z",
      name: "Disco",
      location: "Wohlenschwil Pfarreiheim",
      image: "/assets/jublawoma/images/doodles/dancing.svg"
    },
    {
      from: "2024-11-10T00:00:00.000Z",
      to: "2024-11-10T00:00:00.000Z",
      name: "Zrog-lueg-Sunntig",
      location: "Wohlenschwil Pfarreiheim",
      image: "/assets/jublawoma/images/doodles/reading-sit.svg"
    },
    {
      from: "2024-11-23T00:00:00.000Z",
      to: "2024-11-23T00:00:00.000Z",
      name: "Escape-Room",
      location: "Wohlenschwil Pfarreiheim",
      image: "/assets/jublawoma/images/doodles/jumping.svg"
    },
    {
      from: "2024-12-08T00:00:00.000Z",
      to: "2024-12-08T00:00:00.000Z",
      name: "Waldweihnachten mit Albert Saxer Stiftung",
      location: "Mägenwil Steinbruch",
      image: "/assets/jublawoma/images/doodles/unboxing.svg"
    },
    {
      from: "2024-12-14T00:00:00.000Z",
      to: "2024-12-14T00:00:00.000Z",
      name: "Turnhallentag",
      location: "Mägenwil Turnhalle",
      image: "/assets/jublawoma/images/doodles/sprinting.svg"
    },
    {
      from: "2025-01-06T00:00:00.000Z",
      to: "2025-01-09T00:00:00.000Z",
      name: "Sternsingen",
      location: "Wohlenschwil Dorf",
      image: "/assets/jublawoma/images/doodles/loving.svg"
    }
  ]

  return (
      <Flex xl={{direction: "column", align: "center", gap: 4}}>
        {
          data.filter(value => date.convert(value.to) > new Date()).map((value, index) => (
              <Flex xl={{widthMax: "l", width: true}}>
                <Grid xl={{columns: 2, gap: 4}} m={{columns: 1, gap: 1}} key={index}>
                  <GridItem xl={{columns: 1}}>
                    <Image src={value.image} alt="Veranstaltung" side="width" rounded={true}/>
                  </GridItem>
                  <GridItem xl={{columns: 1}}>
                    <Flex xl={{height: true, direction: "column", justify: "center", gap: 4}} m={{gap: 1}}>
                      <Text type="h2">{value.name}</Text>
                      <Flex xl={{direction: "column"}}>
                        <Flex xl={{direction: "row", align: "center", gap: 1}}>
                          <Icon>calendar</Icon>
                          <Text type="p"
                                mono={true}>{date.locale(value.from, "date")}{value.from != value.to ? " - " + date.locale(value.to, "date") : ""}</Text>
                        </Flex>
                        <Flex xl={{direction: "row", align: "center", gap: 1}}>
                          <Icon>map-pin</Icon>
                          <Text type="p" mono={true}>{value.location}</Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  </GridItem>
                </Grid>
              </Flex>
          ))
        }
      </Flex>
  )
}

export default JublawomaEvents
