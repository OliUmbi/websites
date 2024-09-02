import Section from "../../components/section/section";
import Flex from "../../components/flex/flex";
import Text from "../../components/text/text";
import Image from "../../components/image/image";
import Button from "../../components/button/button";
import Grid from "../../components/grid/grid";
import GridItem from "../../components/grid/item/grid-item";
import {Link} from "react-router-dom";

const JublawomaJoin = () => {

  return (
      <Flex xl={{direction: "column", gap: 8}}>
        <Section width="l">
          <Grid xl={{columns: 2, gap: 4}} m={{columns: 1}}>
            <GridItem xl={{columns: 1}}>
              <Flex xl={{height: true, direction: "column", justify: "center", gap: 2}}>
                <Text type="h1">Beitreten</Text>
              </Flex>
            </GridItem>
            <GridItem xl={{columns: 1}}>
              <Image src="/assets/jublawoma/images/doodles/dog.svg" alt="Beitreten" side="width" rounded={false}/>
            </GridItem>
            <GridItem xl={{columns: 1}}>
              <Flex xl={{direction: "column", gap: 2}}>
                <Text type="p">Jungwacht Blauring ist mit 31'000 Mitgliedern der grösste katholische Kinder- und Jugendverband der Schweiz. Ein vielfältiges Angebot lädt Kinder und Jugendliche ein, Neues zu erleben und ihre eigenen Fähigkeiten zu entdecken. Jungwacht Blauring ist offen für alle Kinder und Jugendlichen - unabhängig von Konfession, Fähigkeiten oder Kultur.</Text>
                <Text type="p">Es freut uns sehr, Ihr Kind in unserer Schar zu begrüssen! Wir freuen uns auf eine tolle Zeit.</Text>
              </Flex>
            </GridItem>
            <GridItem xl={{columns: 1}}>
              <Flex xl={{height: true, direction: "column", justify: "between", gap: 2}}>
                <Text type="p">Sollten Sie Fragen haben, können Sie sich jederzeit bei uns melden.</Text>
                <Flex xl={{direction: "row", justify: "end", gap: 2, wrap: "wrap"}}>
                  <Button onClick={() => window.location.href = ("mailto:scharleitung@jublawoma.ch")} highlight={false}>Kontakt</Button>
                  <Button onClick={() => window.open("/assets/jublawoma/documents/Anmeldung-Jubla-Woma.pdf")} highlight={true}>Anmelden</Button>
                </Flex>
              </Flex>
            </GridItem>
          </Grid>
        </Section>
      </Flex>
  )
}

export default JublawomaJoin
