import "./markdown-position.scss";
import IconButton from "../../icon/button/icon-button";
import {useState} from "react";
import InputText from "../../input/text/input-text";
import useInput from "../../../hooks/use-input";
import InputFile from "../../input/file/input-file";
import Flex from "../../flex/flex";
import Icon from "../../icon/icon";
import InputNumber from "../../input/number/input-number";
import Grid from "../../grid/grid";
import Markdown from "../markdown";

interface Props {

}

const MarkdownPosition = (props: Props) => {

  const [selected, setSelected] = useState("p")

  const text = useInput<string>(true)
  const number = useInput<number>(true, 2)
  const file = useInput<File>(true)

  return (
      <Flex xl={{direction: "column", gap: 1}}>
        <Flex xl={{direction: "row", gap: 1}}>
          <Flex xl={{direction: "row", wrap: "always"}}>
            <IconButton size={1} onClick={() => {}} highlight={false}>chevron-up</IconButton>
            <IconButton size={1} onClick={() => {}} highlight={false}>chevron-down</IconButton>
          </Flex>
          <Flex xl={{direction: "row", wrap: "always"}}>
            <IconButton size={1} onClick={() => setSelected("h1")} highlight={selected === "h1"}>heading-1</IconButton>
            <IconButton size={1} onClick={() => setSelected("h2")} highlight={selected === "h2"}>heading-2</IconButton>
            <IconButton size={1} onClick={() => setSelected("h3")} highlight={selected === "h3"}>heading-3</IconButton>
            <IconButton size={1} onClick={() => setSelected("p")} highlight={selected === "p"}>letter-text</IconButton>
            <IconButton size={1} onClick={() => setSelected("image")} highlight={selected === "image"}>image</IconButton>
            <IconButton size={1} onClick={() => setSelected("video")} highlight={selected === "video"}>video</IconButton>
            <IconButton size={1} onClick={() => setSelected("grid")} highlight={selected === "grid"}>columns-2</IconButton>
          </Flex>
        </Flex>
        {
          selected === "h1" ? <InputText {...text} label="Überschrift 1" placeholder="Überschrift 1"/> : null
        }
        {
          selected === "h2" ? <InputText {...text} label="Überschrift 2" placeholder="Überschrift 2"/> : null
        }
        {
          selected === "h3" ? <InputText {...text} label="Überschrift 3" placeholder="Überschrift 3"/> : null
        }
        {
          selected === "p" ? <InputText {...text} label="Paragraph" placeholder="Paragraph" rows={10}/> : null
        }
        {
          selected === "q" ? <InputText {...text} label="Zitat" placeholder="Zitat"/> : null
        }
        {
          selected === "image" ? <InputFile {...file} label="Bild" image={true}/> : null
        }
        {
          selected === "video" ? <InputFile {...file} label="Video" image={true}/> : null
        }
        {
          selected === "grid" ? (
              <>
                <InputNumber {...number} label="Anzahl Spalten" placeholder="Paragraph" min={2} max={4} step={1}/>
              </>
          ) : null
        }
      </Flex>
  )
}

export default MarkdownPosition
