import Flex from "../../components/flex/flex";
import Text from "../../components/text/text";
import Grid from "../../components/grid/grid";
import GridItem from "../../components/grid/item/grid-item";
import Image from "../../components/image/image";
import UncletBooking from "./components/unclet-booking";

const UncletCourses = () => {

  return (
      <Flex xl={{direction: "column", align: "center", gap: 8}}>
        <Flex xl={{widthMax: "xl", width: true}}>
          <Text type="h1">Kurse</Text>
        </Flex>
        <Flex xl={{widthMax: "xl", width: true}}>
          <Grid xl={{columns: 2, gap: 4}} m={{columns: 1}}>
            <GridItem xl={{columns: 1}}>
              <Image src=".\assets\unclet\images\static\courses.jpg" alt="Catering" side="width" rounded={true}/>
            </GridItem>
            <GridItem xl={{columns: 1}}>
              <Flex xl={{height: true, direction: "column", justify: "center", gap: 2}}>
                <Text type="p">Ich freue mich, Sie in die faszinierende Welt der kulinarischen Künste einzuführen und Ihre Leidenschaft fürs Kochen und Grillen zu entfachen.</Text>
                <Text type="p">Ganz gleich, ob Sie ein Neuling in der Küche sind oder bereits über Erfahrung verfügen, meine Kurse sind auf jeden Teilnehmer individuell zugeschnitten.</Text>
                <Text type="p">Meine Kurse bieten eine einmalige Gelegenheit, Ihr gastronomisches Wissen zu erweitern und Ihre Fertigkeiten auf ein neues Level zu bringen.</Text>
              </Flex>
            </GridItem>
          </Grid>
        </Flex>
        <Flex xl={{widthMax: "xl", width: true}}>
          <Grid xl={{columns: 2, gap: 4}} m={{columns: 1}}>
            <GridItem xl={{columns: 1}}>
              <Flex xl={{height: true, direction: "column", justify: "center", gap: 2}}>
                <Text type="p">In meinen Kochkursen tauchen Sie ein in die Welt der internationalen und nationalen Küche. Von exquisiten Vorspeisen über raffinierte Hauptgerichte hin zu verlockenden Desserts – hier lernen Sie, wie Sie Ihre Lieblingsgerichte mit Leichtigkeit zubereiten können. Wir setzen auf frische, saisonale Zutaten und geben Ihnen wertvolle Tipps, wie Sie das Beste aus jedem Gericht herausholen können.</Text>
                <Text type="p">Egal, ob Sie meine Kurse als Einzelperson besuchen, einen privaten Kurs für sich und ihre Freunde planen, einen Firmenevent oder einen besonderen Anlass feiern möchten, ich gestalte meine Kurse nach ihren Wünschen und Anforderungen.</Text>
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
              <Image src=".\assets\unclet\images\static\grill.jpeg" alt="Catering" side="width" rounded={true}/>
            </GridItem>
            <GridItem xl={{columns: 1}}>
              <Flex xl={{height: true, direction: "column", justify: "center", gap: 2}}>
                <Text type="p">Wenn Sie sich für meinen Grillkurs entscheiden, erwartet Sie ein Grillabenteuer der besonderen Art. Lernen Sie, wie Sie saftige Steaks, zartes Grillgemüse und unwiderstehliche Grilldelikatessen zaubern.</Text>
                <Text type="p">Ich teile mit Ihnen meine Expertise und zeige Ihnen, wie Sie die Kunst des Grillens meistern und Ihre Grillabende zu unvergesslichen Events machen.</Text>
                <Text type="p">Meine Koch- und Grillkurse sind nicht nur lehrreich, sondern auch unterhaltsam. Sie haben die Möglichkeit, sich mit Gleichgesinnten auszutauschen, neue Freundschaften zu knüpfen und gemeinsam kulinarische Höhepunkte zu erleben.</Text>
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

export default UncletCourses
