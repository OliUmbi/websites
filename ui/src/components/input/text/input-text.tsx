import "./input-text.scss";
import Input from "../input";
import {ChangeEvent, useEffect} from "react";
import Text from "../../text/text";

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
  placeholder: string
  disabled?: boolean
  password?: boolean
  rows?: number
  characters?: number
}

const InputText = (props: Props) => {

  const handleOnChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let value = event.target.value

    props.setInternal(value)
  }

  useEffect(() => {
    let value = props.internal

    if (value === "") {
      props.setValue(null)
      return
    }

    if (props.characters) {
      value = value.slice(0, props.characters)
    }

    props.setValue(value)
  }, [props.setValue, props.internal]);

  useEffect(() => {
    if (props.internal === "") {
      if (props.required) {
        // todo translation
        props.setError("Dieses Feld ist pflicht.")
        props.setValid(false)
        return
      }
      props.setError("")
      props.setValid(true)
      return
    }

    if (props.characters && props.internal.length > props.characters) {
      // todo translation
      props.setError("Diese Eingabe ist zu lange.")
      props.setValid(false)
      return
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
  }, [props.internal, props.required, props.setError, props.setValid, props.characters, props.validation, props.value]);

  return (
      <Input label={props.label} required={props.required} error={props.error} disabled={props.disabled || false}>
        <div className="input-text">
          {
            props.rows ? (
                <textarea className="input-text__input" value={props.internal} onChange={handleOnChange} rows={props.rows} inputMode="text" placeholder={props.placeholder}/>
            ) : (
                <input className="input-text__input" value={props.internal} onChange={handleOnChange} type={props.password ? "password" : "text"} inputMode="text" placeholder={props.placeholder}/>
            )
          }
          {
            props.characters ? (
                <div className="input-text__characters">
                  <Text type="s" mono={true}>{props.internal.length}/{props.characters}</Text>
                </div>
            ) : ""
          }
        </div>
      </Input>
  )
}

export default InputText
