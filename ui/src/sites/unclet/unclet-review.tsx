import Flex from "../../components/flex/flex";
import Text from "../../components/text/text";
import IconButton from "../../components/icon/button/icon-button";
import {useState} from "react";
import InputText from "../../components/input/text/input-text";
import useInput from "../../hooks/use-input";
import Button from "../../components/button/button";
import useApi from "../../hooks/use-api";
import {MessageResponse} from "../../interfaces/shared/message";
import {Enviroment} from "../../enums/shared/enviroment";
import Error from "../../components/error/error";
import Loading from "../../components/loading/loading";

const UncletReview = () => {

  const reviewCreate = useApi<MessageResponse>(Enviroment.UNCLET, "POST", "/review")

  const [stars, setStars] = useState<number>(0)
  const name = useInput<string>(true)
  const description = useInput<string>(true)

  const valid = () => {
    return name.valid &&
        description.valid &&
        (stars > 0 && stars <= 5);
  }

  const clear = () => {
    setStars(0)
    name.setInternal("")
    description.setInternal("")
  }

  const save = () => {
    if (!valid()) {
      return
    }

    const payload = {
      body: {
        stars: stars,
        name: name.value,
        description: description.value
      }
    }

    reviewCreate.execute(payload)
  }

  return (
      <Flex xl={{direction: "column", align: "center"}}>
        <Flex xl={{widthMax: "s", width: true, direction: "column", gap: 4}}>
          <Flex xl={{direction: "column", gap: 1}}>
            <Text type="h1">Bewerten Sie mich!</Text>
            <Text type="p" primary={false}>Teilen Sie Ihre Erfahrungen mit mir – ob positiv oder kritisch, jede Rückmeldung hilft mir, noch besser auf die Wünsche meiner Gäste einzugehen.</Text>
            <Text type="p" primary={false}>Alle abgegebenen Bewertungen werden vor der Veröffentlichung geprüft, um sicherzustellen, dass sie angemessen sind und keine sensiblen Informationen enthalten. Nach der Freigabe erscheinen sie auf dieser Seite und geben zukünftigen Gästen einen ehrlichen Einblick in meine kulinarischen Leistungen.</Text>
            <Text type="p" primary={false}>Ich danke Ihnen herzlich für Ihr Feedback und freue mich auf Ihre Meinung!</Text>
          </Flex>
          <Flex xl={{direction: "column", gap: 1}}>
            <Text type="s">Anzahl Sterne</Text>
            <Flex xl={{direction: "row", gap: 1}}>
              <IconButton size={1.5} onClick={() => setStars(1)} highlight={stars > 0}>sparkles</IconButton>
              <IconButton size={1.5} onClick={() => setStars(2)} highlight={stars > 1}>sparkles</IconButton>
              <IconButton size={1.5} onClick={() => setStars(3)} highlight={stars > 2}>sparkles</IconButton>
              <IconButton size={1.5} onClick={() => setStars(4)} highlight={stars > 3}>sparkles</IconButton>
              <IconButton size={1.5} onClick={() => setStars(5)} highlight={stars > 4}>sparkles</IconButton>
            </Flex>
          </Flex>
          <InputText {...name} label="Name" placeholder="Thomas aus Mägenwil" characters={32}/>
          <InputText {...description} label="Beschreibung" placeholder="Erzählen Sie uns von ihrer Erfahrung"characters={256} rows={6}/>
          {
            reviewCreate.data ? <Text type="p">Ihre Bewertung wurde gespeichert, vielen Dank!</Text> : null
          }
          {
            reviewCreate.error ? <Error message="Ihre Bewertung konnte nicht gespeichert werden."/> : null
          }
          {
            reviewCreate.loading ? <Loading/> : null
          }
          <Flex xl={{justify: "end", gap: 1}}>
            <Button onClick={clear} highlight={false}>Verwerfen</Button>
            <Button onClick={save} highlight={true} disabled={!valid()}>Speichern</Button>
          </Flex>
        </Flex>
      </Flex>
  )
}

export default UncletReview
