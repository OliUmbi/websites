import Grid from "../../components/grid/grid";
import GridItem from "../../components/grid/item/grid-item";
import Text from "../../components/text/text";
import Image from "../../components/image/image";
import Flex from "../../components/flex/flex";
import Anchor from "../../components/anchor/anchor";
import Icon from "../../components/icon/icon";

const JublawomaAbout = () => {

    const associates = [
        {
            name: "Jubla Schweiz",
            description: "Jungwacht Blauring ist mit 31'000 Mitgliedern der grösste katholische Kinder- und Jugendverband der Schweiz. Ein vielfältiges Angebot lädt Kinder und Jugendliche ein, Neues zu erleben und ihre eigenen Fähigkeiten zu entdecken. Jungwacht Blauring ist offen für alle Kinder und Jugendlichen - unabhängig von Konfession, Fähigkeiten oder Kultur.",
            link: "https://www.jubla.ch/",
            image: "/assets/jublawoma/images/logos/jubla.jpg"
        },
        {
            name: "Jubla Aargau",
            description: "Das Leben in Jungwacht Blauring spielt sich vorwiegend in der Schar auf Pfarreiebene ab. Die Schar besteht aus Gruppen, in denen jeweils 6-12 Gleichaltrige von 1-3 Leiterinnen und/oder Leitern betreut werden. Der Kanton Aargau zählt im Moment 53 Scharen mit knapp 5'000 Mitgliedern.",
            link: "https://www.jublaaargau.ch/",
            image: "/assets/jublawoma/images/logos/aargau.svg"
        },
        {
            name: "Jugend und Sport",
            description: "J+S fördert Kinder und Jugendliche durch wertvollen Sport. Das grösste Sportförderprogramm der Schweiz unterstützt Kurse und Lager finanziell, stellt Leihmaterial bereit und bietet bedürfnisgerechte Aus- und Weiterbildung. Qualität, Sicherheit und die Einhaltung ethischer Grundsätze bilden dabei das Fundament aller Aktivitäten und Angebote.",
            link: "https://www.jugendundsport.ch/de",
            image: "/assets/jublawoma/images/logos/js.jpg"
        },
        {
            name: "Gemeinde Mägenwil",
            description: "",
            link: "https://gemeinde-schweiz.ch/kanton-aargau/maegenwil/",
            image: "/assets/jublawoma/images/logos/maegenwil.png"
        },
        {
            name: "Gemeinde Wohlenschwil",
            description: "",
            link: "https://gemeinde-schweiz.ch/kanton-aargau/wohlenschwil/",
            image: "/assets/jublawoma/images/logos/wohlenschwil.webp"
        }
    ]

    return (
        <Flex xl={{direction: "column", align: "center", gap: 8}}>
            <Flex xl={{widthMax: "l", width: true}}>
                <Image src="/assets/jublawoma/images/people/leiter.jpg" alt="Scharleitung" side="width" rounded={true}/>
            </Flex>
            <Flex xl={{widthMax: "l", width: true}}>
                <Grid xl={{columns: 2, gap: 4}} m={{columns: 1}}>
                    <GridItem xl={{columns: 2}} m={{columns: 1}}>
                        <Text type="h2">Unser Leitungsteam</Text>
                    </GridItem>
                    <GridItem xl={{columns: 1}}>
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
                    </GridItem>
                    <GridItem xl={{columns: 1}}>
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
            <Flex xl={{widthMax: "l", width: true}}>
                <Grid xl={{columns: 2, gap: 4}} m={{columns: 1}}>
                    {
                        associates.map((associate) => (
                            <GridItem key={associate.name}>
                                <Grid xl={{columns: 4, gap: 2}}>
                                    <GridItem xl={{columns: 1}}>
                                        <Image src={associate.image} alt="Jugend und Sport" side="width"
                                               rounded={true}/>
                                    </GridItem>
                                    <GridItem xl={{columns: 3}}>
                                        <Flex xl={{direction: "column", gap: 1}}>
                                            <Text type="h3">{associate.name}</Text>
                                            <Text type="s" primary={false}>{associate.description}</Text>
                                            <Text type="s">
                                                <Flex xl={{direction: "row", align: "center", gap: 0.5}}>
                                                    <Anchor to={associate.link} external={true}>Zur Webseite</Anchor>
                                                    <Icon size={1}>external-link</Icon>
                                                </Flex>
                                            </Text>
                                        </Flex>
                                    </GridItem>
                                </Grid>
                            </GridItem>
                        ))
                    }
                </Grid>
            </Flex>
        </Flex>
    )
}

export default JublawomaAbout
