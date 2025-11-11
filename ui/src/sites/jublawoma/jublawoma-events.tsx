import Text from "../../components/text/text";
import Flex from "../../components/flex/flex";
import {date} from "../../services/date";
import Icon from "../../components/icon/icon";
import Grid from "../../components/grid/grid";
import GridItem from "../../components/grid/item/grid-item";
import Image from "../../components/image/image";
import Button from "../../components/button/button";

const JublawomaEvents = () => {

  let data = [
    {
      from: "01.03.2025",
      to: "01.03.2025",
      name: "Kinderfasnacht",
      location: "Turnhalle Mägenwil",
      image: "/assets/jublawoma/images/doodles/ballet.svg"
    },
    {
      from: "15.03.2025",
      to: "15.03.2025",
      name: "Flohmarkt",
      location: "Infos folgen",
      image: "/assets/jublawoma/images/doodles/plant.svg"
    },
    {
      from: "10.05.2025",
      to: "10.05.2025",
      name: "Risottoplausch",
      location: "Aula Mägenwil",
      image: "/assets/jublawoma/images/doodles/ice-cream.svg"
    },
    {
      from: "17.05.2025",
      to: "17.05.2025",
      name: "Nachtgeländespiel",
      location: "Infos folgen",
      image: "/assets/jublawoma/images/doodles/running.svg"
    },
    {
      from: "07.06.2025",
      to: "09.06.2025",
      name: "Pfingstlager – Jublasurium",
      location: "Wettingen AG",
      image: "/assets/jublawoma/images/doodles/float.svg"
    },
    {
      from: "16.08.2025",
      to: "16.08.2025",
      name: "Schnupper-Gruppenstunde",
      location: "Wohlenschwil Pfarreiheim, 10:00 - 12:00 Uhr",
      image: "/assets/jublawoma/images/doodles/loving.svg"
    },
    {
      from: "19.08.2025",
      to: "19.08.2025",
      name: "Elterninfoabend",
      location: "Wohlenschwil Pfarreiheim, 19:00 - 20:00 Uhr",
      image: "/assets/jublawoma/images/doodles/reading.svg"
    },
    {
      from: "30.08.2025",
      to: "30.08.2025",
      name: "Scharanlass mit Jubla Rütihof",
      location: "Infos folgen",
      image: "/assets/jublawoma/images/doodles/dog-jump.svg"
    },
    {
      from: "13.09.2025",
      to: "13.09.2025",
      name: "Jubla-Tag",
      location: "Infos folgen",
      image: "/assets/jublawoma/images/doodles/selfie.svg"
    },
    {
      from: "27.09.2025",
      to: "04.10.2025",
      name: "Herbstlager",
      location: "Geheim",
      image: "/assets/jublawoma/images/doodles/messy.svg"
    },
    {
      from: "09.11.2025",
      to: "09.11.2025",
      name: "Zrog-lueg Sunntig",
      location: "Wohlenschwil Pfarreiheim",
      image: "/assets/jublawoma/images/doodles/reading-sit.svg"
    },
    {
      from: "15.11.2025",
      to: "15.11.2025",
      name: "Turnhallentag",
      location: "Infos folgen",
      image: "/assets/jublawoma/images/doodles/sprinting.svg"
    },
    {
      from: "14.12.2025",
      to: "14.12.2025",
      name: "Waldweihnachten",
      location: "Mägenwil Steinbruch",
      image: "/assets/jublawoma/images/doodles/loving.svg"
    },
    {
      from: "05.01.2026",
      to: "08.01.2026",
      name: "Sternsingen",
      location: "Mägenwil Dorf",
      image: "/assets/jublawoma/images/doodles/sitting.svg"
    }
  ]

  return (
      <Flex xl={{direction: "column", align: "center", gap: 4}}>
        <Flex xl={{widthMax: "l", width: true, direction: "column", gap: 1}}>
          <Grid xl={{columns: 2, gap: 2}} m={{columns: 1}}>
            <GridItem xl={{columns: 1}}>
              <Flex xl={{height: true, direction: "column", justify: "center", gap: 2}}>
                <Text type="h1">Jahreskalender</Text>
                <Button onClick={() => window.open("/assets/jublawoma/documents/Jahreskalender-Jubla-Woma.pdf")} highlight={true}>PDF Jahreskalender 2025</Button>
              </Flex>
            </GridItem>
            <GridItem xl={{columns: 1}}>
              <Image src="/assets/jublawoma/images/doodles/rolling.svg" alt="Beitreten" side="width" rounded={false}/>
            </GridItem>
          </Grid>


        </Flex>
        {
          data.filter(value => date.convert(value.to) > new Date()).map((value, index) => (
              <Flex xl={{widthMax: "l", width: true}} key={index}>
                <Grid xl={{columns: 2, gap: 4}} m={{columns: 1, gap: 1}}>
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
