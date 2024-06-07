import Text from "../../components/base/text/text";
import Button from "../../components/base/button/button";
import IconButton from "../../components/base/icon/button/icon-button";

const AdminHome = () => {

  return (
      <>
        <Text type="h1" highlight={false} mono={false}>Admin</Text>
        <Text type="s" highlight={false} mono={true}>A oliUmbi production</Text>
        <Button highlight={true} onClick={() => {}}>Test</Button>
        <IconButton onClick={() => {}} highlight={true}>add</IconButton>
      </>
  )
}

export default AdminHome
