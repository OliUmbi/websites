import Flex from "../../components/flex/flex";
import Text from "../../components/text/text";
import Grid from "../../components/grid/grid";
import GridItem from "../../components/grid/item/grid-item";
import Image from "../../components/image/image";
import UncletBooking from "./components/unclet-booking";

const UncletCatering = () => {

  return (
      <Flex xl={{direction: "column", align: "center", gap: 8}}>
        <Flex xl={{widthMax: "xl", width: true}}>
          <Text type="h1">Catering</Text>
        </Flex>
        <Flex xl={{widthMax: "xl", width: true}}>
          <Grid xl={{columns: 2, gap: 4}} m={{columns: 1}}>
            <GridItem xl={{columns: 1}}>
              <Flex xl={{height: true, direction: "column", justify: "center", gap: 2}}>
                <Text type="p">Als Catering-Anbieter habe ich eine grosse Leidenschaft für hochwertiges Essen und erstklassigen Service. Durch meine langjährige Erfahrung als Koch in einem Catering-Unternehmen habe ich ein breites Repertoire an kulinarischen Fähigkeiten und Kenntnissen entwickelt.</Text>
                <Text type="p">Eine genaue Absprache und enge Zusammenarbeit im Vorfeld ihres Anlasses ermöglichen es mir, auf ihre individuellen Wünsche und Bedürfnisse einzugehen. Dabei erstelle ich massgeschneiderte Menüs, die auf ihre Anforderungen zugeschnitten sind.</Text>
              </Flex>
            </GridItem>
            <GridItem xl={{columns: 1}}>
              <Image src=".\assets\unclet\images\static\catering-1.jpg" alt="Catering" side="width" rounded={true}/>
            </GridItem>
          </Grid>
        </Flex>
        <Flex xl={{widthMax: "xl", width: true}}>
          <Grid xl={{columns: 2, gap: 4}} m={{columns: 1}}>
            <GridItem xl={{columns: 1}}>
              <Image src=".\assets\unclet\images\static\catering-2.jpg" alt="Catering" side="width" rounded={true}/>
            </GridItem>
            <GridItem xl={{columns: 1}}>
              <Flex xl={{height: true, direction: "column", justify: "center", gap: 2}}>
                <Text type="p">Erstklassigen Service und einen reibungslosen Ablauf ihrer Veranstaltung gehören für mich zur Selbstverständlichkeit. Ebenso lege ich grossen Wert auf die Qualität und Frische der Zutaten, die ich für ihre Gerichte verwende. Eine enge Zusammenarbeit mit meinen lokalen Lieferanten ist dabei Standard.</Text>
                <Text type="p">Individuell, professionell, regional, lokal und hochwertig – dies zeichnet mein Catering-Service aus – überzeugen Sie sich selbst und buchen Sie ein unvergessliches kulinarisches Erlebnis.</Text>
              </Flex>
            </GridItem>
          </Grid>
        </Flex>
        <Flex xl={{widthMax: "l", width: true}}>
          <UncletBooking/>
        </Flex>
      </Flex>
  )
}

export default UncletCatering
