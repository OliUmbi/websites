import Section from "../../components/section/section";
import Text from "../../components/text/text";
import Flex from "../../components/flex/flex";
import Grid from "../../components/grid/grid";
import GridItem from "../../components/grid/item/grid-item";
import Image from "../../components/image/image";
import Button from "../../components/button/button";

const JublawomaPrivacy = () => {

  return (
      <Flex xl={{direction: "column", gap: 4}}>
        <Section width="l">
          <Grid xl={{columns: 2, gap: 2}} s={{columns: 1}}>
            <GridItem xl={{columns: 1}}>
              <Flex xl={{height: true, direction: "column", justify: "center"}}>
                <Text type="h1">Datenschutz</Text>
              </Flex>
            </GridItem>
            <GridItem xl={{columns: 1}}>
              <Image src="/assets/jublawoma/images/doodles/reading.svg" alt="Beitreten" side="width" rounded={false}/>
            </GridItem>
          </Grid>
        </Section>
        <Section width="s">
          <Flex xl={{direction: "column", gap: 2}}>
            <Text type="p">Der Schutz von persönlichen Daten ist Jungwacht Blauring Schweiz besonders wichtig. In dieser Datenschutzerklärung erklären wir dir daher, wie wir mit deinen persönlichen Daten, wie z.B. deiner EMail-Adresse und deinem Geburtsdatum, umgehen.</Text>
            <Text type="p">Jungwacht Blauring Schweiz und seine Kollektivmitgliedern bearbeiten persönliche Daten (im Gesetz als „Personendaten“ bezeichnet) gemäss den Vorgaben des anwendbaren Datenschutzrechts, insbesondere dem Schweizerischen Datenschutzgesetz (DSG) und der Datenschutzverordnung (DSV) unter Berücksichtigung der ab 1. September 2023 geltenden neuen Fassung.</Text>
            <Button onClick={() => window.open("/assets/jublawoma/documents/Datenschutzerklärung-Jubla-Woma.pdf")} highlight={true}>Datenschutzerklärung</Button>
          </Flex>
        </Section>
      </Flex>
  )
}

export default JublawomaPrivacy
