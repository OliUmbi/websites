import {useEffect, useState} from "react";
import {MarkdownItem} from "../../../interfaces/shared/markdown";
import Flex from "../../flex/flex";
import MarkdownEditItem from "./item/markdown-edit-item";
import IconButton from "../../icon/button/icon-button";

interface Props {
  markdown: string
  setMarkdown: (value: string) => void
  api: string
}

const MarkdownEdit = (props: Props) => {

  const [markdown, setMarkdown] = useState<MarkdownItem[]>(JSON.parse(props.markdown))

  useEffect(() => {
    props.setMarkdown(JSON.stringify(markdown))
  }, [markdown])

  const add = () => {
    setMarkdown(prevState => [...prevState, {
      id: Math.random().toString(16).slice(2),
      type: "paragraph",
      value: "",
      children: []
    }])
  }

  const update = (index: number, item: MarkdownItem) => {
    setMarkdown(prevState => {
      let copy = [...prevState]
      copy[index] = item
      return copy
    })
  }

  const position = (index: number, offset: number) => {
    const position = index + offset

    if (position < 0 || position >= markdown.length) {
      return
    }

    setMarkdown(prevState => {
      let copy = [...prevState]
      copy.splice(index, 0, copy.splice(position, 1)[0]);
      return copy
    })
  }

  const remove = (index: number) => {
    setMarkdown(prevState => prevState.filter((_, i) => i != index))
  }

  return (
      <Flex xl={{direction: "column", gap: 1}}>
        {
          markdown.map((value, index) =>
              <MarkdownEditItem id={value.id} type={value.type} value={value.value} children={value.children} api={props.api}
                                setItem={item => update(index, item)} setPosition={offset => position(index, offset)}
                                remove={() => remove(index)} key={value.id}/>)
        }
        <IconButton size={1.5} onClick={add} highlight={false}>plus</IconButton>
      </Flex>
  )
}

export default MarkdownEdit
