import Flex from "../../components/flex/flex";
import {useParams} from "react-router-dom";
import Picture from "../../components/picture/picture";
import {configuration} from "../../services/configuration";
import Text from "../../components/text/text";
import {date} from "../../services/date";
import Markdown from "../../components/markdown/markdown";

const JublawomaArticle = () => {

  const {id} = useParams()

  let data = {
    id: "asdf",
    title: "Die nächsten Buchseiten",
    description: "Mittwoch Hela 2023; Am Morgen wurden wir für das Morgenturnen geweckt, bei dem wir uns eingedehnt und auf die Wanderung vorbereitet haben.",
    date: new Date(),
    author: "Julian und Caithlyn",
    imageId: "fbeca530-3850-43e7-834e-3e50a9987ac2",
    markdown: "[{\"type\":\"heading-1\",\"value\":\"Titel\",\"children\":[]},{\"type\":\"heading-2\",\"value\":\"Titel 2\",\"children\":[]},{\"type\":\"heading-3\",\"value\":\"Titel 3\",\"children\":[]},{\"type\":\"paragraph\",\"value\":\"Text\",\"children\":[]},{\"type\":\"button\",\"value\":\"Mehr erfahren|https://jublawoma.ch\",\"children\":[]},{\"type\":\"image\",\"value\":\"fbeca530-3850-43e7-834e-3e50a9987ac2\",\"children\":[]},{\"type\":\"grid\",\"value\":3,\"children\":[{\"type\":\"heading-1\",\"value\":\"Titel\",\"children\":[]},{\"type\":\"heading-2\",\"value\":\"Titel 2\",\"children\":[]},{\"type\":\"heading-3\",\"value\":\"Titel 3\",\"children\":[]},{\"type\":\"flex\",\"value\":null,\"children\":[{\"type\":\"paragraph\",\"value\":\"Text\",\"children\":[]},{\"type\":\"image\",\"value\":\"fbeca530-3850-43e7-834e-3e50a9987ac2\",\"children\":[]}]},{\"type\":\"button\",\"value\":\"Mehr erfahren|https://jublawoma.ch\",\"children\":[]},{\"type\":\"image\",\"value\":\"fbeca530-3850-43e7-834e-3e50a9987ac2\",\"children\":[]},{\"type\":\"image\",\"value\":\"fbeca530-3850-43e7-834e-3e50a9987ac2\",\"children\":[]},{\"type\":\"image\",\"value\":\"fbeca530-3850-43e7-834e-3e50a9987ac2\",\"children\":[]}]}]"
  }

  return (
      <Flex xl={{direction: "column", align: "center", gap: 8}}>
        <Flex xl={{widthMax: "xl", width: true}}>
          <Picture api={configuration.api.jublawoma} id={data.imageId} alt={data.title} side="width" rounded={true}/>
        </Flex>
        <Flex xl={{widthMax: "l", width: true, direction: "column", gap: 2}}>
          <Text type="p" primary={false}>Veröffentlicht am {date.locale(data.date, "date")}</Text>
          <Text type="h1" primary={true}>{data.title}</Text>
          <Text type="p" primary={false}>Erstellt von {data.author}</Text>
          <Text type="p" primary={true}>{data.description}</Text>
        </Flex>
        <Flex xl={{widthMax: "l", width: true, direction: "column", gap: 2}}>
          <Markdown markdown={JSON.parse(data.markdown)} api={configuration.api.jublawoma}/>
        </Flex>
      </Flex>
  )
}

export default JublawomaArticle
