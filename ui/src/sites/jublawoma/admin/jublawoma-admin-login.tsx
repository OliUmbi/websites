import Flex from "../../../components/flex/flex";
import Markdown from "../../../components/markdown/markdown";
import useApi from "../../../hooks/use-api";
import {Enviroment} from "../../../enums/shared/enviroment";
import useInput from "../../../hooks/use-input";
import InputFile from "../../../components/input/file/input-file";
import {useEffect} from "react";
import Button from "../../../components/button/button";
import Picture from "../../../components/picture/picture";
import {configuration} from "../../../services/configuration";
import {MarkdownItem} from "../../../interfaces/shared/markdown";
import {MessageResponse} from "../../../interfaces/shared/message";
import InputText from "../../../components/input/text/input-text";

const JublawomaAdminHome = () => {

  const authenticationCreate = useApi<MessageResponse>(Enviroment.JUBLAWOMA_ADMIN, "POST", "/authentication")

  const username = useInput<String>(true)
  const password = useInput<String>(true)

  const cancel = () => {}
  const login = () => {}

  return (
      <Flex xl={{direction: "column", align: "center", gap: 8}}>
        <Flex xl={{widthMax: "s", width: true, direction: "column", gap: 1}}>
          <InputText {...username} label="Username / E-Mail"/>
          <InputText {...password} label="Passwort" password={true}/>
          <Flex xl={{direction: "row", justify: "end", gap: 1}}>
            <Button onClick={cancel} highlight={false}>Abbrechen</Button>
            <Button onClick={login} highlight={true}>Anmelden</Button>
          </Flex>
        </Flex>
      </Flex>
  )
}

export default JublawomaAdminHome
