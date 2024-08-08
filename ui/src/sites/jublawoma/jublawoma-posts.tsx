import Section from "../../components/section/section";
import Text from "../../components/text/text";
import Column from "../../components/column/column";
import Image from "../../components/image/image";
import Grid from "../../components/grid/grid";
import GridItem from "../../components/grid/item/grid-item";

const JublawomaPosts = () => {

  return (
      <>
        <Section width="l">
          <Column gap="1" justify={false}>
            <Text type="h1" primary={true}>Beiträge</Text>
          </Column>
        </Section>
        <Section width="xl">
          <Grid>
            <GridItem xl={2}>

              <Column gap="4" justify={false}>
                <Column gap="2" justify={false}>
                  <Text type="s" primary={false}>Jahre</Text>
                  <Text type="h3" primary={false}>2024</Text>
                  <Text type="h3" primary={true}>2023</Text>
                  <Text type="h3" primary={false}>2022</Text>
                  <Text type="h3" primary={false}>2021</Text>
                </Column>
                <Column gap="2" justify={false}>
                  <Text type="s" primary={false}>Thema</Text>
                  <Text type="h3" primary={true}>Hela</Text>
                  <Text type="h3" primary={false}>Pfila</Text>
                  <Text type="h3" primary={false}>Anlässe</Text>
                </Column>
              </Column>
            </GridItem>
            <GridItem xl={6}>
              <Column gap="4" justify={false}>
                <Column gap="2">
                  <Image
                      src="https://assets-global.website-files.com/5d5e2ff58f10c53dcffd8683/5d99f8b24aefbe234194b70d_composition-17.svg"
                      alt="image" side="width" rounded={true}/>
                  <Column gap="0" justify={false}>
                    <Text type="s" primary={true}>Samstag, 30. September 2023</Text>
                    <Text type="h1" primary={true}>Der Diebstahl von Walter</Text>
                  </Column>
                  <Text type="p" primary={false}>Da wir Walter erwischt haben wie er unsere Technik und Material aus dem Jubla
                    Raum gestohlen hat, haben wir uns heute um 8:45 in Mägenwil am Bahnhof </Text>
                </Column>
                <Column gap="2">
                  <Image
                      src="https://assets-global.website-files.com/5d5e2ff58f10c53dcffd8683/5d99f8b24aefbe234194b70d_composition-17.svg"
                      alt="image" side="width" rounded={true}/>
                  <Column gap="0" justify={false}>
                    <Text type="s" primary={true}>Samstag, 30. September 2023</Text>
                    <Text type="h1" primary={true}>Der Diebstahl von Walter</Text>
                  </Column>
                  <Text type="p" primary={false}>Da wir Walter erwischt haben wie er unsere Technik und Material aus dem Jubla
                    Raum gestohlen hat, haben wir uns heute um 8:45 in Mägenwil am Bahnhof </Text>
                </Column>
              </Column>
            </GridItem>
          </Grid>
        </Section>
      </>
  )
}

export default JublawomaPosts
