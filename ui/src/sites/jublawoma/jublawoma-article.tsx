import Flex from "../../components/flex/flex";
import {useParams} from "react-router-dom";
import Picture from "../../components/picture/picture";
import {configuration} from "../../services/configuration";
import Text from "../../components/text/text";
import {date} from "../../services/date";
import Markdown from "../../components/markdown/markdown";
import useApi from "../../hooks/use-api";
import {ArticleByIdResponse} from "../../interfaces/jublawoma/article";
import {Enviroment} from "../../enums/shared/enviroment";
import {useEffect} from "react";
import Loading from "../../components/loading/loading";
import Error from "../../components/error/error";

const JublawomaArticle = () => {

    const {id} = useParams()

    const articleById = useApi<ArticleByIdResponse>(Enviroment.JUBLAWOMA, "GET", "/article/" + id)

    useEffect(() => {
        articleById.execute()
    }, []);

    return (
        <Flex xl={{direction: "column", align: "center", gap: 8}}>
            {
                articleById.data ? (
                    <>
                        <Flex xl={{widthMax: "l", width: true}}>
                            <Picture api={configuration.api.jublawoma} id={articleById.data.imageId}
                                     alt={articleById.data.title} side="width" rounded={true} ratio="16:9"/>
                        </Flex>
                        <Flex xl={{widthMax: "l", width: true, direction: "column", gap: 2}}>
                            <Text type="p" primary={false}>Veröffentlicht
                                am {date.locale(articleById.data.published, "date")}</Text>
                            <Text type="h1" primary={true}>{articleById.data.title}</Text>
                            <Text type="p" primary={false}>Erstellt von {articleById.data.author}</Text>
                            <Text type="p" primary={true}>{articleById.data.description}</Text>
                        </Flex>
                        <Flex xl={{widthMax: "l", width: true, direction: "column", gap: 2}}>
                            <Markdown markdown={JSON.parse(articleById.data.markdown)}
                                      api={configuration.api.jublawoma}/>
                        </Flex>
                    </>
                ) : null
            }
            <Flex xl={{widthMax: "l", width: true, direction: "column", gap: 2}}>
                {
                    articleById.error ? <Error message={articleById.error}/> : null
                }
                {
                    articleById.loading ? <Loading/> : null
                }
            </Flex>
        </Flex>
    )
}

export default JublawomaArticle
