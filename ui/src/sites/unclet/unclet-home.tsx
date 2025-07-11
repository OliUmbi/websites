import Flex from "../../components/flex/flex";
import Text from "../../components/text/text";
import Grid from "../../components/grid/grid";
import GridItem from "../../components/grid/item/grid-item";
import Image from "../../components/image/image";
import Button from "../../components/button/button";
import {useNavigate} from "react-router-dom";
import Anchor from "../../components/anchor/anchor";
import useApi from "../../hooks/use-api";
import {Enviroment} from "../../enums/shared/enviroment";
import {ReviewAllResponse} from "../../interfaces/unclet/review";
import {useEffect} from "react";
import {date} from "../../services/date";
import Error from "../../components/error/error";
import Loading from "../../components/loading/loading";
import Icon from "../../components/icon/icon";
import Instagram from "../../components/instagram/instagram";

const UncletHome = () => {

  const navigate = useNavigate()

  const reviewAll = useApi<ReviewAllResponse[]>(Enviroment.UNCLET, "GET", "/review")

  useEffect(() => {
    reviewAll.execute()
  }, []);

  return (
      <Flex xl={{direction: "column", align: "center", gap: 8}}>
        <Flex xl={{widthMax: "xl", width: true}}>
          <Grid xl={{columns: 2, gap: 4}} s={{columns: 1}}>
            <GridItem xl={{columns: 1}}>
              <Image src="./assets/unclet/images/static/unclet.jpg" alt="Thomas Habegger" side="width" rounded={true}/>
            </GridItem>
            <GridItem xl={{columns: 1}}>
              <Flex xl={{height: true, direction: "column", justify: "center", gap: 4}}>
                <Flex xl={{direction: "column"}}>
                  <Text type="s">Thomas Habegger</Text>
                  <Text type="h1">Uncle-T</Text>
                </Flex>
                <Text type="p">Ich bin Thomas und es freut mich sehr, dass Sie den Weg zu meiner kulinarischen Welt gefunden
                  haben. Erlaube mir, Ihnen einen kurzen Einblick in meine Passion als Privatkoch und Catering-Experte zu
                  geben.</Text>
              </Flex>
            </GridItem>
          </Grid>
        </Flex>
        <Flex xl={{widthMax: "xl", width: true}}>
          {
            reviewAll.data && reviewAll.data.length > 0 ? (
                <>
                  <Grid xl={{columns: 2, gap: 4}} m={{columns: 1}}>
                    <GridItem xl={{columns: 1, rows: 1}}>
                      <Flex xl={{direction: "column", gap: 0.5}}>
                        <Text type="h3" primary={true}>Bewertungen</Text>
                        <Text type="p" primary={false}>Lesen Sie, was meine Gäste sagen!</Text>
                      </Flex>
                    </GridItem>
                    {
                      reviewAll.data.map((value, index) => (
                          <GridItem xl={{columns: 1, rows: 1}} key={index}>
                            <Flex xl={{direction: "column", gap: 1}}>
                              <Flex xl={{direction: "row", gap: 1}}>
                                <Text type="s" primary={false}>{date.locale(value.date, "date")}</Text>
                                <Flex xl={{direction: "row", gap: 0.5}}>
                                  {
                                    [...Array(value.stars)].map(() => <Icon size={1}>sparkles</Icon>)
                                  }
                                  {
                                    [...Array(5 - value.stars)].map(() => <Icon size={1}>circle-dashed</Icon>)
                                  }
                                </Flex>
                              </Flex>
                              <Text type="p" primary={true}>{value.name}</Text>
                              <Text type="s" primary={false}>{value.description}</Text>
                            </Flex>
                          </GridItem>
                      ))
                    }
                  </Grid>
                </>
            ) : null
          }
          {
            reviewAll.error ? <Error message="Bewertungen konnten nicht geladen werden."/> : null
          }
          {
            reviewAll.loading ? <Loading/> : null
          }
        </Flex>
        <Flex xl={{widthMax: "xl", width: true}}>
          <Grid xl={{columns: 3, gap: 4}} m={{columns: 2}} s={{columns: 1}}>
            <GridItem xl={{columns: 1}}>
              <Flex xl={{height: true, direction: "column", justify: "between", gap: 4}}>
                <Flex xl={{direction: "column", gap: 2}}>
                  <Image src="./assets/unclet/images/static/private.jpg" alt="Privatkoch" side="width" rounded={true}/>
                  <Flex xl={{direction: "column", gap: 1}}>
                    <Text type="h2">Privatkoch</Text>
                    <Text type="s" primary={false}>Genuss wie ein König – Ihr persönlicher Koch zuhause.</Text>
                  </Flex>
                  <Text type="p">Ein erfahrener Privatkoch, der kulinarische Meisterwerke kreiert, steht bereit, um Ihre
                    Geschmackssinne zu verwöhnen. Lassen Sie sich von exquisiten Aromen und massgeschneiderten Menüs in Ihrem
                    Zuhause verführen.</Text>
                </Flex>
                <Button onClick={() => navigate("/privatkoch")} highlight={true}>Mehr erfahren</Button>
              </Flex>
            </GridItem>
            <GridItem xl={{columns: 1}}>
              <Flex xl={{height: true, direction: "column", justify: "between", gap: 4}}>
                <Flex xl={{direction: "column", gap: 2}}>
                  <Image src="./assets/unclet/images/static/catering.jpg" alt="Catering" side="width" rounded={true}/>
                  <Flex xl={{direction: "column", gap: 1}}>
                    <Text type="h2">Catering</Text>
                    <Text type="s" primary={false}>Perfekt serviert – für jeden Anlass, überall</Text>
                  </Flex>
                  <Text type="p">Chic, wenn das Essen nachhause oder in die Firma geliefert wird. Brauchen auch Sie ein auf
                    Sie zugeschnittenes Catering Angebot.</Text>
                  <Text type="p">Wie zum Beispiel: Firmenanlässe, Hochzeiten, Geburtstage, Apéros und vieles mehr.</Text>
                </Flex>
                <Button onClick={() => navigate("/catering")} highlight={true}>Mehr erfahren</Button>
              </Flex>
            </GridItem>
            <GridItem xl={{columns: 1}}>
              <Flex xl={{height: true, direction: "column", justify: "between", gap: 4}}>
                <Flex xl={{direction: "column", gap: 2}}>
                  <Image src="./assets/unclet/images/static/courses.jpg" alt="Kurse" side="width" rounded={true}/>
                  <Flex xl={{direction: "column", gap: 1}}>
                    <Text type="h2">Kurse</Text>
                    <Text type="s" primary={false}>Kochen lernen, geniessen erleben – entdecken Sie Ihre kulinarische
                      Seite.</Text>
                  </Flex>
                  <Text type="p">Erleben Sie eine unterhaltsame und lehrreiche Atmosphäre, die Ihre Kochfähigkeiten auf ein
                    neues Niveau hebt und Ihr Vertrauen in die Küche stärkt. Buchen Sie noch heute einen Kochkurs für sich
                    und Ihre Freunde, und erleben Sie gemeinsam einen unvergesslichen Abend voller kulinarischer Entdeckungen
                    und genussvoller Momente.</Text>
                </Flex>
                <Button onClick={() => navigate("/kurse")} highlight={true}>Mehr erfahren</Button>
              </Flex>
            </GridItem>
          </Grid>
        </Flex>
        <Flex xl={{widthMax: "m", width: true}}>
          <Instagram name="unclet_gmbh"/>
        </Flex>
        <Flex xl={{widthMax: "m", width: true}}>
          <Grid xl={{columns: 2, gap: 4}} s={{columns: 1}}>
            <GridItem xl={{columns: 1}}>
              <Flex xl={{height: true, direction: "column", gap: 1}}>
                <Text type="h2">Kontakt</Text>
                <Text type="s">Wenn Sie eine Frage haben oder einen Termin vereinbaren möchten, kontaktieren Sie mich
                  einfach.</Text>
              </Flex>
            </GridItem>
            <GridItem xl={{columns: 1}}>
              <Flex xl={{height: true, direction: "column", gap: 4}}>
                <Anchor to="mailto://info@uncle-t.ch">
                  <Text type="p">info@uncle-t.ch</Text>
                </Anchor>
                <Flex xl={{direction: "column"}}>
                  <Text type="p">Uncle-T GmbH</Text>
                  <Text type="p">Thomas Habegger</Text>
                  <Text type="p">Zelgliweg 2</Text>
                  <Text type="p">5506 Mägenwil</Text>
                </Flex>
              </Flex>
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
  )
}

export default UncletHome
