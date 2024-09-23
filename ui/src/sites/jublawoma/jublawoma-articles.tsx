import Flex from "../../components/flex/flex";
import Grid from "../../components/grid/grid";
import {Link} from "react-router-dom";
import Picture from "../../components/picture/picture";
import {configuration} from "../../services/configuration";
import Text from "../../components/text/text";
import {date} from "../../services/date";
import Button from "../../components/button/button";

const JublawomaArticles = () => {

  let data = [
    {
      id: "asdf",
      title: "Auf der Suche nach den nächsten Buchseiten",
      description: "Mittwoch Hela 2023; Am Morgen wurden wir für das Morgenturnen geweckt, bei dem wir uns eingedehnt und auf die Wanderung vorbereitet haben.",
      date: new Date(),
      author: "Julian und Caithlyn",
      imageId: "fbeca530-3850-43e7-834e-3e50a9987ac2"
    },
    {
      id: "asdf",
      title: "Auf der Suche nach den nächsten Buchseiten",
      description: "Mittwoch Hela 2023; Am Morgen wurden wir für das Morgenturnen geweckt, bei dem wir uns eingedehnt und auf die Wanderung vorbereitet haben.",
      date: new Date(),
      author: "Julian und Caithlyn",
      imageId: "fbeca530-3850-43e7-834e-3e50a9987ac2"
    },
    {
      id: "asdf",
      title: "Auf der Suche nach den nächsten Buchseiten",
      description: "Mittwoch Hela 2023; Am Morgen wurden wir für das Morgenturnen geweckt, bei dem wir uns eingedehnt und auf die Wanderung vorbereitet haben.",
      date: new Date(),
      author: "Julian und Caithlyn",
      imageId: "fbeca530-3850-43e7-834e-3e50a9987ac2"
    }
  ]

  return (
      <Flex xl={{direction: "column", align: "center"}}>
        <Flex xl={{widthMax: "xl", width: true}}>
          <Grid xl={{columns: 2, gap: 4}} m={{columns: 1}}>
            {
              data.map((value, index) => (
                  <Link to={value.id} key={index}>
                    <Flex xl={{direction: "column", gap: 1}}>
                      <Picture api={configuration.api.jublawoma} id={value.imageId} alt={value.title} side="width" rounded={true}/>
                      <Flex xl={{direction: "row", justify: "between", gap: 1}}>
                        <Text type="s" primary={false} mono={true}>{date.locale(value.date, "date")}</Text>
                        <Text type="s" primary={false} mono={true}>{value.author}</Text>
                      </Flex>
                      <Text type="h3" primary={true}>{value.title}</Text>
                      <Text type="p" primary={false}>{value.description}</Text>
                      <Flex xl={{direction: "row", justify: "end"}}>
                        <Button onClick={() => {}} highlight={true}>Lesen</Button>
                      </Flex>
                    </Flex>
                  </Link>
              ))
            }
          </Grid>
        </Flex>
      </Flex>
  )
}

export default JublawomaArticles
