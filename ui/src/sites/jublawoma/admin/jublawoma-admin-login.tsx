import Flex from "../../../components/flex/flex";
import useApi from "../../../hooks/use-api";
import {Enviroment} from "../../../enums/shared/enviroment";
import useInput from "../../../hooks/use-input";
import Button from "../../../components/button/button";
import InputText from "../../../components/input/text/input-text";
import {AccountSessionCreateResponse} from "../../../interfaces/shared/account";
import {useNavigate} from "react-router-dom";
import Error from "../../../components/error/error";
import Loading from "../../../components/loading/loading";
import {useEffect} from "react";
import useLocal from "../../../hooks/use-local";

const JublawomaAdminHome = () => {

  const session = useLocal<AccountSessionCreateResponse>("session")
  const navigate = useNavigate()
  const authenticationCreate = useApi<AccountSessionCreateResponse>(Enviroment.JUBLAWOMA_ADMIN, "POST", "/account/session")

  const name = useInput<string>(false)
  const password = useInput<string>(false)

  const cancel = () => {
    name.setInternal("")
    password.setInternal("")
    navigate(-1)
  }

  const login = () => {
    const payload = {
      body: {
        name: name.value,
        password: password.value
      }
    }

    authenticationCreate.execute(payload)
  }

  useEffect(() => {
    if (authenticationCreate.data) {
      session.setValue(authenticationCreate.data)
      navigate("/")
    }
  }, [authenticationCreate.data]);

  return (
      <Flex xl={{direction: "column", align: "center", gap: 8}}>
        <Flex xl={{widthMax: "s", width: true, direction: "column", gap: 1}}>
          <InputText {...name} label="Name" placeholder="Name"/>
          <InputText {...password} label="Passwort" placeholder="Passwort" password={true}/>
          <Flex xl={{direction: "row", justify: "end", gap: 1}}>
            <Button onClick={cancel} highlight={false}>Abbrechen</Button>
            <Button onClick={login} highlight={true}>Anmelden</Button>
          </Flex>
          {
            authenticationCreate.error ? <Error message={authenticationCreate.error}/> : null
          }
          {
            authenticationCreate.loading ? <Loading/> : null
          }
        </Flex>
      </Flex>
  )
}

export default JublawomaAdminHome
