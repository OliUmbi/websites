import Text from "../../components/text/text";
import Button from "../../components/button/button";
import IconButton from "../../components/icon/button/icon-button";
import Link from "../../components/link/link";
import Drawer from "../../components/drawer/drawer";
import {useState} from "react";
import Input from "../../components/input/input";

const AdminHome = () => {

  const [drawer, setDrawer] = useState<boolean>(false)
  const [input, setInput] = useState<string>("")
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  return (
      <>
        <Text type="h1" primary={true}>Admin</Text>
        <Text type="s" primary={true}>A oliUmbi production</Text>
        <Button onClick={() => setDrawer(!drawer)} highlight={true}>Test</Button>
        <IconButton onClick={() => setDrawer(!drawer)} highlight={false}>menu</IconButton>
        <Drawer open={drawer} setOpen={setDrawer} title="Test">
          <Text type="p" primary={true}>
            Lorem ipsum dolor sit amet <Link to="/aldfjs">external website</Link>, consectetur adipiscing elit.
            Phasellus volutpat enim in lobortis sollicitudin. Nullam porta nec dolor et aliquet. Aenean ultrices sem
            a pretium porttitor. Donec quis pellentesque tellus. Phasellus eu enim lacus. Nunc vel commodo augue. In
            porttitor erat eu massa molestie suscipit. Cras laoreet et lacus quis dictum. Duis vulputate mattis
            orci, sed hendrerit quam tempus eu. Vivamus velit urna, laoreet sit amet fringilla et, cursus eget
            massa. Donec quam nunc, vulputate eget sapien in, lobortis sagittis felis. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia curae; Aenean rhoncus rutrum lectus non bibendum.
          </Text>
        </Drawer>
        <Input value={input} setValue={setInput} type="text" label="Firstname" required={true} placeholder="Example example"
               message=""/>
        <Text type="p" primary={true}>
          Lorem ipsum dolor sit amet <Link to="/aldfjs">external website</Link>, consectetur adipiscing elit.
          Phasellus volutpat enim in lobortis sollicitudin. Nullam porta nec dolor et aliquet. Aenean ultrices sem
          a pretium porttitor. Donec quis pellentesque tellus. Phasellus eu enim lacus. Nunc vel commodo augue. In
          porttitor erat eu massa molestie suscipit. Cras laoreet et lacus quis dictum. Duis vulputate mattis
          orci, sed hendrerit quam tempus eu. Vivamus velit urna, laoreet sit amet fringilla et, cursus eget
          massa. Donec quam nunc, vulputate eget sapien in, lobortis sagittis felis. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia curae; Aenean rhoncus rutrum lectus non bibendum.
        </Text>
        <Text type="h2" primary={true}>Login</Text>
        <Input value={username} setValue={setUsername} type="text" label="Lastname" required={true} placeholder="oliumbi"
               message=""/>
        <Input value={password} setValue={setPassword} type="password" label="Password" required={true}
               placeholder="Password1234" message=""/>
        <div>
          <Button onClick={() => setDrawer(!drawer)} highlight={true}>Login</Button>
          <Button onClick={() => setDrawer(!drawer)} highlight={false}>Register</Button>
        </div>
        <Text type="p" primary={true}>
          Lorem ipsum dolor sit amet <Link to="/aldfjs">external website</Link>, consectetur adipiscing elit.
          Phasellus volutpat enim in lobortis sollicitudin. Nullam porta nec dolor et aliquet. Aenean ultrices sem
          a pretium porttitor. Donec quis pellentesque tellus. Phasellus eu enim lacus. Nunc vel commodo augue. In
          porttitor erat eu massa molestie suscipit. Cras laoreet et lacus quis dictum. Duis vulputate mattis
          orci, sed hendrerit quam tempus eu. Vivamus velit urna, laoreet sit amet fringilla et, cursus eget
          massa. Donec quam nunc, vulputate eget sapien in, lobortis sagittis felis. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia curae; Aenean rhoncus rutrum lectus non bibendum.
        </Text>

        <Text type="p" primary={false}>
          Lorem ipsum dolor sit amet <Link to="/aldfjs">external website</Link>, consectetur adipiscing elit.
          Phasellus volutpat enim in lobortis sollicitudin. Nullam porta nec dolor et aliquet. Aenean ultrices sem
          a pretium porttitor. Donec quis pellentesque tellus. Phasellus eu enim lacus. Nunc vel commodo augue. In
          porttitor erat eu massa molestie suscipit. Cras laoreet et lacus quis dictum. Duis vulputate mattis
          orci, sed hendrerit quam tempus eu. Vivamus velit urna, laoreet sit amet fringilla et, cursus eget
          massa. Donec quam nunc, vulputate eget sapien in, lobortis sagittis felis. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia curae; Aenean rhoncus rutrum lectus non bibendum.
        </Text>

        <Text type="p" primary={true}>
          Lorem ipsum dolor sit amet <Link to="/aldfjs">external website</Link>, consectetur adipiscing elit.
          Phasellus volutpat enim in lobortis sollicitudin. Nullam porta nec dolor et aliquet. Aenean ultrices sem
          a pretium porttitor. Donec quis pellentesque tellus. Phasellus eu enim lacus. Nunc vel commodo augue. In
          porttitor erat eu massa molestie suscipit. Cras laoreet et lacus quis dictum. Duis vulputate mattis
          orci, sed hendrerit quam tempus eu. Vivamus velit urna, laoreet sit amet fringilla et, cursus eget
          massa. Donec quam nunc, vulputate eget sapien in, lobortis sagittis felis. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia curae; Aenean rhoncus rutrum lectus non bibendum.
        </Text>
      </>
  )
}

export default AdminHome
