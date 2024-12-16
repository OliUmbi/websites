import Flex from "../../components/flex/flex";
import Text from "../../components/text/text";
import Grid from "../../components/grid/grid";
import GridItem from "../../components/grid/item/grid-item";
import Anchor from "../../components/anchor/anchor";

const UncletContact = () => {

  return (
      <Flex xl={{direction: "column", align: "center"}}>
        <Flex xl={{widthMax: "m", width: true, direction: "column", gap: 4}}>
          <Text type="h1">Kontakt</Text>
          <Text type="p">Wenn Sie eine Frage haben oder einen Termin vereinbaren möchten, kontaktieren Sie mich
            einfach.</Text>
          <Grid xl={{columns: 2, gap: 4}} s={{columns: 1}}>
            <GridItem xl={{columns: 1}}>
              <Flex xl={{direction: "column", gap: 1}}>
                <Text type="h3" primary={true}>E-Mail</Text>
                <Anchor to="mailto://info@uncle-t.ch">
                  <Text type="p">info@uncle-t.ch</Text>
                </Anchor>
              </Flex>
            </GridItem>
            <GridItem xl={{columns: 1}}>
              <Flex xl={{direction: "column", gap: 1}}>
                <Text type="h3" primary={true}>Addresse</Text>
                <Flex xl={{direction: "column"}}>
                  <Text type="p">Uncle-T GmbH</Text>
                  <Text type="p">Thomas Habegger</Text>
                  <Text type="p">Zelgliweg 2</Text>
                  <Text type="p">5506 Mägenwil</Text>
                </Flex>
              </Flex>
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
  );
}

export default UncletContact
