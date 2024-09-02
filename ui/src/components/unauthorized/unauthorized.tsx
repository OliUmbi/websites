import Text from "../text/text";
import Flex from "../flex/flex";

const Unauthorized = () => {
  // todo review

  return (
      <Flex xl={{width: true, height: true, direction: "column"}}>
        <Text type="p" mono={true}>Unauthorized</Text>
        <Text type="h3" primary={true}>You do not have the permission to access this resource.</Text>
        <Text type="p">Try again later.</Text>
      </Flex>
  )
}

export default Unauthorized
