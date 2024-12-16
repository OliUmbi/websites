import Flex from "../../components/flex/flex";
import Text from "../../components/text/text";
import Grid from "../../components/grid/grid";
import GridItem from "../../components/grid/item/grid-item";
import Anchor from "../../components/anchor/anchor";

const UncletLegal = () => {

  return (
      <Flex xl={{direction: "column", align: "center", gap: 8}} s={{gap: 4}}>
        <Flex xl={{widthMax: "m", width: true, direction: "column", gap: 4}}>
          <Flex xl={{direction: "column"}}>
            <Text type="h1">Impressum</Text>
            <Text type="p" primary={false}>Verantwortlich für den Inhalt der Seiten</Text>
          </Flex>
          <Grid xl={{columns: 3, gap: 2}} s={{columns: 1, gap: 1}}>
            <GridItem xl={{columns: 1}}>
              <Text type="s" primary={false}>Kontaktperson</Text>
            </GridItem>
            <GridItem xl={{columns: 2}} s={{columns: 1}}>
              <Flex xl={{direction: "column"}}>
                <Text type="p">Uncle-T GmbH</Text>
                <Text type="p">Thomas Habegger</Text>
              </Flex>
            </GridItem>
            <GridItem xl={{columns: 1}}>
              <Text type="s" primary={false}>Addresse</Text>
            </GridItem>
            <GridItem xl={{columns: 2}} s={{columns: 1}}>
              <Flex xl={{direction: "column"}}>
                <Text type="p">Zelgliweg 2</Text>
                <Text type="p">5506 Mägenwil</Text>
              </Flex>
            </GridItem>
            <GridItem xl={{columns: 1}}>
              <Text type="s" primary={false}>E-Mail</Text>
            </GridItem>
            <GridItem xl={{columns: 2}} s={{columns: 1}}>
              <Anchor to="mailto://info@uncle-t.ch">
                <Text type="p">info@uncle-t.ch</Text>
              </Anchor>
            </GridItem>
            <GridItem xl={{columns: 1}}>
              <Text type="s" primary={false}>Copyright</Text>
            </GridItem>
            <GridItem xl={{columns: 2}} s={{columns: 1}}>
              <Text type="p">Das Copyright für sämtliche Inhalte dieser Website liegt bei Uncle-T GmbH Thomas
                Habegger.</Text>
            </GridItem>
          </Grid>
        </Flex>
        <Flex xl={{widthMax: "s", width: true, direction: "column", gap: 4}}>
          <Flex xl={{direction: "column", gap: 1}}>
            <Text type="s" primary={false}>Disclaimer</Text>
            <Text type="p">Alle Texte und Links wurden sorgfältig geprüft und werden laufend aktualisiert.</Text>
            <Text type="p">Wir sind bemüht, richtige und vollständige Informationen auf dieser Website bereitzustellen,
              übernehmen aber keinerlei Verantwortung, Garantien oder Haftung dafür, dass die durch diese Website
              bereitgestellten Informationen, einschliesslich jeglicher Datenbankeinträge, richtig, vollständig oder aktuell
              sind.</Text>
            <Text type="p">Wir behalten uns das Recht vor, jederzeit und ohne Vorankündigung die Informationen auf dieser
              Website zu ändern und verpflichten uns auch nicht, die enthaltenen Informationen zu aktualisieren.</Text>
            <Text type="p">Alle Links zu externen Anbietern wurden zum Zeitpunkt ihrer Aufnahme auf ihre Richtigkeit
              überprüft.</Text>
            <Text type="p">Dennoch haften wir nicht für Inhalte und Verfügbarkeit von Websites, die mittels Hyperlinks zu
              erreichen sind.</Text>
            <Text type="p">Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden, die durch die
              ungeprüfte Nutzung von Inhalten verknüpfter Seiten entstehen, haftet allein der Anbieter der Seite, auf welche
              verwiesen wurde.</Text>
            <Text type="p">Dabei ist es gleichgültig, ob der Schaden direkter, indirekter oder finanzieller Natur ist oder
              ein sonstiger Schaden vorliegt, der sich aus Datenverlust, Nutzungsausfall oder anderen Gründen aller Art
              ergeben könnte.</Text>
          </Flex>
        </Flex>
      </Flex>
  )
}

export default UncletLegal
