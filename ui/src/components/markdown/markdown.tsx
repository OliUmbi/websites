import "./markdown.scss";
import MarkdownPosition from "./position/markdown-position";
import Flex from "../flex/flex";

const Markdown = () => {

  return (
      <Flex xl={{width: true, direction: "column", gap: 2}}>
        <MarkdownPosition/>
        <MarkdownPosition/>
        <MarkdownPosition/>
        <MarkdownPosition/>
        <MarkdownPosition/>
        <MarkdownPosition/>
        <MarkdownPosition/>
        <MarkdownPosition/>
        <MarkdownPosition/>
        <MarkdownPosition/>
        <MarkdownPosition/>
        <MarkdownPosition/>
        <MarkdownPosition/>
        <MarkdownPosition/>
        <MarkdownPosition/>
      </Flex>
  )
}

export default Markdown
