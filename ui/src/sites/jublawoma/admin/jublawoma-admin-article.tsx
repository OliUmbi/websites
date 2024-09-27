import Flex from "../../../components/flex/flex";
import useApi from "../../../hooks/use-api";
import {Enviroment} from "../../../enums/shared/enviroment";
import useInput from "../../../hooks/use-input";
import {useEffect, useState} from "react";
import Button from "../../../components/button/button";
import {configuration} from "../../../services/configuration";
import {ArticleByIdResponse} from "../../../interfaces/jublawoma/admin/article";
import {useParams} from "react-router-dom";
import Error from "../../../components/error/error";
import Loading from "../../../components/loading/loading";
import InputText from "../../../components/input/text/input-text";
import InputDate from "../../../components/input/date/input-date";
import {date} from "../../../services/date";
import InputOptions from "../../../components/input/options/input-options";
import IconButton from "../../../components/icon/button/icon-button";
import Grid from "../../../components/grid/grid";
import GridItem from "../../../components/grid/item/grid-item";
import MarkdownEdit from "../../../components/markdown/edit/markdown-edit";

const JublawomaAdminArticle = () => {

  const {id} = useParams()

  const articleById = useApi<ArticleByIdResponse>(Enviroment.JUBLAWOMA_ADMIN, "GET", "/article/" + id)

  const [confirm, setConfirm] = useState<boolean>(false)

  const title = useInput<string>(true)
  const description = useInput<string>(true)
  const author = useInput<string>(true)
  const published = useInput<Date>(true)
  const visible = useInput(true)
  const [markdown, setMarkdown] = useState<string>("[]")

  useEffect(() => {
    articleById.execute()
  }, []);

  useEffect(() => {
    if (articleById.data) {
      title.setInternal(articleById.data.title)
      description.setInternal(articleById.data.description)
      author.setInternal(articleById.data.author)
      published.setInternal(date.locale(articleById.data.published, "time"))
      visible.setInternal(articleById.data.visible ? "Ja" : "Nein")
      setMarkdown(articleById.data.markdown)
    }
  }, [articleById.data]);

  const remove = () => {

  }

  const save = () => {
    console.log(markdown)
  }

  return (
      <Flex xl={{direction: "column", align: "center", gap: 4}}>
        {
          articleById.data ? (
              <>
                <Flex xl={{widthMax: "xl", width: true, direction: "column"}}>
                  <Grid xl={{columns: 2, gap: 1}} m={{columns: 1}}>
                    <GridItem xl={{columns: 2}} m={{columns: 1}}>
                      <InputText {...title} label="Titel" placeholder="Titel" characters={32}/>
                    </GridItem>
                    <InputText {...description} label="Beschreibung" placeholder="Beschreibung" characters={128} rows={4}/>
                    <InputOptions {...visible} label="Öffentlich" options={["Ja", "Nein"]}/>
                    <InputDate {...published} label="Datum" placeholder="TT.MM.JJJJ"/>
                    <InputText {...author} label="Autor" placeholder="Autor" characters={32}/>
                  </Grid>
                </Flex>
                <Flex xl={{widthMax: "m", width: true, direction: "column"}}>
                  <MarkdownEdit markdown={markdown} setMarkdown={setMarkdown} api={configuration.api.jublawomaAdmin}/>
                </Flex>
                <Flex xl={{widthMax: "xl", width: true, direction: "row", align: "center", justify: "end", gap: 1}}>
                  {
                    confirm ? (
                        <Button onClick={remove} highlight={false}>Löschen</Button>
                    ) : null
                  }
                  <IconButton size={1.5} onClick={() => setConfirm(!confirm)} highlight={false}>trash-2</IconButton>
                  <Button onClick={save} highlight={true}>Speichern</Button>
                </Flex>
              </>
          ) : null
        }
        {
          articleById.error ? (
              <Flex xl={{widthMax: "xl", width: true, direction: "column"}}>
                <Error message={articleById.error}/>
              </Flex>
          ) : null
        }
        {
          articleById.loading ? (
              <Flex xl={{widthMax: "xl", width: true, direction: "column"}}>
                <Loading/>
              </Flex>
          ) : null
        }
      </Flex>
  )
}

export default JublawomaAdminArticle
