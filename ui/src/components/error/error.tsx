import Flex from "../flex/flex";
import Text from "../text/text";

export interface Props {
  message: string
}

const Error = (props: Props) => {

  return (
      <Flex xl={{direction: "column"}}>
        <Text type="p" primary={false}>Fehler</Text>
        <Text type="h3">{props.message}</Text>
        <Text type="s" primary={false}>Versuchen Sie es später noch einmal.</Text>
      </Flex>
  )
}

export default Error

