import "./input-file.scss";
import Input from "../input";
import {ChangeEvent, MouseEvent, useEffect} from "react";
import Text from "../../text/text";
import Icon from "../../icon/icon";

interface Props {
  required: boolean,
  validation: ((value: File) => string | null) | null,
  value: File | null,
  setValue: (value: File | null) => void,
  setValid: (valid: boolean) => void,
  error: string,
  setError: (error: string) => void
  label: string
  disabled?: boolean
  image?: boolean
  audio?: boolean
  video?: boolean
  pdf?: boolean
}

const InputFile = (props: Props) => {

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value = event.target.files

    let file = value ? value[0] : null

    props.setValue(file || null)
  }

  const clear = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    props.setValue(null)
  }

  const accept = () => {
    let value = []

    if (props.image) {
      value.push("image/*")
    }

    if (props.audio) {
      value.push("audio/*")
    }

    if (props.video) {
      value.push("video/*")
    }

    if (props.pdf) {
      value.push(".pdf")
    }

    return value.join(",")
  }

  useEffect(() => {
    if (!props.value) {
      if (props.required) {
        props.setError("Field is empty")
        props.setValid(false)
        return;
      }
      props.setError("")
      props.setValid(true)
      return;
    }

    if (props.value) {
      if (props.validation) {
        let error = props.validation(props.value)

        if (error) {
          props.setError(error)
          props.setValid(false)
          return;
        }
      }
    }

    props.setError("")
    props.setValid(true)
  }, [props.required, props.setError, props.setValid, props.value, props.validation]);

  return (
      <Input label={props.label} required={props.required} error={props.error} disabled={props.disabled || false}>
        <div className="input-file">
          <input className="input-file__input" onChange={handleOnChange} type="file" inputMode="none" accept={accept()}/>
          <button className="input-file__button">Select file</button>
          {
            props.value ? (
                <>
                  <Text type="s" primary={true} mono={true}>{props.value.name}</Text>
                  <div className="input-file__remove" onClick={clear}>
                    <Icon size={1}>trash-2</Icon>
                  </div>
                </>
            ) : ""
          }
        </div>
      </Input>
  )
}

export default InputFile
