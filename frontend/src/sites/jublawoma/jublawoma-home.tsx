import Section from "../../components/section/section";
import Text from "../../components/text/text";
import Column from "../../components/column/column";

const JublawomaHome = () => {

  return (
      <>
        <Section width="xl">
            <Column gap="0" justify={false}>
              <Text type="h1" primary={true}>Jungwacht Blauring</Text>
              <Text type="h1" primary={false}>Wohlenschwil Mägenwil</Text>
            </Column>
            <Column gap="0" justify={false}>
              <Text type="s" primary={false}>Oder auch</Text>
              <Text type="h3" primary={true}>Jubla Woma</Text>
            </Column>
        </Section>
      </>
  )
}

export default JublawomaHome
