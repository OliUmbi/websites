import Section from "../../components/section/section";
import Text from "../../components/text/text";
import Split from "../../components/split/split";
import Image from "../../components/image/image";
import Column from "../../components/column/column";

const JublawomaPost = () => {

  return (
      <>
        <Section width="l">
          <Image
              src="https://assets-global.website-files.com/5d5e2ff58f10c53dcffd8683/5d99f8b24aefbe234194b70d_composition-17.svg"
              alt="image" side="width" rounded={true}/>
        </Section>
        <Section width="m">
          <Column gap="2">
            <Column gap="0" justify={false}>
              <Text type="s" primary={true}>Samstag, 30. September 2023</Text>
              <Text type="h1" primary={true}>Der Diebstahl von Walter</Text>
            </Column>
            <Text type="p" primary={true}><Text type="p" primary={false}>Erstellt von</Text> Julian und Caithlyn</Text>
          </Column>
        </Section>
        <Section width="m">
          <Column gap="2">
            <Text type="p" primary={true}>Da wir Walter erwischt haben wie er unsere Technik und Material aus dem Jubla Raum
              gestohlen hat, haben wir uns heute um 8:45 in Mägenwil am Bahnhof getroffen, um Walter zu finden. Wir sind mit
              dem Zug nach Martigny gefahren, da wir von vertrauten Personen mitbekommen haben, dass sich Walter dort
              befinden könnte. In Martigny angekommen, trafen wir Francoire, der uns das Buch gegeben hat, damit wir Walter
              finden können.</Text>
          </Column>
        </Section>
        <Section width="xl">
          <Split ratio="1-1" gap="2" break="m" breakGap="2" breakReverse={false}>
            <Image src="https://jublawoma.ch/images/hela-2023/samstag-1.jpg" alt="image" side="width" rounded={true}/>
            <Image src="https://jublawoma.ch/images/hela-2023/samstag-2.jpg" alt="image" side="width" rounded={true}/>
          </Split>
        </Section>
        <Section width="m">
          <Text type="p" primary={true}>Da leider alle Seiten aus dem Buch ausgerissen worden sind, müssen wir diese Seiten
            erst mal finden. Die erste Seite war in der Stadt Martigny versteckt. Unser erster Block des Lagers war ein
            Stadtrundgang in Form eines Foto-Orientierungslaufes. Wir haben Fotos bekommen und mussten verschiedene
            Aufgaben lösen, damit wir die Seite bekommen. Als wir dies erfolgreich gelöst haben, sind wir mit dem Bus in
            das Lagerhaus gefahren. Dort konnten wir uns mit leckerem Abendessen wieder stärken, was nach so einem langem
            Nachmittag das Highlight war.</Text>
        </Section>
        <Section width="l">
          <Image src="https://jublawoma.ch/images/hela-2023/samstag-3.jpg" alt="image" side="width" rounded={true}/>
        </Section>
        <Section width="m">
          <Text type="p" primary={true}>Nach dem Nachtessen ist Cindy mit einer Maschine zu uns gekommen, welche die Seite
            entziffern kann, weil diese noch viele Löcher hatte und die Bilder schwer erkennbar waren. Danach haben wir
            einen Bastelabend gemacht, um uns in dem Lagerhaus und in Martigny einleben zu können. Dazu gehörte auch die
            Maschine. Die haben wir schön dekoriert und angemalen. Wir haben herausgefunden, dass die Maschine 9h braucht,
            um die Seite zu entschlüsseln. Also haben wir uns entschieden, dass wir schlafen gehen und am Morgen weiter
            schauen.</Text>
        </Section>
        <Section width="l">
          <Image src="https://jublawoma.ch/images/hela-2023/samstag-4.jpg" alt="image" side="width" rounded={true}/>
        </Section>
      </>
  )
}

export default JublawomaPost
