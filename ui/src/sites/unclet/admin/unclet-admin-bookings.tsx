import Flex from "../../../components/flex/flex";
import useApi from "../../../hooks/use-api";
import {Enviroment} from "../../../enums/shared/enviroment";
import Error from "../../../components/error/error";
import Loading from "../../../components/loading/loading";
import {useEffect} from "react";
import usePagination from "../../../hooks/use-pagination";
import Pagination from "../../../components/pagination/pagination";
import {PaginationResponse} from "../../../interfaces/shared/pagination";
import Text from "../../../components/text/text";
import {date} from "../../../services/date";
import IconButton from "../../../components/icon/button/icon-button";
import {useNavigate} from "react-router-dom";
import {BookingAllResponse} from "../../../interfaces/unclet/admin/booking";
import {BookingStatus} from "../../../enums/unclet/booking";

const UncletAdminBookings = () => {

  const articleAll = useApi<PaginationResponse<BookingAllResponse[]>>(Enviroment.UNCLET_ADMIN, "GET", "/booking")
  const pagination = usePagination(10)
  const navigate = useNavigate()

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
        <Flex xl={{widthMax: "l", width: true, direction: "column", gap: 4}}>
          {
            articleAll.data ? (
                <>
                  <Flex xl={{direction: "row", justify: "end"}}>
                    <Pagination {...pagination}/>
                  </Flex>
                  {
                    articleAll.data.value.map((value, index) => (
                        <Flex xl={{direction: "row", align: "center", justify: "between", gap: 2}} key={index}>
                          <Flex xl={{direction: "row", align: "center", gap: 2, wrap: "always"}}>
                            <Text type="p">{BookingStatus.translate(value.status)}</Text>
                            <Text type="p" primary={false}>{date.locale(value.date, "date")}</Text>
                            <Text type="p" primary={false}>{value.name}</Text>
                          </Flex>
                          <Flex xl={{direction: "row", align: "center", gap: 1}}>
                            <IconButton size={1.5} onClick={() => navigate(value.id)}
                                        highlight={false}>pencil-line</IconButton>
                          </Flex>
                        </Flex>
                    ))
                  }
                </>
            ) : null
          }
          {
            articleAll.error ? <Error message="Buchungsanfragen konnten nicht geladen werden."/> : null
          }
          {
            articleAll.loading ? <Loading/> : null
          }
        </Flex>
      </Flex>
  )
}

export default UncletAdminBookings
