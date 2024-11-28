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
      from: "14.12.2024",
      to: "14.12.2024",
      name: "Turnhallentag",
      location: "Mägenwil Turnhalle",
      image: "/assets/jublawoma/images/doodles/sprinting.svg"
    },
    {
      from: "15.12.2024",
      to: "15.12.2024",
      name: "Waldweihnachten mit Albert Saxer Stiftung",
      location: "Mägenwil Steinbruch",
      image: "/assets/jublawoma/images/doodles/unboxing.svg"
    },
    {
      from: "06.01.2025",
      to: "09.01.2025",
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
                      <Flex xl={{direction: "column", gap: 1}}>
                        <Flex xl={{direction: "row", align: "center", gap: 1}}>
                          <Icon size={1.5}>calendar</Icon>
                          <Text type="p"
                                mono={true}>{date.locale(value.from, "date")}{value.from != value.to ? " - " + date.locale(value.to, "date") : ""}</Text>
                        </Flex>
                        <Flex xl={{direction: "row", align: "center", gap: 1}}>
                          <Icon size={1.5}>map-pin</Icon>
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
