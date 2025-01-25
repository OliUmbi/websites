import {MarkdownItem} from "../../../interfaces/shared/markdown";
import Flex from "../../flex/flex";
import MarkdownEditItem from "./item/markdown-edit-item";
import IconButton from "../../icon/button/icon-button";
import {Enviroment} from "../../../enums/shared/enviroment";

interface Props {
  markdown: MarkdownItem[]
  setMarkdown: (callback: ((value: MarkdownItem[]) => MarkdownItem[])) => void
  api: string
  enviroment: Enviroment
}

const MarkdownEdit = (props: Props) => {

  const add = () => {
    props.setMarkdown(prevState => [...prevState, {
      id: Math.random().toString(16).slice(2),
      type: "paragraph",
      value: "",
      children: []
    }])
  }

  const update = (index: number, item: MarkdownItem) => {
    props.setMarkdown(prevState => {
      let copy = [...prevState]
      copy[index] = item
      return copy
    })
  }

  const position = (index: number, offset: number) => {
    const position = index + offset

    if (position < 0 || position >= props.markdown.length) {
      return
    }

    props.setMarkdown(prevState => {
      let copy = [...prevState]
      copy.splice(index, 0, copy.splice(position, 1)[0]);
      return copy
    })
  }

  const remove = (index: number) => {
    props.setMarkdown(prevState => prevState.filter((_, i) => i != index))
  }

  return (
      <Flex xl={{direction: "column", gap: 1}}>
        {
          props.markdown.map((value, index) =>
              <MarkdownEditItem id={value.id} type={value.type} value={value.value} children={value.children} api={props.api} enviroment={props.enviroment}
                                setItem={item => update(index, item)} setPosition={offset => position(index, offset)}
                                remove={() => remove(index)} key={value.id}/>)
        }
        <IconButton size={1.5} onClick={add} highlight={false}>plus</IconButton>
      </Flex>
  )
}

export default MarkdownEdit
