import Flex from "../../components/flex/flex";
import Grid from "../../components/grid/grid";
import {Link} from "react-router-dom";
import Picture from "../../components/picture/picture";
import {configuration} from "../../services/configuration";
import Text from "../../components/text/text";
import {date} from "../../services/date";
import Button from "../../components/button/button";
import useApi from "../../hooks/use-api";
import {ArticleAllResponse} from "../../interfaces/jublawoma/article";
import {Enviroment} from "../../enums/shared/enviroment";
import {useEffect} from "react";
import Error from "../../components/error/error";
import Loading from "../../components/loading/loading";
import Pagination from "../../components/pagination/pagination";
import {PaginationResponse} from "../../interfaces/shared/pagination";
import usePagination from "../../hooks/use-pagination";

const JublawomaArticles = () => {

  const articleAll = useApi<PaginationResponse<ArticleAllResponse[]>>(Enviroment.JUBLAWOMA, "GET", "/article")
  const pagination = usePagination(9);

  useEffect(() => {
    load()
  }, [pagination.offset]);

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

  return (
      <Flex xl={{direction: "column", align: "center"}}>
        <Flex xl={{widthMax: "xl", width: true, direction: "column", gap: 4}}>
          {
            articleAll.data ? (
                <>
                  <Grid xl={{columns: 2, gap: 4}} m={{columns: 1}}>
                    {
                      articleAll.data.value.map((value, index) => (
                          <Link to={value.id} key={index}>
                            <Flex xl={{direction: "column", gap: 1}}>
                              <Picture api={configuration.api.jublawoma} id={value.imageId} alt={value.title} side="width"
                                       rounded={true} ratio="16:9"/>
                              <Flex xl={{direction: "row", justify: "between", gap: 1}}>
                                <Text type="s" primary={false} mono={true}>{date.locale(value.published, "date")}</Text>
                                <Text type="s" primary={false} mono={true}>{value.author}</Text>
                              </Flex>
                              <Text type="h3" primary={true}>{value.title}</Text>
                              <Text type="p" primary={false}>{value.description}</Text>
                              <Flex xl={{direction: "row", justify: "end"}}>
                                <Button onClick={() => {
                                }} highlight={true}>Lesen</Button>
                              </Flex>
                            </Flex>
                          </Link>
                      ))
                    }
                  </Grid>
                  <Pagination {...pagination}/>
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

export default JublawomaArticles
