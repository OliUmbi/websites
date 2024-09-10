import Section from "../../components/section/section";
import Text from "../../components/text/text";
import Flex from "../../components/flex/flex";
import Button from "../../components/button/button";
import {useNavigate} from "react-router-dom";

const JublawomaDonateThanks = () => {

  const navigate = useNavigate()

  return (
      <Flex xl={{height: true, direction: "column", justify: "center"}}>
        <Section width="m">
          <Flex xl={{direction: "column", gap: 2}}>
            <Flex xl={{direction: "column", gap: 0.5}}>
              <Text type="h3">Vielen herzlichen Dank!</Text>
              <Text type="p" primary={false}>Ihre Spende wurde empfangen.</Text>
            </Flex>
            <Button onClick={() => navigate("/spenden")} highlight={true}>Zurück zu den Spenden</Button>
          </Flex>
        </Section>
      </Flex>
  )
}

export default JublawomaDonateThanks
