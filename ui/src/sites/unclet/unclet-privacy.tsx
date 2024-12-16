import Flex from "../../components/flex/flex";
import Text from "../../components/text/text";
import Grid from "../../components/grid/grid";
import GridItem from "../../components/grid/item/grid-item";

const UncletPrivacy = () => {

  return (
      <Flex xl={{direction: "column", align: "center"}}>
        <Flex xl={{widthMax: "l", width: true, direction: "column", gap: 8}}>
          <Text type="h1">Datenschutz</Text>
          <Grid xl={{columns: 3, gap: 4}} m={{columns: 1}}>
            <GridItem xl={{columns: 1}}>
              <Text type="h3">Allgemeine Informationen</Text>
            </GridItem>
            <GridItem xl={{columns: 2}} m={{columns: 1}}>
              <Flex xl={{direction: "column", gap: 1}}>
                <Text type="p">Die Betreiber dieser Website nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich.</Text>
                <Text type="p">Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unserer Seite personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.</Text>
                <Text type="p">Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</Text>
              </Flex>
            </GridItem>
            <GridItem xl={{columns: 1}}>
              <Text type="h3">Cookies</Text>
            </GridItem>
            <GridItem xl={{columns: 2}} m={{columns: 1}}>
              <Flex xl={{direction: "column", gap: 1}}>
                <Text type="p">Die Internetseite verwendet teilweise so genannte Cookies. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.</Text>
                <Text type="p">Die meisten der von uns verwendeten Cookies sind so genannte „Session-Cookies“. Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.</Text>
                <Text type="p">Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.</Text>
              </Flex>
            </GridItem>
            <GridItem xl={{columns: 1}}>
              <Text type="h3">Server Log Files</Text>
            </GridItem>
            <GridItem xl={{columns: 2}} m={{columns: 1}}>
              <Flex xl={{direction: "column", gap: 1}}>
                <Text type="p">Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log Files, die Ihr Browser automatisch an uns übermittelt. Dies sind:</Text>
                <Text type="p">Browsertyp und Browserversion, Verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage</Text>
                <Text type="p">Diese Daten sind nicht bestimmten Personen zuordbar. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Wir behalten uns vor, diese Daten nachträglich zu prüfen, wenn uns konkrete Anhaltspunkte für eine rechtswidrige Nutzung bekannt werden.</Text>
              </Flex>
            </GridItem>
            <GridItem xl={{columns: 1}}>
              <Text type="h3">Google Analytics</Text>
            </GridItem>
            <GridItem xl={{columns: 2}} m={{columns: 1}}>
              <Flex xl={{direction: "column", gap: 1}}>
                <Text type="p">Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. («Google»). Google Analytics verwendet sog. «Cookies», Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Auf dieser Webseite ist die IP-Anonymisierung aktiviert und somit wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Google wird diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten für die Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google verarbeiten. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt. Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der Datenschutzerklärung von Google: https://support.google.com/analytics/answer/6004245?hl=de</Text>
                <Text type="p">Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch den Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: https://tools.google.com/dlpage/gaoptout?hl=de</Text>
              </Flex>
            </GridItem>
            <GridItem xl={{columns: 1}}>
              <Text type="h3">Google Maps</Text>
            </GridItem>
            <GridItem xl={{columns: 2}} m={{columns: 1}}>
              <Flex xl={{direction: "column", gap: 1}}>
                <Text type="p">Diese Webseite verwendet unter Umständen das Produkt Google Maps von Google Inc. Durch Nutzung dieser Webseite erklären Sie sich mit der Erfassung, Bearbeitung sowie Nutzung der automatisiert erhobenen Daten durch Google Inc, deren Vertreter sowie Dritter einverstanden. Die Nutzungsbedingungen von Google Maps finden Sie unter «Nutzungsbedingungen von Google Maps».</Text>
              </Flex>
            </GridItem>
            <GridItem xl={{columns: 1}}>
              <Text type="h3">Kontaktformular</Text>
            </GridItem>
            <GridItem xl={{columns: 2}} m={{columns: 1}}>
              <Flex xl={{direction: "column", gap: 1}}>
                <Text type="p">Insofern die Webseite ein Kontaktformular zur Verfügung stellt und wenn Sie uns über dieses Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter und werden vertraulich behandelt.</Text>
              </Flex>
            </GridItem>
            <GridItem xl={{columns: 1}}>
              <Text type="h3">Auskunft, Löschung und Sperrung</Text>
            </GridItem>
            <GridItem xl={{columns: 2}} m={{columns: 1}}>
              <Flex xl={{direction: "column", gap: 1}}>
                <Text type="p">Sie erhalten Auskunft über die von uns gespeicherten personenbezogenen Daten zu Ihrer Person sowie zur Herkunft, dem Empfänger und dem Zweck von Datenerhebung sowie Datenverarbeitung. Außerdem haben Sie das Recht, die Berichtigung, die Sperrung oder Löschung Ihrer Daten zu verlangen. Ausgenommen davon sind Daten, die aufgrund gesetzlicher Vorschriften aufbewahrt oder zur ordnungsgemäßen Geschäftsabwicklung benötigt werden. Damit eine Datensperre jederzeit realisiert werden kann, können Daten gegebenenfalls zu Kontrollzwecken in einer Sperrdatei vorgehalten werden. Werden Daten nicht von einer gesetzlichen Archivierungspflicht erfasst, löschen wir Ihre Daten auf Ihren Wunsch. Greift die Archivierungspflicht, sperren wir Ihre Daten. Für alle Fragen und Anliegen zur Berichtigung, Sperrung oder Löschung von personenbezogenen Daten wenden Sie sich bitte an unseren Datenschutzbeauftragten oder an die im Impressum genannte Adresse.</Text>
              </Flex>
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
  )
}

export default UncletPrivacy
