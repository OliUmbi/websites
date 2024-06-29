import Text from "../text/text";
import Column from "../column/column";

const Unauthorized = () => {
  // todo review

  return (
      <div className="unauthorized">
        <Column>
          <Text type="p" primary={false}>Unauthorized</Text>
          <Text type="h3" primary={true}>You do not have the permission to access this resource.</Text>
          <Text type="p" primary={false}>Try again later.</Text>
        </Column>
      </div>
  )
}

export default Unauthorized
