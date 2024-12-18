import Flex from "../../components/flex/flex";
import Image from "../../components/image/image";
import Grid from "../../components/grid/grid";
import GridItem from "../../components/grid/item/grid-item";
import Text from "../../components/text/text";

const UncletHome = () => {

  return (
      <Flex xl={{direction: "column", align: "center"}}>
        <Flex xl={{widthMax: "xl", width: true}}>
          <Grid xl={{columns: 3, gap: 4}} m={{columns: 2}} s={{columns: 1}}>
            <GridItem xl={{columns: 2, rows: 3}} m={{columns: 2, rows: 1}} s={{columns: 1}}>
              <Image src="./assets/unclet/images/static/serving.jpg" alt="Kurse" side="width" rounded={true}/>
            </GridItem>
            <GridItem xl={{columns: 1, rows: 1}}>
                <Text type="p">Im Jahr 2013 wurde ich Gusto-Sieger, nationaler grösster Lehrlings-Kochwettbewerb. Ein Meilenstein, der nicht nur meine Leidenschaft für die Kochkunst bestätigte, sondern auch den Grundstein für meine berufliche Zukunft legte.</Text>
            </GridItem>
            <GridItem xl={{columns: 1, rows: 1}}>
                <Text type="p">In diesem Moment wurde mir klar, dass meine kulinarischen Träume einen festen Platz in der Welt der Gastronomie finden würden.</Text>
            </GridItem>
            <GridItem xl={{columns: 1, rows: 2}}>
              <Image src="./assets/unclet/images/static/grill.jpeg" alt="Kurse" side="width" rounded={true}/>
            </GridItem>
            <GridItem xl={{columns: 1, rows: 1}}>
                <Text type="p">Meine Liebe zum Kochen und die Begeisterung meiner Kunden sind die Antriebskräfte, die mich jeden Tag aufs Neue motivieren. Gerne lasse ich mich von verschiedenen Kochstilen inspirieren und lebe meine Kreativität in neuen Gerichten aus.</Text>
            </GridItem>
            <GridItem xl={{columns: 1, rows: 1}}>
                <Text type="p">Durch meine mehrjährige Erfahrung als Privatkoch auf der ganzen Welt werden Sie bemerken, dass bei mir Diskretion und Perfektion an erster Stelle stehen.</Text>
            </GridItem>
            <GridItem xl={{columns: 1, rows: 2}}>
              <Image src="./assets/unclet/images/static/coal.jpeg" alt="Kurse" side="width" rounded={true}/>
            </GridItem>
            <GridItem xl={{columns: 1, rows: 1}}>
                <Text type="p">Heute bin ich stolz darauf, meine eigene Firma gegründet zu haben, in der ich meine Leidenschaft mit anderen teilen kann.</Text>
            </GridItem>
            <GridItem xl={{columns: 1, rows: 1}}>
                <Text type="p">Auf meiner Homepage finden Sie einen Einblick in meine Kochphilosophie, meine Dienstleistungen und vielleicht auch die Inspiration für Ihr nächstes kulinarisches Abenteuer.</Text>
            </GridItem>
            <GridItem xl={{columns: 2, rows: 2}} m={{columns: 2, rows: 1}} s={{columns: 1}}>
              <Image src="./assets/unclet/images/static/buffet.jpeg" alt="Kurse" side="width" rounded={true}/>
            </GridItem>
            <GridItem xl={{columns: 1, rows: 1}}>
                <Text type="p">Ich lade Sie herzlich ein, mich auf dieser aufregenden Reise zu begleiten und freue mich darauf, Ihre Geschmackssinne zu verwöhnen.</Text>
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
  )
}

export default UncletHome
