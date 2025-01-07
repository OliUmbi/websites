import Flex from "../../components/flex/flex";
import Text from "../../components/text/text";
import Grid from "../../components/grid/grid";
import GridItem from "../../components/grid/item/grid-item";
import Image from "../../components/image/image";
import UncletBooking from "./components/unclet-booking";

const UncletPrivate = () => {

  return (
      <Flex xl={{direction: "column", align: "center", gap: 8}}>
        <Flex xl={{widthMax: "xl", width: true}}>
          <Text type="h1">Privatkoch</Text>
        </Flex>
        <Flex xl={{widthMax: "xl", width: true}}>
          <Grid xl={{columns: 2, gap: 4}} m={{columns: 1}}>
            <GridItem xl={{columns: 1}}>
              <Image src=".\assets\unclet\images\static\private-1.jpg" alt="Privatkoch" side="width" rounded={true}/>
            </GridItem>
            <GridItem xl={{columns: 1}}>
              <Flex xl={{height: true, direction: "column", justify: "center", gap: 2}}>
                <Text type="p">Ein Candle-Light-Dinner zu Zweit, eine familiäre Feier oder eine extravagante Veranstaltung –
                  als Privatkoch möchte ich Ihnen und Ihren Gästen ein kulinarisches Erlebnis anbieten, das Sie so schnell
                  nicht vergessen werden.</Text>
                <Text type="p">Dabei steht für mich ein exklusiver und erstklassiger Service im Vordergrund. Mit Liebe zum
                  Detail und viel Kreativität entwerfe ich Ihnen ein Menu, das ihren individuellen Vorlieben und Bedürfnissen
                  entspricht. Besonderen Wert wird dabei auf frische, saisonale und regionale Zutaten gelegt. Um höchste
                  Qualität zu gewährleisten, arbeite ich eng mit regionalen Lieferanten zusammen.</Text>
              </Flex>
            </GridItem>
          </Grid>
        </Flex>
        <Flex xl={{widthMax: "xl", width: true}}>
          <Grid xl={{columns: 2, gap: 4}} m={{columns: 1}}>
            <GridItem xl={{columns: 1}}>
              <Flex xl={{height: true, direction: "column", justify: "center", gap: 2}}>
                <Text type="p">Als Privatkoch übernehme ich die gesamte Planung, den Einkauf und die Zubereitung ihres Menüs,
                  damit Sie sich entspannt zurücklehnen und eine schöne Zeit mit ihren Gästen verbringen können.</Text>
                <Text type="p">Durch meine Erfahrungen als Privatkoch auf der ganzen Welt habe ich ein breites Portfolio an
                  kulinarischen Köstlichkeiten, welche ich mit viel Liebe zum Detail kreiere.</Text>
              </Flex>
            </GridItem>
            <GridItem xl={{columns: 1}}>
              <Image src=".\assets\unclet\images\static\private-2.jpg" alt="Privatkoch" side="width" rounded={true}/>
            </GridItem>
          </Grid>
        </Flex>
        <Flex xl={{widthMax: "l", width: true}}>
          <UncletBooking/>
        </Flex>
      </Flex>
  )
}

export default UncletPrivate
