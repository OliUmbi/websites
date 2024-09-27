import "./input-picture.scss";
import Input from "../input";
import Picture from "../../picture/picture";
import InputFile from "../file/input-file";
import useInput from "../../../hooks/use-input";
import Button from "../../button/button";
import Flex from "../../flex/flex";
import useApi from "../../../hooks/use-api";
import {Enviroment} from "../../../enums/shared/enviroment";
import {useEffect} from "react";
import {IdMessageResponse} from "../../../interfaces/shared/message";

interface Props {
  required: boolean,
  validation: ((value: string) => string | null) | null,
  internal: string
  setInternal: (internal: string) => void
  value: string | null,
  setValue: (value: string | null) => void,
  setValid: (valid: boolean) => void,
  error: string,
  setError: (error: string) => void
  label: string
  api: string
  disabled?: boolean
}

const InputPicture = (props: Props) => {

  const file = useInput<File>(false)
  const imageCreate = useApi<IdMessageResponse>(Enviroment.JUBLAWOMA_ADMIN, "POST", "/image")

  useEffect(() => {
    if (imageCreate.data) {
      props.setValue(imageCreate.data.id)
      props.setError("")
    }
  }, [imageCreate.data])

  useEffect(() => {
    if (imageCreate.error) {
      props.setError(imageCreate.error)
    }
  }, [imageCreate.error])

  useEffect(() => {
    if (imageCreate.loading) {
      props.setError("Wird hochgeladen.")
    }
  }, [imageCreate.loading])

  useEffect(() => {
    if (props.value) {
      props.setValid(true)
    }
  }, [props.value]);

  useEffect(() => {
    if (!props.required) {
      props.setValid(true)
    }
  }, [props.required]);

  const create = () => {

    if (!file.valid) {
      return
    }

    imageCreate.execute({
      body: file.value
    })
  }

  return (
      <Input label={props.label} required={props.required} error={props.error} disabled={props.disabled || false}>
        <div className="input-picture">
          <Picture api={props.api} id={props.value} alt="Bild" side="width" rounded={true}/>
          <Flex xl={{direction: "row", align: "end", gap: 1}}>
            <InputFile {...file} label="Bild hochladen" image={true}/>
            <Button onClick={create} highlight={false}>Hochladen</Button>
          </Flex>
        </div>
      </Input>
  )
}

export default InputPicture
