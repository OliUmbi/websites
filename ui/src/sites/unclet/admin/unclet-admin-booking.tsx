import Flex from "../../../components/flex/flex";
import useApi from "../../../hooks/use-api";
import {Enviroment} from "../../../enums/shared/enviroment";
import {useEffect, useState} from "react";
import Button from "../../../components/button/button";
import {useParams} from "react-router-dom";
import Error from "../../../components/error/error";
import Loading from "../../../components/loading/loading";
import Grid from "../../../components/grid/grid";
import Text from "../../../components/text/text";
import {BookingStatus} from "../../../enums/unclet/booking";
import {BookingByIdResponse} from "../../../interfaces/unclet/admin/booking";
import {MessageResponse} from "../../../interfaces/shared/message";
import {date} from "../../../services/date";
import GridItem from "../../../components/grid/item/grid-item";
import InputOptions from "../../../components/input/options/input-options";
import {ReviewStatus} from "../../../enums/unclet/review";
import useInput from "../../../hooks/use-input";

const UncletAdminBooking = () => {

  const {id} = useParams()

  const bookingById = useApi<BookingByIdResponse>(Enviroment.UNCLET_ADMIN, "GET", "/booking/" + id)
  const bookingUpdate = useApi<MessageResponse>(Enviroment.UNCLET_ADMIN, "PUT", "/booking/" + id)

  const status = useInput<string[]>(true)

  useEffect(() => {
    bookingById.execute()
  }, [])

  useEffect(() => {
    if (bookingById.data) {
      status.setInternal(BookingStatus.translate(bookingById.data.status))
    }
  }, [bookingById.data])

  const save = () => {
    if (!status.valid) {
      return
    }

    const payload = {
      body: {
        status: BookingStatus.parse(status.value[0])
      }
    }

    bookingUpdate.execute(payload)
  }

  return (
      <Flex xl={{direction: "column", align: "center"}}>
        <Flex xl={{widthMax: "m", width: true, direction: "column", gap: 4}}>
          {
            bookingById.data ? (
                <>
                  <InputOptions {...status} label="Status" options={[
                    BookingStatus.translate(BookingStatus.OPEN),
                    BookingStatus.translate(BookingStatus.IN_PROGRESS),
                    BookingStatus.translate(BookingStatus.DONE),
                    BookingStatus.translate(BookingStatus.REJECTED)]}/>
                  <Grid xl={{columns: 2, gap: 2}} s={{columns: 1}}>
                    <GridItem xl={{columns: 1}}>
                      <Flex xl={{direction: "column"}}>
                        <Text type="s" primary={false}>Name</Text>
                        <Text type="p">{bookingById.data.name}</Text>
                      </Flex>
                    </GridItem>
                    <GridItem xl={{columns: 1}}>
                      <Flex xl={{direction: "column"}}>
                        <Text type="s" primary={false}>E-Mail</Text>
                        <Text type="p">{bookingById.data.email}</Text>
                      </Flex>
                    </GridItem>
                    <GridItem xl={{columns: 1}}>
                      <Flex xl={{direction: "column"}}>
                        <Text type="s" primary={false}>Datum</Text>
                        <Text type="p">{date.locale(bookingById.data.date, "date")}</Text>
                      </Flex>
                    </GridItem>
                    <GridItem xl={{columns: 1}}>
                      <Flex xl={{direction: "column"}}>
                        <Text type="s" primary={false}>Ort</Text>
                        <Text type="p">{bookingById.data.location}</Text>
                      </Flex>
                    </GridItem>
                    <GridItem xl={{columns: 1}}>
                      <Flex xl={{direction: "column"}}>
                        <Text type="s" primary={false}>Anzahl Personen</Text>
                        <Text type="p">{bookingById.data.people}</Text>
                      </Flex>
                    </GridItem>
                    <GridItem xl={{columns: 1}}>
                      <Flex xl={{direction: "column"}}>
                        <Text type="s" primary={false}>Bemerkung</Text>
                        <Text type="p">{bookingById.data.note}</Text>
                      </Flex>
                    </GridItem>
                  </Grid>
                  {
                    bookingUpdate.data ? <Text type="p">Änderung wurde gespeichert.</Text> : null
                  }
                  {
                    bookingUpdate.error ? <Error message="Änderung konnte nicht gespeichert werden."/> : null
                  }
                  {
                    bookingUpdate.loading ? <Loading/> : null
                  }
                  <Flex xl={{direction: "row", justify: "end"}}>
                    <Button onClick={save} highlight={true}>Speichern</Button>
                  </Flex>
                </>
            ) : null
          }
          {
            bookingById.error ? <Error message="Buchungsanfrage konnten nicht geladen werden."/> : null
          }
          {
            bookingById.loading ? <Loading/> : null
          }
        </Flex>
      </Flex>
  )
}

export default UncletAdminBooking
