import Text from "../../components/text/text";
import Flex from "../../components/flex/flex";
import Button from "../../components/button/button";
import {useNavigate} from "react-router-dom";

const UncletNotFound = () => {

  const navigate = useNavigate()

  return (
      <Flex xl={{height: true, direction: "column", align: "center"}}>
        <Flex xl={{widthMax: "m", width: true, height: true, direction: "column", justify: "center", gap: 2}}>
          <Text type="h2">Seite nicht gefunden.</Text>
          <Flex xl={{direction: "row", gap: 1}}>
            <Button onClick={() => navigate(-1)} highlight={false}>Zurück</Button>
            <Button onClick={() => navigate("/")} highlight={true}>Zur Startseite</Button>
          </Flex>
        </Flex>
      </Flex>
  )
}

export default UncletNotFound
