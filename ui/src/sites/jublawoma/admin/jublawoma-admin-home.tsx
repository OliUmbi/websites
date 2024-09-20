import Flex from "../../../components/flex/flex";
import Markdown from "../../../components/markdown/markdown";
import useApi from "../../../hooks/use-api";
import {Enviroment} from "../../../enums/global/enviroment";
import useInput from "../../../hooks/use-input";
import InputFile from "../../../components/input/file/input-file";
import {useEffect} from "react";
import Button from "../../../components/button/button";

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

  return (
      <Flex xl={{direction: "column", gap: 8}}>
        <InputFile {...input} label="Image"/>
        <Button onClick={upload} highlight={true}>Upload</Button>
        <Markdown/>
      </Flex>
  )
}

export default JublawomaHome
