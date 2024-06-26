import Section from "../../components/section/section";
import Text from "../../components/text/text";
import Column from "../../components/column/column";
import Split from "../../components/split/split";

const JublawomaHome = () => {

  return (
      <>
        <Section width="xl">
          <Split ratio="2-1" gap="2" break="m" breakGap="4" breakReverse={false}>
            <Column gap="0" justify={false}>
              <Text type="h1" primary={true}>Jungwacht Blauring</Text>
              <Text type="h1" primary={false}>Wohlenschwil Mägenwil</Text>
            </Column>
            <Column gap="0" justify={false}>
              <Text type="s" primary={false}>Oder auch</Text>
              <Text type="h3" primary={true}>Jubla Woma</Text>
            </Column>
          </Split>
        </Section>
      </>
  )
}

export default JublawomaHome
