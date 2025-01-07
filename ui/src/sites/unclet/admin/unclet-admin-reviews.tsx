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
import Text from "../../../components/text/text";
import {date} from "../../../services/date";
import IconButton from "../../../components/icon/button/icon-button";
import {useNavigate} from "react-router-dom";
import {ReviewAllResponse} from "../../../interfaces/unclet/admin/review";
import {ReviewStatus} from "../../../enums/unclet/review";

const UncletAdminReviews = () => {

  const reviewAll = useApi<PaginationResponse<ReviewAllResponse[]>>(Enviroment.UNCLET_ADMIN, "GET", "/review")
  const reviewCreate = useApi<MessageResponse>(Enviroment.UNCLET_ADMIN, "POST", "/review")
  const pagination = usePagination(10)
  const navigate = useNavigate()

  useEffect(() => {
    load()
  }, [pagination.offset]);

  useEffect(() => {
    if (reviewCreate.data) {
      load()
    }
  }, [reviewCreate.data]);

  useEffect(() => {
    if (reviewAll.data) {
      pagination.setTotal(reviewAll.data.total)
    }
  }, [reviewAll.data]);

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

    reviewAll.execute(payload)
  }

  const create = () => {
    reviewCreate.execute()
  }

  return (
      <Flex xl={{direction: "column", align: "center"}}>
        <Flex xl={{widthMax: "l", width: true, direction: "column", gap: 4}}>
          {
            reviewAll.data ? (
                <>
                  <Flex xl={{direction: "row", align: "center", justify: "between", gap: 2}}>
                    <Button onClick={create} highlight={true}>Erstellen</Button>
                    <Pagination {...pagination}/>
                  </Flex>
                  {
                    reviewCreate.error ? <Error message="Bewertungen konnten nicht erstellt werden."/> : null
                  }
                  {
                    reviewCreate.loading ? <Loading/> : null
                  }
                  {
                    reviewAll.data.value.map((value, index) => (
                        <Flex xl={{direction: "row", align: "center", justify: "between", gap: 2}} key={index}>
                          <Flex xl={{direction: "row", align: "center", gap: 2}}>
                            <Text type="p">{ReviewStatus.translate(value.status)}</Text>
                            <Text type="p">{date.locale(value.date, "date")}</Text>
                            <Text type="p">{value.stars}</Text>
                            <Text type="p">{value.name}</Text>
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
            reviewAll.error ? <Error message="Bewertungen konnten nicht geladen werden."/> : null
          }
          {
            reviewAll.loading ? <Loading/> : null
          }
        </Flex>
      </Flex>
  )
}

export default UncletAdminReviews
