import Section from "../../components/section/section";
import Text from "../../components/text/text";
import Split from "../../components/split/split";
import Image from "../../components/image/image";
import Column from "../../components/column/column";
import Grid from "../../components/grid/grid";
import GridItem from "../../components/grid/item/grid-item";

const JublawomaEvents = () => {

  return (
      <>
        <Section width="l">
          <Text type="h1" primary={true} mono={false}>Veranstaltungen</Text>
        </Section>
        <Section width="xl">
          <Column gap={6}>
            <Grid>
              <GridItem xl={5}>
                <Image
                    src="https://assets-global.website-files.com/5d5e2ff58f10c53dcffd8683/5d99f7054aefbe78f094a9ca_composition-7.svg"
                    alt="image" side="width" rounded={true}/>
              </GridItem>
              <GridItem xl={3}>
                <Column gap={2} justify={true}>
                  <Column gap={0} justify={false}>
                    <Text type="h1" primary={true} mono={false}><Text type="h3" primary={false}>Freitag,</Text> 28. Juni</Text>
                    <Text type="p" primary={false} mono={false}>bis Samstag, 29. Juni</Text>
                  </Column>
                  <Column gap={0} justify={false}>
                    <Text type="h3" primary={true} mono={false}>Jugendfest Mägenwil "Dschungel"</Text>
                    <Text type="p" primary={false} mono={false}>Mägenwil, Schulhaus</Text>
                  </Column>
                </Column>
              </GridItem>
            </Grid>
          </Column>
        </Section>
      </>
  )
}

export default JublawomaEvents
