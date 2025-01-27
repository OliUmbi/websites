import useApi from "../../hooks/use-api";
import {PaginationResponse} from "../../interfaces/shared/pagination";
import {ArticleAllResponse} from "../../interfaces/oliumbi/article";
import {Enviroment} from "../../enums/shared/enviroment";
import {useEffect, useState} from "react";
import Flex from "../../components/flex/flex";
import Text from "../../components/text/text";
import Error from "../../components/error/error";
import Loading from "../../components/loading/loading";
import Picture from "../../components/picture/picture";
import {configuration} from "../../services/configuration";
import {date} from "../../services/date";
import Grid from "../../components/grid/grid";
import GridItem from "../../components/grid/item/grid-item";
import {Link, useNavigate} from "react-router-dom";
import IconButton from "../../components/icon/button/icon-button";
import Intersect from "../../components/intersect/intersect";
import useInput from "../../hooks/use-input";
import InputText from "../../components/input/text/input-text";
import Button from "../../components/button/button";
import {MessageResponse} from "../../interfaces/shared/message";

const OliumbiHome = () => {
  const articleAll = useApi<PaginationResponse<ArticleAllResponse[]>>(Enviroment.OLIUMBI, "GET", "/article")
  const notifyCreate = useApi<MessageResponse>(Enviroment.OLIUMBI, "POST", "/notify")

  const navigate = useNavigate()
  const size = 5
  const [offset, setOffset] = useState(0)
  const [articles, setArticles] = useState<Map<string, ArticleAllResponse>>(new Map())
  const email = useInput<string>(false)

  useEffect(() => {
    load()
  }, []);

  useEffect(() => {
    load()
  }, [offset]);

  useEffect(() => {
    if (articleAll.data) {
      articleAll.data.value.forEach(value => articles.set(value.id, value))

      setArticles(new Map(articles))
    }
  }, [articleAll.data]);

  const load = () => {
    const payload = {
      params: [
        {
          key: "start",
          value: offset
        },
        {
          key: "size",
          value: size
        }
      ]
    }

    articleAll.execute(payload)
  }

  const next = () => {
    if (articleAll.data && articleAll.data.total <= offset) {
      return
    }

    setOffset(offset + size)
  }

  const notify = () => {
    if (!email.value) {
      return
    }

    const payload = {
      body: {
        email: email.value
      }
    }

    notifyCreate.execute(payload)
  }

  return (
      <Flex xl={{direction: "column", align: "center", gap: 8}}>
        <Flex xl={{widthMax: "l", width: true, direction: "column", gap: 6}}>
          <Text type="h1">Kein Reiseblog, aber fast.</Text>
          <Flex xl={{direction: "column", gap: 1}}>
            <Text type="p">Ich habe bereits zu vielen versprochen, Bilder und Updates aus Kalifornien zu schicken.</Text>
            <Text type="p">Deshalb mache ich einen "fast" Reiseblog, in welchem ich gelegentlich kleine Einblicke in meinen Alltag, spontane Erlebnisse und Bilder hochladen werde.</Text>
            <Text type="p">Beiträge werde ich hochladen, wenn ich Zeit und Lust dafür habe.</Text>
          </Flex>
          <Grid xl={{columns: 2, gap: 2}} s={{columns: 1}}>
            <GridItem xl={{columns: 1}}>
              <Flex xl={{direction: "column", height: true, justify: "center", gap: 1}}>
                <Text type="h3">Nichts verpassen?</Text>
                <Text type="s">Hinterlasse deine E-Mail, um Benachrichtigungen zu neuen Beiträgen zu erhalten.</Text>
              </Flex>
            </GridItem>
            <GridItem xl={{columns: 1}}>
              <Flex xl={{direction: "column", align: "end", gap: 1}}>
                <InputText {...email} label="E-Mail" placeholder="root@oliumbi.ch" characters={64}/>
                <Button onClick={notify} highlight={false} disabled={!email.value}>Benachrichtigen</Button>
                {
                  notifyCreate.data ? <Text type="p">E-Mail wurde gespeichert.</Text> : null
                }
                {
                  notifyCreate.error ? <Error message="E-Mail konnte nicht gespeichert werden."/> : null
                }
                {
                  notifyCreate.loading ? <Loading/> : null
                }
              </Flex>
            </GridItem>
          </Grid>
        </Flex>
        <Flex xl={{widthMax: "l", width: true, direction: "column"}}>
          {
            articleAll.data && articles ? (
                <>
                  <Flex xl={{direction: "column", gap: 6}}>
                    {
                      [...articles.values()].map((value, index) => (
                          <Link to={"/article/" + value.id} key={index}>
                            <Grid xl={{columns: 2, gap: 4}} s={{columns: 1, gap: 2}}>
                              <GridItem xl={{columns: 1, rows: 1}}>
                                <Picture api={configuration.api.oliumbi} id={value.imageId} alt={value.title} side="width"
                                         rounded={true} ratio="1:1"/>
                              </GridItem>
                              <GridItem xl={{columns: 1, rows: 1}}>
                                <Flex xl={{direction: "column", height: true, justify: "between", gap: 2}}>
                                  <Flex xl={{direction: "column", gap: 2}}>
                                    <Text type="h2">{value.title}</Text>
                                    <Flex xl={{direction: "row", gap: 1, wrap: "always"}}>
                                      <Text type="s" mono={true}>{date.locale(value.published, "date")}</Text>
                                      <Text type="s" mono={true}>{value.author}</Text>
                                    </Flex>
                                    <Text type="p">{value.description}</Text>
                                  </Flex>
                                  <Flex xl={{direction: "column", align: "end"}}>
                                    <IconButton size={2} onClick={() => navigate("/article/" + value.id)}
                                                highlight={false}>arrow-up-right</IconButton>
                                  </Flex>
                                </Flex>
                              </GridItem>
                            </Grid>
                          </Link>
                      ))
                    }
                  </Flex>
                  <Intersect onIntersect={next}/>
                </>
            ) : null
          }
          {
            articleAll.error ? <Error message="Beiträge konnten nicht geladen werden."/> : null
          }
          {
            articleAll.loading ? <Loading/> : null
          }
        </Flex>
      </Flex>
  )
}

export default OliumbiHome
