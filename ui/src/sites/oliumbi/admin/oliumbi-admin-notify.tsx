import Flex from "../../../components/flex/flex";
import useApi from "../../../hooks/use-api";
import {Enviroment} from "../../../enums/shared/enviroment";
import Error from "../../../components/error/error";
import Loading from "../../../components/loading/loading";
import {useEffect, useState} from "react";
import usePagination from "../../../hooks/use-pagination";
import Pagination from "../../../components/pagination/pagination";
import {MessageResponse} from "../../../interfaces/shared/message";
import {PaginationResponse} from "../../../interfaces/shared/pagination";
import Text from "../../../components/text/text";
import IconButton from "../../../components/icon/button/icon-button";
import {NotifyAllResponse} from "../../../interfaces/oliumbi/admin/notify";
import Button from "../../../components/button/button";

const OliumbiAdminNotify = () => {

  const notifyAll = useApi<PaginationResponse<NotifyAllResponse[]>>(Enviroment.OLIUMBI_ADMIN, "GET", "/notify")
  const notifyDelete = useApi<MessageResponse>(Enviroment.OLIUMBI_ADMIN, "DELETE", "/notify/")

  const pagination = usePagination(10)
  const [confirm, setConfirm] = useState<boolean>(false)

  useEffect(() => {
    load()
  }, [pagination.offset]);

  useEffect(() => {
    if (notifyAll.data) {
      pagination.setTotal(notifyAll.data.total)
    }
  }, [notifyAll.data]);

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

    notifyAll.execute(payload)
  }

  useEffect(() => {
    if (notifyDelete.data) {
      load()
    }
  }, [notifyDelete.data])

  const remove = (id: string) => {
    const payload = {
      path: id
    }

    notifyDelete.execute(payload)
  }

  return (
      <Flex xl={{direction: "column", align: "center"}}>
        <Flex xl={{widthMax: "l", width: true, direction: "column", gap: 4}}>
          {
            notifyAll.data ? (
                <>
                  <Flex xl={{direction: "row", align: "center", justify: "between", gap: 2}}>
                    <Pagination {...pagination}/>
                  </Flex>
                  {
                    notifyAll.data.value.map((value, index) => (
                        <Flex xl={{direction: "row", align: "center", justify: "between", gap: 2}} key={index}>
                          <Flex xl={{direction: "row", align: "center", gap: 2}}>
                            <Text type="h3">{value.email}</Text>
                          </Flex>
                          <Flex xl={{direction: "row", align: "center", gap: 2}}>
                            {
                              notifyDelete.error ? <Error message={notifyDelete.error}/> : null
                            }
                            {
                              notifyDelete.loading ? <Loading/> : null
                            }
                            {
                              confirm ? <Button onClick={() => remove(value.id)} highlight={false}>Delete</Button> : null
                            }
                            <IconButton size={1.5} onClick={() => setConfirm(!confirm)} highlight={false}>{confirm ? "minus" : "trash-2"}</IconButton>
                          </Flex>
                        </Flex>
                    ))
                  }
                </>
            ) : null
          }
          {
            notifyAll.error ? <Error message={notifyAll.error}/> : null
          }
          {
            notifyAll.loading ? <Loading/> : null
          }
        </Flex>
      </Flex>
  )
}

export default OliumbiAdminNotify
