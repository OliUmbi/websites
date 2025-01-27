import Flex from "../../../components/flex/flex";
import useApi from "../../../hooks/use-api";
import {Enviroment} from "../../../enums/shared/enviroment";
import useInput from "../../../hooks/use-input";
import {useEffect, useState} from "react";
import Button from "../../../components/button/button";
import {configuration} from "../../../services/configuration";
import {ArticleByIdResponse} from "../../../interfaces/oliumbi/admin/article";
import {useNavigate, useParams} from "react-router-dom";
import Error from "../../../components/error/error";
import Loading from "../../../components/loading/loading";
import InputText from "../../../components/input/text/input-text";
import InputDate from "../../../components/input/date/input-date";
import {date} from "../../../services/date";
import InputOptions from "../../../components/input/options/input-options";
import IconButton from "../../../components/icon/button/icon-button";
import MarkdownEdit from "../../../components/markdown/edit/markdown-edit";
import InputPicture from "../../../components/input/picture/input-picture";
import Text from "../../../components/text/text";
import {MarkdownItem} from "../../../interfaces/shared/markdown";
import {MessageResponse} from "../../../interfaces/shared/message";
import Grid from "../../../components/grid/grid";
import GridItem from "../../../components/grid/item/grid-item";

const OliumbiAdminArticle = () => {

  const {id} = useParams()
  const navigate = useNavigate()

  const articleById = useApi<ArticleByIdResponse>(Enviroment.OLIUMBI_ADMIN, "GET", "/article/" + id)
  const articleNotify = useApi<MessageResponse>(Enviroment.OLIUMBI_ADMIN, "POST", "/article/" + id + "/notify")
  const articleUpdate = useApi<MessageResponse>(Enviroment.OLIUMBI_ADMIN, "PUT", "/article/" + id)
  const articleDelete = useApi<MessageResponse>(Enviroment.OLIUMBI_ADMIN, "DELETE", "/article/" + id)

  const [confirmNotify, setConfirmNotify] = useState<boolean>(false)
  const [confirmRemove, setConfirmRemove] = useState<boolean>(false)

  const image = useInput<string>(false)
  const title = useInput<string>(true)
  const description = useInput<string>(true)
  const author = useInput<string>(true)
  const published = useInput<Date>(true)
  const visible = useInput<string[]>(true)
  const [markdown, setMarkdown] = useState<MarkdownItem[]>([])

  useEffect(() => {
    articleById.execute()
  }, [])

  useEffect(() => {
    if (articleById.data) {
      title.setInternal(articleById.data.title)
      description.setInternal(articleById.data.description)
      author.setInternal(articleById.data.author)
      published.setInternal(date.locale(articleById.data.published, "date"))
      visible.setInternal(articleById.data.visible ? "Yes" : "No")
      image.setValue(articleById.data.imageId)
      setMarkdown(JSON.parse(articleById.data.markdown))
    }
  }, [articleById.data])

  const notify = () => {
    articleNotify.execute()
  }

  useEffect(() => {
    if (articleDelete.data) {
      navigate("/article")
    }
  }, [articleDelete.data])

  const remove = () => {
    articleDelete.execute()
  }

  const save = () => {
    if (!image.valid || !title.valid || !description.valid || !author.valid || !published.valid || !visible.valid) {
      return
    }

    if (!visible.value) {
      return
    }

    const payload = {
      body: {
        imageId: image.value,
        title: title.value,
        description: description.value,
        author: author.value,
        published: date.iso(published.value),
        markdown: JSON.stringify(markdown),
        visible: visible.value[0] === "Yes",
      }
    }

    articleUpdate.execute(payload)
  }

  return (
      <Flex xl={{direction: "column", align: "center", gap: 4}}>
        {
          articleById.data ? (
              <>
                <Flex xl={{widthMax: "xl", width: true, direction: "column", gap: 1}}>
                  <InputPicture {...image} label="Image" api={configuration.api.oliumbiAdmin}
                                enviroment={Enviroment.OLIUMBI_ADMIN}/>
                  <InputText {...title} label="Title" placeholder="Title" characters={32}/>
                  <InputText {...description} label="Description" placeholder="Description" characters={128} rows={3}/>
                  <Grid xl={{columns: 2, gap: 1}} s={{columns: 1}}>
                    <GridItem xl={{columns: 1}}>
                      <InputDate {...published} label="Date" placeholder="TT.MM.JJJJ"/>
                    </GridItem>
                    <GridItem xl={{columns: 1, rows: 2}} s={{rows: 1}}>
                      <InputOptions {...visible} label="Visible" options={["Yes", "No"]}/>
                    </GridItem>
                    <GridItem xl={{columns: 1}}>
                      <InputText {...author} label="Author" placeholder="Author" characters={32}/>
                    </GridItem>
                  </Grid>
                </Flex>
                <Flex xl={{widthMax: "m", width: true, direction: "column"}}>
                  <MarkdownEdit markdown={markdown} setMarkdown={setMarkdown} api={configuration.api.oliumbiAdmin}
                                enviroment={Enviroment.OLIUMBI_ADMIN}/>
                </Flex>
                <Flex xl={{widthMax: "xl", width: true, direction: "row", align: "center", justify: "end", gap: 1}}>
                  {
                    articleUpdate.data ? <Text type="p">Saved.</Text> : null
                  }
                  {
                    articleNotify.data ? <Text type="p">Notified.</Text> : null
                  }
                  {
                    confirmRemove ? <Button onClick={remove} highlight={false}>Delete</Button> : null
                  }
                  <IconButton size={1.5} onClick={() => setConfirmRemove(!confirmRemove)}
                              highlight={false}>{confirmRemove ? "minus" : "trash-2"}</IconButton>
                  {
                    confirmNotify ? <Button onClick={notify} highlight={false}>Notify</Button> : null
                  }
                  <IconButton size={1.5} onClick={() => setConfirmNotify(!confirmNotify)}
                              highlight={false}>{confirmNotify ? "minus" : "megaphone"}</IconButton>
                  <Button onClick={save} highlight={true}>Save</Button>
                </Flex>
                {
                  articleUpdate.error ? <Error message={articleUpdate.error}/> : null
                }
                {
                  articleUpdate.loading ? <Loading/> : null
                }
                {
                  articleDelete.error ? <Error message={articleDelete.error}/> : null
                }
                {
                  articleDelete.loading ? <Loading/> : null
                }
                {
                  articleNotify.error ? <Error message={articleNotify.error}/> : null
                }
                {
                  articleNotify.loading ? <Loading/> : null
                }
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

export default OliumbiAdminArticle
