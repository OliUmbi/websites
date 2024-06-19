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
        <Section width="l">
          <Split ratio="1-1" gap="4" break="m" breakGap="2" breakReverse={false}>
            <Image
                src="https://assets-global.website-files.com/5d5e2ff58f10c53dcffd8683/5d99f7054aefbe78f094a9ca_composition-7.svg"
                alt="image" side="width" rounded={true}/>
            <Column gap="2">
              <Text type="h2" primary={true}>Jugendfest Mägenwil `Dschungel`</Text>
              <Split ratio="1-3" gap="1" break="xs" breakGap="0" breakReverse={false}>
                <Text type="s" primary={false}>Datum</Text>
                <Text type="p" primary={true}>Freitag, 28. Juni <Text type="s" primary={false}>- Samstag, 29. Juni
                  2024</Text></Text>
              </Split>
              <Split ratio="1-3" gap="1" break="xs" breakGap="0" breakReverse={false}>
                <Text type="s" primary={false}>Ort</Text>
                <Text type="p" primary={true}>Mägenwil Schulhaus</Text>
              </Split>
            </Column>
          </Split>
        </Section>
        <Section width="l">
          <Split ratio="1-1" gap="4" break="m" breakGap="2" breakReverse={false}>
            <Image
                src="https://assets-global.website-files.com/5d5e2ff58f10c53dcffd8683/5d99f8d6c33c8970db7cec8b_composition-18.svg"
                alt="image" side="width" rounded={true}/>
            <Column gap="2">
              <Text type="h2" primary={true}>Elterninfoabend</Text>
              <Split ratio="1-3" gap="1" break="xs" breakGap="0" breakReverse={false}>
                <Text type="s" primary={false}>Datum</Text>
                <Text type="p" primary={true}>Dienstag, 27. August 2024</Text>
              </Split>
              <Split ratio="1-3" gap="1" break="xs" breakGap="0" breakReverse={false}>
                <Text type="s" primary={false}>Ort</Text>
                <Text type="p" primary={true}>Wohlenschwil Pfarreiheim</Text>
              </Split>
            </Column>
          </Split>
        </Section>
        <Section width="l">
          <Split ratio="1-1" gap="4" break="m" breakGap="2" breakReverse={false}>
            <Image
                src="https://assets-global.website-files.com/5d5e2ff58f10c53dcffd8683/5d99f7d2574a7d0afa266796_composition-13.svg"
                alt="image" side="width" rounded={true}/>
            <Column gap="2">
              <Text type="h2" primary={true}>Scharanlass</Text>
              <Split ratio="1-3" gap="1" break="xs" breakGap="0" breakReverse={false}>
                <Text type="s" primary={false}>Datum</Text>
                <Text type="p" primary={true}>Samstag, 24. August 2024</Text>
              </Split>
              <Split ratio="1-3" gap="1" break="xs" breakGap="0" breakReverse={false}>
                <Text type="s" primary={false}>Ort</Text>
                <Text type="p" primary={true}>Infos folgen</Text>
              </Split>
            </Column>
          </Split>
        </Section>
      </>
  )
}

export default JublawomaEvents
