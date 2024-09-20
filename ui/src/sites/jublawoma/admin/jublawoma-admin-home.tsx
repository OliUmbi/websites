import Flex from "../../../components/flex/flex";
import Markdown from "../../../components/markdown/markdown";
import Icon from "../../../components/icon/icon";
import IconButton from "../../../components/icon/button/icon-button";
import Button from "../../../components/button/button";

const JublawomaHome = () => {

  return (
      <Flex xl={{direction: "column", align: "center", gap: 8}}>
        <Icon size={2}>rabbit</Icon>
        <Icon size={1.5}>rabbit</Icon>
        <Icon size={1}>rabbit</Icon>
        <Icon size={3}>rabbit</Icon>
        <Icon size={4}>rabbit</Icon>
        <Flex xl={{direction: "row", align: "center", wrap: "always", gap: 0.5}}>
          <Button onClick={() => {}} highlight={true}>More</Button>
          <IconButton size={1.5} onClick={() => {}} highlight={true}>plus</IconButton>
          <IconButton size={2} onClick={() => {}} highlight={true}>plus</IconButton>
          <IconButton size={1} onClick={() => {}} highlight={true}>text</IconButton>
          <IconButton size={3} onClick={() => {}} highlight={false}>plus</IconButton>
          <IconButton size={4} onClick={() => {}} highlight={false}>arrow-right</IconButton>
        </Flex>
        <Markdown/>
      </Flex>
  )
}

export default JublawomaHome
