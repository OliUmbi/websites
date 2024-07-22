import {useState} from "react";
import Button from "../../../components/button/button";
import IconButton from "../../../components/icon/button/icon-button";
import Drawer from "../../../components/drawer/drawer";
import Anchor from "../../../components/anchor/anchor";
import Input from "../../../components/input/input";
import Text from "../../../components/text/text";
import Grid from "../../../components/grid/grid";
import GridItem from "../../../components/grid/item/grid-item";
import useLanguage from "../../../hooks/use-lanugage";
import Loading from "../../../components/loading/loading";
import Breadcrumbs from "../../../components/breadcrumbs/breadcrumbs";
import Column from "../../../components/column/column";
import Icon from "../../../components/icon/icon";
import Row from "../../../components/row/row";
import Flex from "../../../components/flex/flex";
import column from "../../../components/column/column";
import InputText from "../../../components/input/text/input-text";
import InputNumber from "../../../components/input/number/input-number";

const OliumbiAdminHome = () => {

  const translation = useLanguage()

  const [drawer, setDrawer] = useState<boolean>(false)
  const [input, setInput] = useState<string>("")
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const [test, setTest] = useState<string>("")
  const [test2, setTest2] = useState<number>(0)

  return (
      <>
        <Grid gap={2}>
          <GridItem xl={4} m={8}>
            <div style={{width: "100%", height: "10rem", background: "lightgrey", display: "block"}}></div>
          </GridItem>
          <GridItem xl={2} m={4} xs={8}>
            <div style={{width: "100%", height: "10rem", background: "lightgrey", display: "block"}}></div>
          </GridItem>
          <GridItem xl={2} m={4} xs={8}>
            <div style={{width: "100%", height: "10rem", background: "lightgrey", display: "block"}}></div>
          </GridItem>
          <GridItem xl={3} m={8}>
            <div style={{width: "100%", height: "10rem", background: "lightgrey", display: "block"}}></div>
          </GridItem>
          <GridItem xl={3} m={6} xs={8}>
            <div style={{width: "100%", height: "10rem", background: "lightgrey", display: "block"}}></div>
          </GridItem>
          <GridItem xl={2} m={2} xs={8}>
            <div style={{width: "100%", height: "10rem", background: "lightgrey", display: "block"}}></div>
          </GridItem>
          <GridItem xl={1} m={1} xs={8}>
            <div style={{width: "100%", height: "10rem", background: "lightgrey", display: "block"}}></div>
          </GridItem>
          <GridItem xl={4} m={7} xs={8}>
            <div style={{width: "100%", height: "10rem", background: "lightgrey", display: "block"}}></div>
          </GridItem>
          <GridItem xl={3} m={4} xs={8}>
            <div style={{width: "100%", height: "10rem", background: "lightgrey", display: "block"}}></div>
          </GridItem>
        </Grid>

        <InputText value={test} setValue={setTest} error={""} label="Test" required={true} disabled={false} placeholder={"This is the placeholder"} characters={100} hidden={false} rows={1}/>
        <InputNumber value={test2} setValue={setTest2} error="" label="Test 2" required={true} placeholder="xxx" min={-100} max={100} step={10}/>

        <Breadcrumbs/>

        <Column>
          <Icon>close</Icon>
          <IconButton onClick={() => {}} highlight={true}>close</IconButton>
          <Button onClick={() => {}} highlight={true}>Test</Button>
        </Column>
        <Row gap={1}>
          <Button onClick={() => {}} highlight={true}>Generate</Button>
          <Button onClick={() => {}} highlight={false}>Delete</Button>
          <IconButton onClick={() => {}} highlight={false}>open_in_new</IconButton>
        </Row>

        <Flex xl={{direction: "column", gap: 2}}>
          <Button onClick={() => {}} highlight={true}>Generate</Button>
          <Button onClick={() => {}} highlight={true}>Delete</Button>
          <IconButton onClick={() => {}} highlight={true}>open_in_new</IconButton>
          <Text type="p" primary={true} mono={false}>
            Lorem ipsum dolor sit amet <Anchor to="/aldfjs">external website</Anchor>, consectetur adipiscing elit.
            Phasellus volutpat enim in lobortis sollicitudin. Nullam porta nec dolor et aliquet. Aenean ultrices sem
            a pretium porttitor. Donec quis pellentesque tellus. Phasellus eu enim lacus. Nunc vel commodo augue. In
            porttitor erat eu massa molestie suscipit. Cras laoreet et lacus quis dictum. Duis vulputate mattis
            orci, sed hendrerit quam tempus eu. Vivamus velit urna, laoreet sit amet fringilla et, cursus eget
            massa. Donec quam nunc, vulputate eget sapien in, lobortis sagittis felis. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia curae; Aenean rhoncus rutrum lectus non bibendum.
          </Text>
        </Flex>

        <Loading/>

        <Text type="h1" primary={true} mono={false}>{translation("test")}</Text>
        <Text type="h1" primary={true} mono={false}>Admin</Text>
        <Text type="s" primary={true} mono={false}>A oliUmbi production</Text>
        <Button onClick={() => setDrawer(true)} highlight={true}>Test</Button>
        <IconButton onClick={() => setDrawer(!drawer)} highlight={false}>menu</IconButton>
        <Drawer open={drawer} setOpen={setDrawer} title="Test">
          <Text type="p" primary={true} mono={false}>
            Lorem ipsum dolor sit amet <Anchor to="/aldfjs">external website</Anchor>, consectetur adipiscing elit.
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
        <Text type="p" primary={true} mono={false}>
          Lorem ipsum dolor sit amet <Anchor to="/aldfjs">external website</Anchor>, consectetur adipiscing elit.
          Phasellus volutpat enim in lobortis sollicitudin. Nullam porta nec dolor et aliquet. Aenean ultrices sem
          a pretium porttitor. Donec quis pellentesque tellus. Phasellus eu enim lacus. Nunc vel commodo augue. In
          porttitor erat eu massa molestie suscipit. Cras laoreet et lacus quis dictum. Duis vulputate mattis
          orci, sed hendrerit quam tempus eu. Vivamus velit urna, laoreet sit amet fringilla et, cursus eget
          massa. Donec quam nunc, vulputate eget sapien in, lobortis sagittis felis. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia curae; Aenean rhoncus rutrum lectus non bibendum.
        </Text>
        <Text type="h2" primary={true} mono={false}>Login</Text>
        <Input value={username} setValue={setUsername} type="text" label="Lastname" required={true} placeholder="oliumbi"
               message=""/>
        <Input value={password} setValue={setPassword} type="password" label="Password" required={true}
               placeholder="Password1234" message=""/>
        <Button onClick={() => setDrawer(!drawer)} highlight={true}>Login</Button>
        <Button onClick={() => setDrawer(!drawer)} highlight={false}>Register</Button>
        <Text type="p" primary={true} mono={false}>
          Lorem ipsum dolor sit amet <Anchor to="/aldfjs">external website</Anchor>, consectetur adipiscing elit.
          Phasellus volutpat enim in lobortis sollicitudin. Nullam porta nec dolor et aliquet. Aenean ultrices sem
          a pretium porttitor. Donec quis pellentesque tellus. Phasellus eu enim lacus. Nunc vel commodo augue. In
          porttitor erat eu massa molestie suscipit. Cras laoreet et lacus quis dictum. Duis vulputate mattis
          orci, sed hendrerit quam tempus eu. Vivamus velit urna, laoreet sit amet fringilla et, cursus eget
          massa. Donec quam nunc, vulputate eget sapien in, lobortis sagittis felis. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia curae; Aenean rhoncus rutrum lectus non bibendum.
        </Text>

        <Text type="p" primary={false} mono={false}>
          Lorem ipsum dolor sit amet <Anchor to="/aldfjs">external website</Anchor>, consectetur adipiscing elit.
          Phasellus volutpat enim in lobortis sollicitudin. Nullam porta nec dolor et aliquet. Aenean ultrices sem
          a pretium porttitor. Donec quis pellentesque tellus. Phasellus eu enim lacus. Nunc vel commodo augue. In
          porttitor erat eu massa molestie suscipit. Cras laoreet et lacus quis dictum. Duis vulputate mattis
          orci, sed hendrerit quam tempus eu. Vivamus velit urna, laoreet sit amet fringilla et, cursus eget
          massa. Donec quam nunc, vulputate eget sapien in, lobortis sagittis felis. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia curae; Aenean rhoncus rutrum lectus non bibendum.
        </Text>

        <Text type="p" primary={true} mono={false}>
          Lorem ipsum dolor sit amet <Anchor to="/aldfjs">external website</Anchor>, consectetur adipiscing elit.
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

export default OliumbiAdminHome
