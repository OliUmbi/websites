import {useNavigate} from "react-router-dom";
import Flex from "../../../components/flex/flex";
import Button from "../../../components/button/button";
import Text from "../../../components/text/text"

const OliumbiAdminNotFound = () => {

  const navigate = useNavigate()

  return (
      <Flex xl={{height: true, direction: "column", align: "center"}}>
      <Flex xl={{widthMax: "m", width: true, height: true, direction: "column", justify: "center", gap: 2}}>
        <Text type="h2">Not found.</Text>
        <Flex xl={{direction: "row", gap: 1}}>
          <Button onClick={() => navigate(-1)} highlight={false}>Back</Button>
          <Button onClick={() => navigate("/")} highlight={true}>Start</Button>
        </Flex>
      </Flex>
      </Flex>
  )
}

export default OliumbiAdminNotFound
