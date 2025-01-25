import {useNavigate, useParams} from "react-router-dom";
import useApi from "../../hooks/use-api";
import {ArticleByIdResponse} from "../../interfaces/oliumbi/article";
import {Enviroment} from "../../enums/shared/enviroment";
import {useEffect} from "react";
import Flex from "../../components/flex/flex";
import Picture from "../../components/picture/picture";
import {configuration} from "../../services/configuration";
import Text from "../../components/text/text";
import {date} from "../../services/date";
import Error from "../../components/error/error";
import Loading from "../../components/loading/loading";
import Markdown from "../../components/markdown/markdown";
import IconButton from "../../components/icon/button/icon-button";

const OliumbiArticle = () => {

  const {id} = useParams()

  const articleById = useApi<ArticleByIdResponse>(Enviroment.OLIUMBI, "GET", "/article/" + id)
  const navigate = useNavigate()

  useEffect(() => {
    articleById.execute()
  }, []);

  return (
      <Flex xl={{direction: "column", align: "center"}}>
        <Flex xl={{widthMax: "m", width: true, direction: "column", gap: 8}}>
          {
            articleById.data ?
                <>
                  <Flex xl={{direction: "column", gap: 2}}>
                    <Flex xl={{direction: "row", align: "center", gap: 1, wrap: "always"}}>
                      <IconButton size={1} onClick={() => navigate("/")} highlight={false}>arrow-up-left</IconButton>
                      <Text type="s" mono={true}>Alle Beiträge</Text>
                    </Flex>
                    <Picture api={configuration.api.oliumbi} id={articleById.data.imageId} alt={articleById.data.title} side="width" rounded={true}/>
                  </Flex>
                  <Flex xl={{direction: "column", gap: 2}}>
                    <Flex xl={{direction: "row", gap: 1, wrap: "always"}}>
                      <Text type="s" mono={true}>{date.locale(articleById.data.published, "date")}</Text>
                      <Text type="s" mono={true}>{articleById.data.author}</Text>
                    </Flex>
                    <Text type="h2">{articleById.data.title}</Text>
                    <Text type="p">{articleById.data.description}</Text>
                  </Flex>
                  <Flex xl={{direction: "column", gap: 2}}>
                    <Markdown markdown={JSON.parse(articleById.data.markdown)} api={configuration.api.oliumbi}/>
                  </Flex>
                </> : null
          }
          {
            articleById.error ? <Error message="Beiträge konnten nicht geladen werden."/> : null
          }
          {
            articleById.loading ? <Loading/> : null
          }
        </Flex>
      </Flex>
  )
}

export default OliumbiArticle
