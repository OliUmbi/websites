import "./markdown-position.scss";
import IconButton from "../../icon/button/icon-button";
import {useState} from "react";
import InputText from "../../input/text/input-text";
import useInput from "../../../hooks/use-input";
import InputFile from "../../input/file/input-file";
import Flex from "../../flex/flex";

interface Props {

}

const MarkdownPosition = (props: Props) => {

  const [selected, setSelected] = useState("p")

  const text = useInput(true)
  const file = useInput(true)

  return (
      <Flex xl={{width: true, direction: "row", gap: 2}}>
        <Flex xl={{direction: "row", align: "start"}}>
          <IconButton onClick={() => setSelected("h2")} highlight={selected === "h2"}>minimize</IconButton>
          <IconButton onClick={() => setSelected("h3")} highlight={selected === "h3"}>horizontal_rule</IconButton>
          <IconButton onClick={() => setSelected("p")} highlight={selected === "p"}>notes</IconButton>
          <IconButton onClick={() => setSelected("q")} highlight={selected === "q"}>format_quote</IconButton>
          <IconButton onClick={() => setSelected("image")} highlight={selected === "image"}>image</IconButton>
        </Flex>
        <Flex xl={{width: true, direction: "row"}}>
          {
            selected === "h2" ? <InputText {...text} label="Titel" placeholder="Titel"/> : null
          }
          {
            selected === "h3" ? <InputText {...text} label="Untertitel" placeholder="Untertitel"/> : null
          }
          {
            selected === "p" ? <InputText {...text} label="Paragraph" placeholder="Paragraph" rows={10}/> : null
          }
          {
            selected === "q" ? <InputText {...text} label="Zitat" placeholder="Zitat"/> : null
          }
          {
            selected === "image" ? <InputFile {...file} label="Zitat" image={true}/> : null
          }
        </Flex>
      </Flex>
  )
}

export default MarkdownPosition