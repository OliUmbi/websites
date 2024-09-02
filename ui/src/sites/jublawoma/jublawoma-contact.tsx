import Section from "../../components/section/section";
import Flex from "../../components/flex/flex";
import Button from "../../components/button/button";
import Text from "../../components/text/text";
import Grid from "../../components/grid/grid";
import GridItem from "../../components/grid/item/grid-item";
import Image from "../../components/image/image";

const JublawomaContact = () => {

  return (
      <Flex xl={{direction: "column", gap: 8}}>
        <Section width="xl">

          <Grid xl={{columns: 2, gap: 2}} m={{columns: 1}}>
            <GridItem xl={{columns: 1}}>
              <Image src="/assets/jublawoma/images/doodles/roller-skating.svg" alt="Beitreten" side="width" rounded={false}/>
            </GridItem>
            <GridItem xl={{columns: 1}}>
              <Flex xl={{height: true, direction: "column", justify: "center", gap: 2}}>
                <Text type="h1">Kontakt</Text>
                <Flex xl={{direction: "column", gap: 0.5}}>
                  <Text type="p">Jungwacht Blauring WohlenschwII Mägenwil</Text>
                  <Text type="p">Vogelsangstrasse 2</Text>
                  <Text type="p">5512 Wohlenschwil</Text>
                </Flex>
                <Button onClick={() => window.location.href = ("mailto:scharleitung@jublawoma.ch")}
                        highlight={true}>Scharleitung</Button>
              </Flex>
            </GridItem>
          </Grid>
        </Section>
      </Flex>
  )
}

export default JublawomaContact
