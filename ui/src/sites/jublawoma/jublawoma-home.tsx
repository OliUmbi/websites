import Text from "../../components/text/text";
import Flex from "../../components/flex/flex";
import Grid from "../../components/grid/grid";
import GridItem from "../../components/grid/item/grid-item";
import Image from "../../components/image/image";
import Button from "../../components/button/button";
import {useNavigate} from "react-router-dom";
import Instagram from "../../components/instagram/instagram";

const JublawomaHome = () => {

    const navigate = useNavigate();

    return (
        <Flex xl={{direction: "column", align: "center", gap: 8}}>
            <Flex xl={{widthMax: "xl", width: true}}>
                <Grid xl={{columns: 2, gap: 4}} m={{columns: 1}}>
                    <GridItem xl={{columns: 1}}>
                        <Image src="/assets/jublawoma/images/doodles/swinging.svg" alt="Beitreten" side="width"
                               rounded={false}/>
                    </GridItem>
                    <GridItem xl={{columns: 1}}>
                        <Flex xl={{height: true, direction: "column", justify: "center", gap: 2}}>
                            <Flex xl={{direction: "column"}}>
                                <Text type="h1">JuBla WoMa</Text>
                                <Text type="h3" primary={false}>Jungwacht Blauring</Text>
                                <Text type="h3" primary={false}>Wohlenschwil Mägenwil</Text>
                            </Flex>
                            <Text type="s" primary={true}>Wir sind ca. 100 Kinder und 40 Leiter aus den Gemeinden
                                Wohlenschwil, Mägenwil und Tägerig. Wir nehmen an diversen Anlässen in den Gemeinden
                                teil und haben unsere eigenen Anlässe für Gross und Klein.</Text>
                        </Flex>
                    </GridItem>
                </Grid>
            </Flex>
            <Flex xl={{widthMax: "m", width: true}}>
                <Flex xl={{direction: "column", gap: 1}}>
                    <Text type="h2">Spendeliste Hela 2025</Text>
                    <Flex xl={{direction: "row", align: "center", justify: "between", gap: 2}} m={{direction: "column"}}>
                        <Text type="p">Wie auch schon im letzten Jahr führen wir unsere Spendenliste fürs Hela 2025 digital. Ohne euch gäbe es kein so gutes Essen, vielen Dank für jede Unterstützung!</Text>
                        <Button onClick={() => navigate("/spenden")} highlight={true}>Zur Spendeliste</Button>
                    </Flex>
                </Flex>
            </Flex>
            <Flex xl={{widthMax: "m", width: true}}>
                <Instagram name="jubla_woma"/>
            </Flex>
            <Flex xl={{widthMax: "l", width: true}}>
                <Grid xl={{columns: 2, gap: 4}} m={{columns: 1}}>
                    <GridItem xl={{columns: 1}}>
                        <Image src="/assets/jublawoma/images/doodles/dog.svg" alt="Beitreten" side="width"
                               rounded={false}/>
                    </GridItem>
                    <GridItem xl={{columns: 1}}>
                        <Flex xl={{height: true, direction: "column", justify: "center", gap: 1}}>
                            <Text type="h3">Zusammen sein</Text>
                            <Text type="p">Jungwacht Blauring ist eine Gemeinschaft, in welcher alle akzeptiert sowie
                                respektiert werden.
                                Gemeinsam haben wir Spass.</Text>
                        </Flex>
                    </GridItem>
                    <GridItem xl={{columns: 1}}>
                        <Image src="/assets/jublawoma/images/doodles/float.svg" alt="Beitreten" side="width"
                               rounded={false}/>
                    </GridItem>
                    <GridItem xl={{columns: 1}}>
                        <Flex xl={{height: true, direction: "column", justify: "center", gap: 1}}>
                            <Text type="h3">Mitbestimmen</Text>
                            <Text type="p">Egal ob gross oder klein, jeder darf und soll in der Jungwacht Blauring seine
                                eigenen
                                Ideen
                                und Vorschläge miteinbringen.</Text>
                        </Flex>
                    </GridItem>
                    <GridItem xl={{columns: 1}}>
                        <Image src="/assets/jublawoma/images/doodles/meditating.svg" alt="Beitreten" side="width"
                               rounded={false}/>
                    </GridItem>
                    <GridItem xl={{columns: 1}}>
                        <Flex xl={{height: true, direction: "column", justify: "center", gap: 1}}>
                            <Text type="h3">Glauben leben</Text>
                            <Text type="p">In der Jungwacht Blauring ermöglichen wir den Kindern einen Freiraum, um sich
                                mit
                                persönlichen
                                Werten und wichtigen Fragen des Lebens auseinanderzusetzen.</Text>
                        </Flex>
                    </GridItem>
                    <GridItem xl={{columns: 1}}>
                        <Image src="/assets/jublawoma/images/doodles/unboxing.svg" alt="Beitreten" side="width"
                               rounded={false}/>
                    </GridItem>
                    <GridItem xl={{columns: 1}}>
                        <Flex xl={{height: true, direction: "column", justify: "center", gap: 1}}>
                            <Text type="h3">Kreativ sein</Text>
                            <Text type="p">Der Fantasie lassen wir in der Jungwacht Blauring freien Lauf und entwickeln
                                so
                                unsere
                                Fähigkeiten weiter.</Text>
                        </Flex>
                    </GridItem>
                    <GridItem xl={{columns: 1}}>
                        <Image src="/assets/jublawoma/images/doodles/plant.svg" alt="Beitreten" side="width"
                               rounded={false}/>
                    </GridItem>
                    <GridItem xl={{columns: 1}}>
                        <Flex xl={{height: true, direction: "column", justify: "center", gap: 1}}>
                            <Text type="h3">Natur erleben</Text>
                            <Text type="p">Eine beachtliche Zeit verbringen wir in der Jungwacht Blauring in der Natur.
                                Wir
                                lernen, wie
                                wir uns in der Natur verhalten und wie mit ihr bewusst umzugehen. Ausserdem entdecken
                                wir bei
                                jedem
                                Abenteuer im Freien Neues.</Text>
                        </Flex>
                    </GridItem>
                </Grid>
            </Flex>
            <Flex xl={{widthMax: "xl", width: true}}>
                <Grid xl={{columns: 2, gap: 4}} m={{columns: 1}}>
                    <GridItem xl={{columns: 1}}>
                        <Flex xl={{height: true, direction: "column", justify: "center", gap: 2}}>
                            <Text type="h2">Beitreten</Text>
                            <Text type="p">Liebe Eltern, ist Ihr Kind mindestens in der 3. Klasse und hat Interesse
                                daran, etwas
                                zu
                                erleben? Dann sind Sie bei uns genau richtig. Wir bieten Ihrem Kind ein
                                abwechslungsreiches
                                Freizeitprogramm mit diversen Höhepunkten. Bei uns steht der Spass an oberster
                                Stelle.</Text>
                            <Button onClick={() => navigate("/beitreten")} highlight={true}>Mehr erfahren</Button>
                        </Flex>
                    </GridItem>
                    <GridItem xl={{columns: 1}}>
                        <Image src="/assets/jublawoma/images/doodles/loving.svg" alt="Beitreten" side="width"
                               rounded={false}/>
                    </GridItem>
                </Grid>
            </Flex>
        </Flex>
    )
}

export default JublawomaHome
