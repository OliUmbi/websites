import "./markdown.scss";
import {MarkdownItem} from "../../interfaces/shared/markdown";
import Text from "../text/text";
import Picture from "../picture/picture";
import Grid from "../grid/grid";
import Flex from "../flex/flex";

export interface Props {
  markdown: MarkdownItem[]
  api: string
}

const Markdown = (props: Props) => {

  const render = (markdown: MarkdownItem, index: number) => {
    switch (markdown.type) {
      case "heading-1": {
        return <Text type="h1" key={index}>{markdown.value}</Text>
      }
      case "heading-2": {
        return <Text type="h2" key={index}>{markdown.value}</Text>
      }
      case "heading-3": {
        return <Text type="h3" key={index}>{markdown.value}</Text>
      }
      case "paragraph": {
        return <Text type="p" key={index}>{markdown.value}</Text>
      }
      case "image": {
        // todo translate alt? or is alt translated in image component? or default fallback?
        return <Picture api={props.api} id={markdown.value} alt="Bild" side="width" rounded={true} key={index}/>
      }
      case "flex": {
        return <Flex xl={{direction: "column", gap: 1}} key={index}>
          <Markdown markdown={markdown.children} api={props.api}/>
        </Flex>
      }
      case "grid": {
        return <Grid xl={{columns: markdown.value, gap: 2}} l={markdown.value >= 4 ? {columns: 3} : undefined} m={markdown.value >= 3 ? {columns: 2} : undefined} s={{columns: 1}} key={index}>
          <Markdown markdown={markdown.children} api={props.api}/>
        </Grid>
      }
    }
  }

  return (
      <>
        {
          props.markdown.map((value, index) => render(value, index))
        }
      </>
  )
}

export default Markdown
