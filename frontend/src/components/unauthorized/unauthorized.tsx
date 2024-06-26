import Text from "../text/text";
import Column from "../column/column";

const Unauthorized = () => {
  return (
      <div className="unauthorized">
        <Column gap="0" justify={false}>
          <Text type="p" primary={false}>Unauthorized</Text>
          <Text type="h3" primary={true}>You do not have the permission to access this resource.</Text>
          <Text type="p" primary={false}>Try again later.</Text>
        </Column>
      </div>
  )
}

export default Unauthorized
