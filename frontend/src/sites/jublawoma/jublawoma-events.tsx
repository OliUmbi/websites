import Section from "../../components/section/section";
import Text from "../../components/text/text";
import Split from "../../components/split/split";
import Image from "../../components/image/image";
import Column from "../../components/column/column";

const JublawomaEvents = () => {

  return (
      <>
        <Section width="l">
          <Text type="h1" primary={true}>Veranstaltungen</Text>
        </Section>
        <Section width="xl">
          <Column gap="8" justify={false}>
            <Split ratio="1-2" gap="4" break="m" breakGap="1" breakReverse={false}>
              <Image
                  src="https://assets-global.website-files.com/5d5e2ff58f10c53dcffd8683/5d99f7054aefbe78f094a9ca_composition-7.svg"
                  alt="image" side="width" rounded={true}/>
              <Column gap="2" justify={true}>
                <Column gap="0" justify={false}>
                  <Text type="h1" primary={true}><Text type="h3" primary={false}>Freitag,</Text> 28. Juni</Text>
                  <Text type="p" primary={false}>bis Samstag, 29. Juni</Text>
                </Column>
                <Column gap="0" justify={false}>
                  <Text type="h3" primary={true}>Jugendfest Mägenwil "Dschungel"</Text>
                  <Text type="p" primary={false}>Mägenwil, Schulhaus</Text>
                </Column>
              </Column>
            </Split>

            <Split ratio="1-2" gap="4" break="m" breakGap="1" breakReverse={false}>
              <Image
                  src="https://assets-global.website-files.com/5d5e2ff58f10c53dcffd8683/5d99f7d2574a7d0afa266796_composition-13.svg"
                  alt="image" side="width" rounded={true}/>
              <Column gap="2" justify={true}>
                <Column gap="0" justify={false}>
                  <Text type="h1" primary={true}><Text type="h3" primary={false}>Samstag,</Text> 24. August</Text>
                </Column>
                <Column gap="0" justify={false}>
                  <Text type="h3" primary={true}>Scharanlass</Text>
                  <Text type="p" primary={false}>Infos folgen</Text>
                </Column>
              </Column>
            </Split>

            <Split ratio="1-2" gap="4" break="m" breakGap="1" breakReverse={false}>
              <Image
                  src="https://assets-global.website-files.com/5d5e2ff58f10c53dcffd8683/5d99f8d6c33c8970db7cec8b_composition-18.svg"
                  alt="image" side="width" rounded={true}/>
              <Column gap="2" justify={true}>
                <Column gap="0" justify={false}>
                  <Text type="h1" primary={true}><Text type="h3" primary={false}>Dienstag,</Text> 27. August</Text>
                </Column>
                <Column gap="0" justify={false}>
                  <Text type="h3" primary={true}>Elterninfoabend</Text>
                  <Text type="p" primary={false}>Wohlenschwil, Pfarreiheim</Text>
                </Column>
              </Column>
            </Split>
          </Column>
        </Section>
      </>
  )
}

export default JublawomaEvents
