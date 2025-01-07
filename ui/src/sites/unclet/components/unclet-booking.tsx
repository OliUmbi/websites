import GridItem from "../../../components/grid/item/grid-item";
import Flex from "../../../components/flex/flex";
import Text from "../../../components/text/text";
import InputText from "../../../components/input/text/input-text";
import InputDate from "../../../components/input/date/input-date";
import InputNumber from "../../../components/input/number/input-number";
import Error from "../../../components/error/error";
import Loading from "../../../components/loading/loading";
import Button from "../../../components/button/button";
import Grid from "../../../components/grid/grid";
import useApi from "../../../hooks/use-api";
import {MessageResponse} from "../../../interfaces/shared/message";
import {Enviroment} from "../../../enums/shared/enviroment";
import useInput from "../../../hooks/use-input";

const UncletBooking = () => {

  const bookingCreate = useApi<MessageResponse>(Enviroment.UNCLET, "POST", "/booking")

  const name = useInput<string>(true)
  const email = useInput<string>(true)
  const date = useInput<Date>(true)
  const location = useInput<string>(true)
  const people = useInput<number>(true)
  const note = useInput<string>(false)

  const valid = () => {
    return name.valid &&
        email.valid &&
        date.valid &&
        location.valid &&
        people.valid &&
        note.valid
  }

  const clear = () => {
    name.setInternal("")
    email.setInternal("")
    date.setInternal("")
    location.setInternal("")
    people.setInternal("")
    note.setInternal("")
  }

  const save = () => {
    if (!valid()) {
      return
    }

    const payload = {
      body: {
        name: name.value,
        email: email.value,
        date: date.value,
        location: location.value,
        people: people.value,
        note: note.value
      }
    }

    bookingCreate.execute(payload)
  }

  return (
      <Grid xl={{columns: 3, gap: 2}} m={{columns: 1}}>
        <GridItem xl={{columns: 1}}>
          <Flex xl={{direction: "column", gap: 2}}>
            <Text type="h3">Buchungsanfrage</Text>
            <Text type="s">Senden Sie mir Ihre Buchungsanfrage in wenigen Schritten – ob Privatkoch, Catering oder Kurs. Geben Sie einfach die wichtigsten Infos an, und ich melde mich persönlich bei Ihnen, um alle Details zu besprechen.</Text>
            <Text type="s">Danke für Ihr Vertrauen – ich freue mich darauf, Ihre Veranstaltung unvergesslich zu machen!</Text>
          </Flex>
        </GridItem>
        <GridItem xl={{columns: 2}} m={{columns: 1}}>
          <Flex xl={{direction: "column", gap: 2}}>
            <Flex xl={{direction: "column", gap: 1}}>
              <InputText {...name} label="Name" placeholder="Thomas Habegger" characters={32}/>
              <InputText {...email} label="E-Mail" placeholder="info@uncle-t.ch" characters={64}/>
              <InputDate {...date} label="Datum" placeholder="TT.MM.JJJJ" future={true} time={false}/>
              <InputText {...location} label="Ort" placeholder="Mägenwil" characters={64}/>
              <InputNumber {...people} label="Anzahl Personen" placeholder="2" min={1} step={1}/>
              <InputText {...note} label="Bemerkung" placeholder="Was sollten wir sonst noch wissen?" characters={1024} rows={6}/>
            </Flex>
            {
              bookingCreate.data ? <Text type="p">Ihre Buchungsanfrage wurde gespeichert, vielen Dank!</Text> : null
            }
            {
              bookingCreate.error ? <Error message="Ihre Buchungsanfrage konnte nicht gespeichert werden."/> : null
            }
            {
              bookingCreate.loading ? <Loading/> : null
            }
            <Flex xl={{justify: "end", gap: 1}}>
              <Button onClick={clear} highlight={false}>Verwerfen</Button>
              <Button onClick={save} highlight={true} disabled={!valid()}>Speichern</Button>
            </Flex>
          </Flex>
        </GridItem>
      </Grid>
  )
}

export default UncletBooking
