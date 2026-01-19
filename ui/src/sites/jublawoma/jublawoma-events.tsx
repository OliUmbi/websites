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
            from: "03.01.2026",
            to: "03.01.2026",
            name: "Aussenden Sternsinger",
            location: "Kirche Wohlenschwil",
            image: "/assets/jublawoma/images/doodles/strolling.svg"
        },
        {
            from: "05.01.2026",
            to: "08.01.2026",
            name: "Sternsingen",
            location: "Maegenwil Dorf (Obligatorisch fuer alle Kinder der Jubla WoMa)",
            image: "/assets/jublawoma/images/doodles/dog-jump.svg"
        },
        {
            from: "17.01.2026",
            to: "17.01.2026",
            name: "Schlitteltag",
            location: "Infos folgen (Anmeldung notwendig)",
            image: "/assets/jublawoma/images/doodles/roller-skating.svg"
        },
        {
            from: "28.02.2026",
            to: "28.02.2026",
            name: "Kinderfasnacht",
            location: "Aula Maegenwil",
            image: "/assets/jublawoma/images/doodles/dancing.svg"
        },
        {
            from: "25.04.2026",
            to: "25.04.2026",
            name: "Scharanlass",
            location: "Infos folgen (Findet am Abend statt)",
            image: "/assets/jublawoma/images/doodles/meeting.svg"
        },
        {
            from: "02.05.2026",
            to: "02.05.2026",
            name: "Schnupper-Gruppenstunde 2. Klasse",
            location: "Wohlenschwil Pfarreiheim",
            image: "/assets/jublawoma/images/doodles/sitting.svg"
        },
        {
            from: "09.05.2026",
            to: "09.05.2026",
            name: "Risottoplausch",
            location: "Aula Maegenwil",
            image: "/assets/jublawoma/images/doodles/coffee.svg"
        },
        {
            from: "23.05.2026",
            to: "25.05.2026",
            name: "Pfila",
            location: "Infos folgen (Anmeldung notwendig)",
            image: "/assets/jublawoma/images/doodles/float.svg"
        },
        {
            from: "24.06.2026",
            to: "28.06.2026",
            name: "Jugendfest Mewo",
            location: "Wohlenschwil",
            image: "/assets/jublawoma/images/doodles/moshing.svg"
        },
        {
            from: "18.08.2026",
            to: "18.08.2026",
            name: "Elterninfoabend",
            location: "Wohlenschwil Pfarreiheim (Nur fuer Eltern und Angehoerige)",
            image: "/assets/jublawoma/images/doodles/reading.svg"
        },
        {
            from: "12.09.2026",
            to: "12.09.2026",
            name: "Jubla-Tag",
            location: "Infos folgen",
            image: "/assets/jublawoma/images/doodles/selfie.svg"
        },
        {
            from: "26.09.2026",
            to: "03.10.2026",
            name: "Herbstlager",
            location: "Geheim (Anmeldung notwendig)",
            image: "/assets/jublawoma/images/doodles/messy.svg"
        },
        {
            from: "15.11.2026",
            to: "15.11.2026",
            name: "Zrog-lueg Sunntig",
            location: "Wohlenschwil Pfarreiheim",
            image: "/assets/jublawoma/images/doodles/reading-sit.svg"
        },
        {
            from: "28.11.2026",
            to: "28.11.2026",
            name: "Scharanlass",
            location: "Infos folgen",
            image: "/assets/jublawoma/images/doodles/jumping.svg"
        },
        {
            from: "04.01.2027",
            to: "07.01.2027",
            name: "Sternsingen",
            location: "Wohlenschwil Dorf",
            image: "/assets/jublawoma/images/doodles/groovy.svg"
        }
    ];


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
