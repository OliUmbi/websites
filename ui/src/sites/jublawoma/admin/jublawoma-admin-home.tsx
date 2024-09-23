import Flex from "../../../components/flex/flex";
import Markdown from "../../../components/markdown/markdown";
import useApi from "../../../hooks/use-api";
import {Enviroment} from "../../../enums/shared/enviroment";
import useInput from "../../../hooks/use-input";
import InputFile from "../../../components/input/file/input-file";
import {useEffect} from "react";
import Button from "../../../components/button/button";
import Picture from "../../../components/picture/picture";
import {configuration} from "../../../services/configuration";
import {MarkdownItem} from "../../../interfaces/shared/markdown";

const JublawomaHome = () => {

  const api = useApi<File>(Enviroment.JUBLAWOMA_ADMIN, "POST", "/image")

  const input = useInput<File>(true)

  const upload = () => {
    if (!input.valid) {
      return
    }

    api.execute({
      body: input.value
    })
  }

  useEffect(() => {
    console.log(input)
  }, [input]);

  useEffect(() => {
    console.log(api)
  }, [api]);

  const data: MarkdownItem[] = [
    {
      type: "heading-1",
      value: "Titel",
      children: []
    },
    {
      type: "heading-2",
      value: "Titel 2",
      children: []
    },
    {
      type: "heading-3",
      value: "Titel 3",
      children: []
    },
    {
      type: "paragraph",
      value: "Text",
      children: []
    },
    {
      type: "button",
      value: "Mehr erfahren|https://jublawoma.ch",
      children: []
    },
    {
      type: "image",
      value: "fbeca530-3850-43e7-834e-3e50a9987ac2",
      children: []
    },
    {
      type: "grid",
      value: 3,
      children: [
        {
          type: "heading-1",
          value: "Titel",
          children: []
        },
        {
          type: "heading-2",
          value: "Titel 2",
          children: []
        },
        {
          type: "heading-3",
          value: "Titel 3",
          children: []
        },
        {
          type: "flex",
          value: null,
          children: [
            {
              type: "paragraph",
              value: "Text",
              children: []
            },
            {
              type: "image",
              value: "fbeca530-3850-43e7-834e-3e50a9987ac2",
              children: []
            }
          ]
        },
        {
          type: "button",
          value: "Mehr erfahren|https://jublawoma.ch",
          children: []
        },
        {
          type: "image",
          value: "fbeca530-3850-43e7-834e-3e50a9987ac2",
          children: []
        },
        {
          type: "image",
          value: "fbeca530-3850-43e7-834e-3e50a9987ac2",
          children: []
        },
        {
          type: "image",
          value: "fbeca530-3850-43e7-834e-3e50a9987ac2",
          children: []
        },
      ]
    }
  ]

  return (
      <Flex xl={{widthMax: "xl", direction: "column", gap: 8}}>
        <InputFile {...input} label="Image"/>
        <Button onClick={upload} highlight={true}>Upload</Button>
        <Picture api={configuration.api.jublawoma} id="fbeca530-3850-43e7-834e-3e50a9987ac2" alt="image" side="width" rounded={true}/>
        <Markdown markdown={data} api={configuration.api.jublawoma}/>
      </Flex>
  )
}

export default JublawomaHome
