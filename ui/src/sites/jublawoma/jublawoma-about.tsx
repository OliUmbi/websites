import Grid from "../../components/grid/grid";
import GridItem from "../../components/grid/item/grid-item";
import Text from "../../components/text/text";
import Image from "../../components/image/image";
import Flex from "../../components/flex/flex";

const JublawomaAbout = () => {

    return (
        <Flex xl={{direction: "column", align: "center", gap: 8}}>
            <Flex xl={{widthMax: "l", width: true}}>
                <Image src="/assets/jublawoma/images/people/leiter.jpg" alt="Scharleitung" side="width" rounded={true}/>
            </Flex>
            <Flex xl={{widthMax: "l", width: true}}>
                <Grid xl={{columns: 2, gap: 4}} m={{columns: 1}}>
                    <GridItem xl={{columns: 1}}>
                        <Flex xl={{height: true, direction: "column", justify: "center", gap: 2}}>
                            <Text type="h2">Unser Leitungsteam</Text>
                            <Text type="p">Das Leiterteam besteht aus jungen Erwachsenen im Alter von ca. 17 - 25
                                Jahren. Es trägt bei
                                allen Aktivitäten viel Verantwortung und leistet wertvolle Präventionsarbeit. Deshalb
                                legen Blauring &
                                Jungwacht grossen Wert auf eine nachhaltige und solide Aus- und Weiterbildung der
                                Leitenden. In
                                Zusammenarbeit mit Jugend + Sport bieten die Verbände kantonale und schweizerische
                                Ausbildungskurse an, die
                                den Jugendlichen die Grundlagen für sinnvolle Kinder- und Jugendarbeit
                                vermitteln.</Text>
                            <Text type="p">Jedes Leitungsteam ist Teil der Struktur Blauring & Jungwacht und erhält
                                daher von mehreren
                                Seiten Unterstützung. Zum einen wird jede Schar von einem Coach und häufig von einem
                                Präses begleitet. Als
                                Menschen mit mehr Lebenserfahrung und entsprechender Ausbildung, sind sie eine Stütze
                                für das oftmals jüngere
                                Leitungsteam. Zum anderen wird die Schar als Mitglied des Kantonalvereins von der
                                ehrenamtlichen
                                Kantonsleitung betreut und profitiert dadurch von Ausbildungsangeboten, Hilfsmitteln,
                                Beratung etc.</Text>
                        </Flex>
                    </GridItem>
                    <GridItem xl={{columns: 1}}>
                        <Grid xl={{columns: 2, gap: 2}}>
                            <GridItem xl={{columns: 1}}>
                                <Image src="/assets/jublawoma/images/people/jonas.jpeg" alt="Jonas Birrer" ratio="1:1"
                                       side="width" rounded={true}/>
                            </GridItem>
                            <GridItem xl={{columns: 1}}>
                                <Flex xl={{height: true, direction: "column", justify: "center"}}>
                                    <Text type="h3">Jonas Birrer</Text>
                                    <Text type="p">Ameisihuufe, Suppegsichter</Text>
                                </Flex>
                            </GridItem>
                            <GridItem xl={{columns: 1}}>
                                <Image src="/assets/jublawoma/images/people/marith.jpeg" alt="Jonas Birrer" ratio="1:1"
                                       side="width" rounded={true}/>
                            </GridItem>
                            <GridItem xl={{columns: 1}}>
                                <Flex xl={{height: true, direction: "column", justify: "center"}}>
                                    <Text type="h3">Marith Hangartner</Text>
                                    <Text type="p">Ameisihuufe, Suppegsichter</Text>
                                </Flex>
                            </GridItem>
                            <GridItem xl={{columns: 1}}>
                                <Image src="/assets/jublawoma/images/people/julian.jpeg" alt="Jonas Birrer" ratio="1:1"
                                       side="width" rounded={true}/>
                            </GridItem>
                            <GridItem xl={{columns: 1}}>
                                <Flex xl={{height: true, direction: "column", justify: "center"}}>
                                    <Text type="h3">Julian "Ju" Foletti</Text>
                                    <Text type="p">Ameisihuufe, Suppegsichter</Text>
                                </Flex>
                            </GridItem>
                        </Grid>
                    </GridItem>
                </Grid>
            </Flex>
            <Flex xl={{widthMax: "l", width: true}}>
                <Grid xl={{columns: 3, gap: 2}} m={{columns: 1}}>
                    <GridItem xl={{columns: 1}}>
                        <Flex xl={{height: true, direction: "column", justify: "center", gap: 2}}>
                            <Text type="h2">Scharleitung</Text>
                            <Flex xl={{direction: "column", gap: 1}} m={{direction: "row"}} s={{direction: "column"}}>
                                <Text type="p">Raphael Schreiber</Text>
                                <Text type="p">Lynn Horlacher</Text>
                                <Text type="p">Saskia Schmid</Text>
                                <Text type="p">Fabian Stahel</Text>
                            </Flex>
                        </Flex>
                    </GridItem>
                    <GridItem xl={{columns: 2}} m={{columns: 1}}>
                        <Image src="/assets/jublawoma/images/people/scharleitung.jpg" alt="Scharleitung" side="width"
                               rounded={true}/>
                    </GridItem>
                </Grid>
            </Flex>
            <Flex xl={{widthMax: "m", width: true}}>
                <Grid xl={{columns: 3, gap: 4}} s={{columns: 1, gap: 2}}>
                    <GridItem xl={{columns: 1}}>
                        <Image src="/assets/jublawoma/images/logos/jubla.jpg" alt="Jubla Schweiz" side="width"
                               rounded={false}/>
                    </GridItem>
                    <GridItem xl={{columns: 2}} s={{columns: 1}}>
                        <Flex xl={{height: true, direction: "column", justify: "center", gap: 2}}>
                            <Text type="h2">Jubla Schweiz</Text>
                            <Text type="s">Jungwacht Blauring ist mit 31'000 Mitgliedern der grösste katholische Kinder-
                                und
                                Jugendverband der Schweiz. Ein vielfältiges Angebot lädt Kinder und Jugendliche ein,
                                Neues zu erleben und
                                ihre eigenen Fähigkeiten zu entdecken. Jungwacht Blauring ist offen für alle Kinder und
                                Jugendlichen -
                                unabhängig von Konfession, Fähigkeiten oder Kultur.</Text>
                        </Flex>
                    </GridItem>
                </Grid>
            </Flex>
            <Flex xl={{widthMax: "m", width: true}}>
                <Grid xl={{columns: 3, gap: 4}} s={{columns: 1, gap: 2}}>
                    <GridItem xl={{columns: 1}}>
                        <Image src="/assets/jublawoma/images/logos/aargau.svg" alt="Jubla Aargau" side="width"
                               rounded={false}/>
                    </GridItem>
                    <GridItem xl={{columns: 2}} s={{columns: 1}}>
                        <Flex xl={{height: true, direction: "column", justify: "center", gap: 2}}>
                            <Text type="h2">Jubla Aargau</Text>
                            <Text type="s">Das Leben in Jungwacht Blauring spielt sich vorwiegend in der Schar auf
                                Pfarreiebene ab. Die
                                Schar besteht aus Gruppen, in denen jeweils 6-12 Gleichaltrige von 1-3 Leiterinnen
                                und/oder Leitern
                                betreut werden. Der Kanton Aargau zählt im Moment 53 Scharen mit knapp 5'000
                                Mitgliedern.</Text>
                        </Flex>
                    </GridItem>
                </Grid>
            </Flex>
            <Flex xl={{widthMax: "m", width: true}}>
                <Grid xl={{columns: 3, gap: 4}} s={{columns: 1, gap: 2}}>
                    <GridItem xl={{columns: 1}}>
                        <Image src="/assets/jublawoma/images/logos/js.jpg" alt="Jugend und Sport" side="width"
                               rounded={false}/>
                    </GridItem>
                    <GridItem xl={{columns: 2}} s={{columns: 1}}>
                        <Flex xl={{height: true, direction: "column", justify: "center", gap: 2}}>
                            <Text type="h2">Jugend und Sport</Text>
                            <Text type="s">J+S fördert Kinder und Jugendliche durch wertvollen Sport. Das grösste
                                Sportförderprogramm der
                                Schweiz unterstützt Kurse und Lager finanziell, stellt Leihmaterial bereit und bietet
                                bedürfnisgerechte
                                Aus- und Weiterbildung. Qualität, Sicherheit und die Einhaltung ethischer Grundsätze
                                bilden dabei das
                                Fundament aller Aktivitäten und Angebote.</Text>
                        </Flex>
                    </GridItem>
                </Grid>
            </Flex>
        </Flex>
    )
}

export default JublawomaAbout
