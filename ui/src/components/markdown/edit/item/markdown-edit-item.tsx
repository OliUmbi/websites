import "./markdown-edit-item.scss";
import {MarkdownItem, MarkdownItemType} from "../../../../interfaces/shared/markdown";
import {useEffect, useState} from "react";
import useInput from "../../../../hooks/use-input";
import Flex from "../../../flex/flex";
import IconButton from "../../../icon/button/icon-button";
import InputText from "../../../input/text/input-text";
import InputNumber from "../../../input/number/input-number";
import InputPicture from "../../../input/picture/input-picture";
import {Enviroment} from "../../../../enums/shared/enviroment";

interface Props {
  id: string
  type: MarkdownItemType
  value: any
  children: MarkdownItem[]
  api: string
  enviroment: Enviroment
  setItem: (value: MarkdownItem) => void
  setPosition: (value: number) => void
  remove: () => void
}

const MarkdownEditItem = (props: Props) => {

  const [type, setType] = useState<MarkdownItemType>(props.type)
  const [children, setChildren] = useState<MarkdownItem[]>(props.children)

  const text = useInput<string>(false, props.value)
  const number = useInput<number>(false, props.value)

  useEffect(() => {
    let value

    if (type == "heading-1" || type == "heading-2" || type == "heading-3" || type == "paragraph" || type == "image") {
      value = text.value
    }

    if (type == "grid") {
      value = number.value
    }

    const item: MarkdownItem = {
      id: props.id,
      type: type,
      value: value,
      children: children
    }

    props.setItem(item)
  }, [type, text.value, number.value, children]);

  const add = () => {
    setChildren(prevState => [...prevState, {
      id: Math.random().toString(16).slice(2),
      type: "paragraph",
      value: "",
      children: []
    }])
  }

  const update = (index: number, item: MarkdownItem) => {
    setChildren(prevState => {
      let copy = [...prevState]
      copy[index] = item
      return copy
    })
  }

  const position = (index: number, offset: number) => {
    const position = index + offset

    if (position < 0 || position >= children.length) {
      return
    }

    setChildren(prevState => {
      let copy = [...prevState]
      copy.splice(index, 0, copy.splice(position, 1)[0]);
      return copy
    })
  }

  const remove = (index: number) => {
    setChildren(prevState => prevState.filter((_, i) => i != index))
  }

  return (
      <Flex xl={{direction: "column"}}>
        <Flex xl={{direction: "row", justify: "between", gap: 1}}>
        <Flex xl={{direction: "row", gap: 1}}>
          <Flex xl={{direction: "row", wrap: "always"}}>
            <IconButton size={1} onClick={() => props.setPosition(-1)} highlight={false}>chevron-up</IconButton>
            <IconButton size={1} onClick={() => props.setPosition(1)} highlight={false}>chevron-down</IconButton>
          </Flex>
          <Flex xl={{direction: "row", wrap: "always"}}>
            <IconButton size={1} onClick={() => setType("heading-1")} highlight={type === "heading-1"}>heading-1</IconButton>
            <IconButton size={1} onClick={() => setType("heading-2")} highlight={type === "heading-2"}>heading-2</IconButton>
            <IconButton size={1} onClick={() => setType("heading-3")} highlight={type === "heading-3"}>heading-3</IconButton>
            <IconButton size={1} onClick={() => setType("paragraph")} highlight={type === "paragraph"}>letter-text</IconButton>
            <IconButton size={1} onClick={() => setType("image")} highlight={type === "image"}>image</IconButton>
            <IconButton size={1} onClick={() => setType("flex")} highlight={type === "flex"}>rows-2</IconButton>
            <IconButton size={1} onClick={() => setType("grid")} highlight={type === "grid"}>columns-2</IconButton>
          </Flex>
        </Flex>
          <IconButton size={1} onClick={props.remove} highlight={false}>trash-2</IconButton>
        </Flex>
        {
          type === "heading-1" ? <InputText {...text} label="Überschrift 1" placeholder="Überschrift 1"/> : null
        }
        {
          type === "heading-2" ? <InputText {...text} label="Überschrift 2" placeholder="Überschrift 2"/> : null
        }
        {
          type === "heading-3" ? <InputText {...text} label="Überschrift 3" placeholder="Überschrift 3"/> : null
        }
        {
          type === "paragraph" ? <InputText {...text} label="Paragraph" placeholder="Paragraph" rows={5}/> : null
        }
        {
          type === "image" ? <InputPicture {...text} label="Bild" api={props.api} enviroment={props.enviroment}/> : null
        }
        {
          type === "flex" ? (
              <div className="markdown-edit-item__children">
                <Flex xl={{direction: "column", gap: 1}}>
                  {
                    children.map((value, index) =>
                        <MarkdownEditItem id={value.id} type={value.type} value={value.value} children={value.children} api={props.api}
                                          setItem={item => update(index, item)} setPosition={offset => position(index, offset)}
                                          remove={() => remove(index)} key={value.id}/>)
                  }
                  <IconButton size={1.5} onClick={add} highlight={false}>plus</IconButton>
                </Flex>
              </div>
          ) : null
        }
        {
          type === "grid" ? (
              <>
                <InputNumber {...number} label="Anzahl spalten" placeholder="Min. 2, max. 4" min={2} max={4} step={1}/>
                <div className="markdown-edit-item__children">
                  <Flex xl={{direction: "column", gap: 1}}>
                    {
                      children.map((value, index) =>
                          <MarkdownEditItem id={value.id} type={value.type} value={value.value} children={value.children} api={props.api}
                                            setItem={item => update(index, item)} setPosition={offset => position(index, offset)}
                                            remove={() => remove(index)} key={value.id}/>)
                    }
                    <IconButton size={1.5} onClick={add} highlight={false}>plus</IconButton>
                  </Flex>
                </div>
              </>
          ) : null
        }
      </Flex>
  )
}

export default MarkdownEditItem
