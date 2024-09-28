import Flex from "../../../components/flex/flex";
import Button from "../../../components/button/button";
import useApi from "../../../hooks/use-api";
import {Enviroment} from "../../../enums/shared/enviroment";
import Error from "../../../components/error/error";
import Loading from "../../../components/loading/loading";
import {useEffect} from "react";
import usePagination from "../../../hooks/use-pagination";
import Pagination from "../../../components/pagination/pagination";
import {MessageResponse} from "../../../interfaces/shared/message";
import {PaginationResponse} from "../../../interfaces/shared/pagination";
import {ArticleAllResponse} from "../../../interfaces/jublawoma/admin/article";
import Text from "../../../components/text/text";
import {date} from "../../../services/date";
import IconButton from "../../../components/icon/button/icon-button";
import Icon from "../../../components/icon/icon";
import {useNavigate} from "react-router-dom";

const JublawomaAdminArticles = () => {

  const articleAll = useApi<PaginationResponse<ArticleAllResponse[]>>(Enviroment.JUBLAWOMA_ADMIN, "GET", "/article")
  const articleCreate = useApi<MessageResponse>(Enviroment.JUBLAWOMA_ADMIN, "POST", "/article")
  const pagination = usePagination(10)
  const navigate = useNavigate()

  useEffect(() => {
    load()
  }, [pagination.offset]);

  useEffect(() => {
    if (articleCreate.data) {
      load()
    }
  }, [articleCreate.data]);

  useEffect(() => {
    if (articleAll.data) {
      pagination.setTotal(articleAll.data.total)
    }
  }, [articleAll.data]);

  const load = () => {
    const payload = {
      params: [
        {
          key: "start",
          value: pagination.offset
        },
        {
          key: "size",
          value: pagination.size
        }
      ]
    }

    articleAll.execute(payload)
  }

  const create = () => {
    articleCreate.execute()
  }

  return (
      <Flex xl={{direction: "column", align: "center"}}>
        <Flex xl={{widthMax: "l", width: true, direction: "column", gap: 4}}>
          {
            articleAll.data ? (
                <>
                  <Flex xl={{direction: "row", align: "center", justify: "between", gap: 2}}>
                    <Button onClick={create} highlight={true}>Erstellen</Button>
                    <Pagination {...pagination}/>
                  </Flex>
                  {
                    articleAll.data.value.map((value, index) => (
                        <Flex xl={{direction: "row", align: "center", justify: "between", gap: 2}} key={index}>
                          <Flex xl={{direction: "row", align: "center", gap: 2}}>
                            <Icon size={1.5}>{value.visible ? "eye" : "eye-off"}</Icon>
                            <Flex xl={{direction: "column"}} key={index}>
                              <Text type="h3">{value.title}</Text>
                              <Text type="s" primary={false}>{date.locale(value.published, "date")} - {value.author}</Text>
                            </Flex>
                          </Flex>
                          <Flex xl={{direction: "row", align: "center", gap: 1}}>
                            <IconButton size={1.5} onClick={() => navigate(value.id)} highlight={false}>pencil-line</IconButton>
                          </Flex>
                        </Flex>
                    ))
                  }
                </>
            ) : null
          }
          {
            articleAll.error ? <Error message={articleAll.error}/> : null
          }
          {
            articleAll.loading ? <Loading/> : null
          }
        </Flex>
      </Flex>
  )
}

export default JublawomaAdminArticles
