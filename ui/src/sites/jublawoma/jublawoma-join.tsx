import Section from "../../components/section/section";
import Text from "../../components/text/text";
import useLocal from "../../hooks/use-local";
import {Account} from "../../interfaces/account";
import {Permission} from "../../enums/permission";

const JublawomaJoin = () => {

  const [account, setTest] = useLocal<Account>("account")

  setTest({
    name: "asdf",
    token: "",
    expires: "",
    account_id: "",
    permissions: [Permission.OLIUMBI_ADMIN]
  })

  return (
      <>
        <Section width="xl">
          <Text type="h1" primary={true}>Beitreten</Text>
          <Text type="h1" primary={true}>{account?.name}</Text>
        </Section>
      </>
  )
}

export default JublawomaJoin
