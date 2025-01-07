import Flex from "../../../components/flex/flex";
import useApi from "../../../hooks/use-api";
import {Enviroment} from "../../../enums/shared/enviroment";
import useInput from "../../../hooks/use-input";
import {useEffect} from "react";
import Button from "../../../components/button/button";
import {date as dateService} from "../../../services/date"
import {useParams} from "react-router-dom";
import Error from "../../../components/error/error";
import Loading from "../../../components/loading/loading";
import InputText from "../../../components/input/text/input-text";
import InputDate from "../../../components/input/date/input-date";
import InputOptions from "../../../components/input/options/input-options";
import Grid from "../../../components/grid/grid";
import Text from "../../../components/text/text";
import {MessageResponse} from "../../../interfaces/shared/message";
import {ReviewByIdResponse} from "../../../interfaces/unclet/admin/review";
import {ReviewStatus} from "../../../enums/unclet/review";
import GridItem from "../../../components/grid/item/grid-item";
import InputNumber from "../../../components/input/number/input-number";

const UncletAdminReview = () => {

  const {id} = useParams()

  const reviewById = useApi<ReviewByIdResponse>(Enviroment.UNCLET_ADMIN, "GET", "/review/" + id)
  const reviewUpdate = useApi<MessageResponse>(Enviroment.UNCLET_ADMIN, "PUT", "/review/" + id)

  const status = useInput<string[]>(true)
  const stars = useInput<number>(true)
  const name = useInput<string>(true)
  const description = useInput<string>(true)
  const date = useInput<Date>(true)

  useEffect(() => {
    reviewById.execute()
  }, [])

  useEffect(() => {
    if (reviewById.data) {
      status.setInternal(ReviewStatus.translate(reviewById.data.status))
      stars.setInternal(reviewById.data.stars.toString())
      name.setInternal(reviewById.data.name)
      description.setInternal(reviewById.data.description)
      date.setInternal(dateService.locale(reviewById.data.date, "date"))
    }
  }, [reviewById.data])

  const save = () => {
    if (!status.valid || !stars.valid || !name.valid || !description.valid || !date.valid) {
      return
    }

    const payload = {
      body: {
        status: ReviewStatus.parse(status.value[0]),
        stars: stars.value,
        name: name.value,
        description: description.value,
        date: dateService.iso(date.value)
      }
    }

    reviewUpdate.execute(payload)
  }

  return (
      <Flex xl={{direction: "column", align: "center"}}>
        <Flex xl={{widthMax: "m", width: true, direction: "column", gap: 4}}>
          {
            reviewById.data ? (
                <>
                  <InputOptions {...status} label="Status" options={[
                    ReviewStatus.translate(ReviewStatus.OPEN),
                    ReviewStatus.translate(ReviewStatus.PUBLIC),
                    ReviewStatus.translate(ReviewStatus.REJECTED)]}/>
                  <Grid xl={{columns: 2, gap: 2}} s={{columns: 1}}>
                    <GridItem xl={{columns: 1}}>
                      <InputNumber {...stars} label="Sterne" placeholder="Sterne" min={1} max={5} step={1}/>
                    </GridItem>
                    <GridItem xl={{columns: 1}}>
                      <InputDate {...date} label="Datum" placeholder="TT.MM.JJJJ"/>
                    </GridItem>
                    <GridItem xl={{columns: 2}} s={{columns: 1}}>
                      <InputText {...name} label="Name" placeholder="Thomas von Mägenwil" characters={32}/>
                    </GridItem>
                    <GridItem xl={{columns: 2}} s={{columns: 1}}>
                      <InputText {...description} label="Beschreibung" placeholder="Beschriebung" characters={256} rows={6}/>
                    </GridItem>
                  </Grid>
                  {
                    reviewUpdate.data ? <Text type="p">Änderung wurde gespeichert.</Text> : null
                  }
                  {
                    reviewUpdate.error ? <Error message="Änderung konnte nicht gespeichert werden."/> : null
                  }
                  {
                    reviewUpdate.loading ? <Loading/> : null
                  }
                  <Flex xl={{direction: "row", justify: "end"}}>
                    <Button onClick={save} highlight={true}>Speichern</Button>
                  </Flex>
                </>
            ) : null
          }
          {
            reviewById.error ? <Error message="Bewertungen konnten nicht geladen werden."/> : null
          }
          {
            reviewById.loading ? <Loading/> : null
          }
        </Flex>
      </Flex>
  )
}

export default UncletAdminReview
