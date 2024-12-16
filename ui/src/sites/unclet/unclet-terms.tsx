import Flex from "../../components/flex/flex";
import Text from "../../components/text/text";
import GridItem from "../../components/grid/item/grid-item";
import Grid from "../../components/grid/grid";

const UncletTerms = () => {

  return (
      <Flex xl={{direction: "column", align: "center"}}>
        <Flex xl={{widthMax: "m", width: true, direction: "column", gap: 4}}>
          <Text type="h1">Allgemeine Geschäftsbedingung</Text>
          <Text type="p">Der Kunde überträgt das Catering gemäss Detail-Offerten an die Uncle-T GmbH.</Text>
          <Grid xl={{columns: 8, gap: 2}}>
            <GridItem xl={{columns: 1}}>
              <Text type="h3">1</Text>
            </GridItem>
            <GridItem xl={{columns: 7}}>
              <Flex xl={{direction: "column", gap: 1}}>
                <Text type="p">Die oben genannten Preise verstehen sich als absolute Richtwerte. Verrechnet wird nach effektivem Aufwand.</Text>
              </Flex>
            </GridItem>
            <GridItem xl={{columns: 1}}>
              <Text type="h3">2</Text>
            </GridItem>
            <GridItem xl={{columns: 7}}>
              <Flex xl={{direction: "column", gap: 1}}>
                <Text type="p">Der Kunde muss dem Caterer eine Änderung der Personenzahl spätestens 4 Tage vor Anlassbeginn in schriftlicher Form mitteilen. Spätere Änderungen können nicht mehr garantiert werden. Die vom Kunden bekannt gegebene Teilnehmerzahl ist verbindlich. Zusätzliche Personen stellt der Caterer dem Kunden nachträglich in Rechnung. Leistungen für nachträglich noch wegfallende Teilnehmer werden dem Kunden in Rechnung gestellt.</Text>
              </Flex>
            </GridItem>
            <GridItem xl={{columns: 1}}>
              <Text type="h3">3</Text>
            </GridItem>
            <GridItem xl={{columns: 7}}>
              <Flex xl={{direction: "column", gap: 1}}>
                <Text type="p">Bei Annullierung eines Auftrags durch den Kunden stellt der Caterer folgende Kosten in Rechnung:</Text>
                <Text type="p">6 – 4 Arbeitstage vor dem Anlass: 50% der vereinbarten Leistung</Text>
                <Text type="p">3 – 1 Arbeitstage vor dem Anlass: 75% der vereinbarten Leistung</Text>
                <Text type="p">0 Arbeitstage vor dem Anlass: 100% der vereinbarten Leistung</Text>
              </Flex>
            </GridItem>
            <GridItem xl={{columns: 1}}>
              <Text type="h3">4</Text>
            </GridItem>
            <GridItem xl={{columns: 7}}>
              <Flex xl={{direction: "column", gap: 1}}>
                <Text type="p">Ohne anders lautende Vereinbarung stellt der Kunde dem Caterer unentgeltlich folgende Infrastruktur zur Verfügung und verpflichtet sich, diese in einem zum vorausgesetzten Gebrauch geeigneten Zustand zu übergeben und in demselben zu erhalten:</Text>
                <Text type="p">Die erforderlichen Räume</Text>
                <Text type="p">Heizung, Wasser und Strom</Text>
                <Text type="p">Insbesondere muss der Kunde dem Caterer rechtzeitig darauf aufmerksam machen, wenn die Zufahrt erschwert ist oder das Gebäude über keinen Lift verfügt.</Text>
              </Flex>
            </GridItem>
            <GridItem xl={{columns: 1}}>
              <Text type="h3">5</Text>
            </GridItem>
            <GridItem xl={{columns: 7}}>
              <Flex xl={{direction: "column", gap: 1}}>
                <Text type="p">Der Caterer übernimmt die Reinigung des Gastroinventars und des Materials. Ohne anders lautende Vereinbarung ist im Übrigen der Kunde verantwortlich für Reinigung und Entsorgung.</Text>
              </Flex>
            </GridItem>
            <GridItem xl={{columns: 1}}>
              <Text type="h3">6</Text>
            </GridItem>
            <GridItem xl={{columns: 7}}>
              <Flex xl={{direction: "column", gap: 1}}>
                <Text type="p">Wird seitens des Caterers Material zur Verfügung gestellt, welches nach Beendigung des Anlasses an ihn zu retournieren ist (zum Beispiel Gläser, Geschirr, Bestecke, Wäsche, etc.), so ist der Kunde verpflichtet, das Material vollständig und unversehrt an den Caterer zurückzugeben. Verluste und Beschädigungen durch Angestellte oder Gäste des Kunden gehen zu Lasten des Kunden.</Text>
              </Flex>
            </GridItem>
            <GridItem xl={{columns: 1}}>
              <Text type="h3">7</Text>
            </GridItem>
            <GridItem xl={{columns: 7}}>
              <Flex xl={{direction: "column", gap: 1}}>
                <Text type="p">Ohne anders lautende Vereinbarung ist der Kunde für den notwendigen Versicherungsschutz in Bezug auf Sach- und Personenschäden verantwortlich sowie für sämtliche gesetzlich vorgeschriebene Bewilligungen, welche im Zusammenhang eines Events benötigt werden.</Text>
              </Flex>
            </GridItem>
            <GridItem xl={{columns: 1}}>
              <Text type="h3">8</Text>
            </GridItem>
            <GridItem xl={{columns: 7}}>
              <Flex xl={{direction: "column", gap: 1}}>
                <Text type="p">Nach Durchführung des Anlasses erhält der Kunde vom Caterer eine Rechnung, die innerhalb 14 Tagen ab Rechnungsdatum zu begleichen ist.</Text>
              </Flex>
            </GridItem>
            <GridItem xl={{columns: 1}}>
              <Text type="h3">9</Text>
            </GridItem>
            <GridItem xl={{columns: 7}}>
              <Flex xl={{direction: "column", gap: 1}}>
                <Text type="p">Die Vereinbarung untersteht schweizerischem Recht. Gerichtsstand für sämtliche Streitigkeiten, welche sich im Zusammenhang mit der Vereinbarung und der Tätigkeit des Caterers ergeben, ist Aargau (Handelsgericht)</Text>
              </Flex>
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
  )
}

export default UncletTerms
