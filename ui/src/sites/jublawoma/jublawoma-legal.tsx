import Section from "../../components/section/section";
import Text from "../../components/text/text";
import Flex from "../../components/flex/flex";
import Grid from "../../components/grid/grid";
import GridItem from "../../components/grid/item/grid-item";
import Image from "../../components/image/image";

const JublawomaLegal = () => {

  return (
      <Flex xl={{direction: "column", gap: 4}}>
        <Section width="l">
          <Grid xl={{columns: 2, gap: 2}} s={{columns: 1}}>
            <GridItem xl={{columns: 1}}>
              <Image src="/assets/jublawoma/images/doodles/unboxing.svg" alt="Beitreten" side="width" rounded={false}/>
            </GridItem>
            <GridItem xl={{columns: 1}}>
              <Flex xl={{height: true, direction: "column", justify: "center"}}>
                <Text type="h1">Impressum</Text>
              </Flex>
            </GridItem>
          </Grid>
        </Section>
        <Section width="m">
          <Flex xl={{direction: "column", gap: 2}}>
            <Text type="h3">Kontakt-Adresse</Text>
            <Flex xl={{direction: "column", gap: 0.5}}>
              <Text type="p">Jungwacht Blauring WohlenschwII Mägenwil</Text>
              <Text type="p">Vogelsangstrasse 2</Text>
              <Text type="p">5512 Wohlenschwil</Text>
            </Flex>
          </Flex>
        </Section>
        <Section width="m">
          <Flex xl={{direction: "column", gap: 2}}>
            <Text type="h3">E-Mail</Text>
            <Flex xl={{direction: "column", gap: 0.5}}>
              <Text type="p">scharleitung@jublawoma.ch</Text>
            </Flex>
          </Flex>
        </Section>
        <Section width="m">
          <Flex xl={{direction: "column", gap: 2}}>
            <Text type="h3">Vertretungsberechtigte Personen</Text>
            <Flex xl={{direction: "row", gap: 2}}>
              <Flex xl={{direction: "column"}}>
                <Text type="p">Saskia Schmid</Text>
                <Text type="s" primary={false}>Scharleitung</Text>
              </Flex>
              <Flex xl={{direction: "column"}}>
                <Text type="p">Fabian Stahel</Text>
                <Text type="s" primary={false}>Scharleitung</Text>
              </Flex>
              <Flex xl={{direction: "column"}}>
                <Text type="p">Raphael Schreiber</Text>
                <Text type="s" primary={false}>Scharleitung</Text>
              </Flex>
            </Flex>
          </Flex>
        </Section>
        <Section width="m">
          <Flex xl={{direction: "column", gap: 2}}>
            <Text type="h3">Haftungsausschluss</Text>
            <Flex xl={{direction: "column", gap: 0.5}}>
              <Text type="p">Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit,
                Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.</Text>
              <Text type="p">Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus
                dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der
                Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.</Text>
              <Text type="p">Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten
                oder das gesamte Angebot ohne besondere Ankündigung zu verändern, zu ergänzen, zu löschen oder die
                Veröffentlichung zeitweise oder endgültig einzustellen.</Text>
            </Flex>
          </Flex>
        </Section>
        <Section width="m">
          <Flex xl={{direction: "column", gap: 2}}>
            <Text type="h3">Haftungsausschluss für Links</Text>
            <Flex xl={{direction: "column", gap: 0.5}}>
              <Text type="p">Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es
                wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten
                erfolgen auf eigene Gefahr des jeweiligen Nutzers.</Text>
            </Flex>
          </Flex>
        </Section>
        <Section width="m">
          <Flex xl={{direction: "column", gap: 2}}>
            <Text type="h3">Urheberrechte</Text>
            <Flex xl={{direction: "column", gap: 0.5}}>
              <Text type="p">Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser
                Website, gehören ausschliesslich der juristischen Person Jungwacht Blauring WohlenschwII Mägenwil oder den
                speziell genannten Rechteinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung
                des Urheberrechtsträgers im Voraus einzuholen.</Text>
            </Flex>
          </Flex>
        </Section>
        <Section width="m">
          <Text type="p">Quelle:SwissAnwalt</Text>
        </Section>
      </Flex>
  )
}

export default JublawomaLegal
