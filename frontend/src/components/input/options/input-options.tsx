import "./input-options.scss";
import Input from "../input";
import {useEffect} from "react";

interface Props {
  required: boolean,
  validation: ((value: string[]) => string | null) | null,
  internal: string
  setInternal: (internal: string) => void
  value: string[] | null,
  setValue: (value: string[] | null) => void,
  setValid: (valid: boolean) => void,
  error: string,
  setError: (error: string) => void
  label: string
  options: string[]
  disabled?: boolean
  multiple?: boolean
}

const InputOptions = (props: Props) => {

  const handleOnClick = (value: string) => {
    let selected = props.internal.split("|")

    if (!props.internal) {
      selected = []
    }

    if (selected.includes(value)) {
      selected = selected.filter(select => select !== value)
    } else if (props.multiple) {
      selected.push(value)
    } else {
      selected[0] = value
    }

    value = selected.join("|")

    props.setInternal(value)
  }

  useEffect(() => {
    let value = props.internal

    if (value === "") {
      props.setValue(null)
      return
    }

    props.setValue(value.split("|"))
  }, [props.setValue, props.internal]);

  useEffect(() => {
    if (props.internal === "") {
      if (props.required) {
        // todo translation
        props.setError("Field is empty.")
        props.setValid(false)
        return
      }
      props.setError("")
      props.setValid(true)
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
  }, [props.internal, props.required, props.setError, props.setValid, props.validation, props.value]);

  return (
      <Input label={props.label} required={props.required} error={props.error} disabled={props.disabled || false}>
        <div className="input-options">
          {
            props.options.map((option, index) => (
                <button className="input-options__option" onClick={() => handleOnClick(option)} data-selected={props.internal.split("|").includes(option)} key={index}>{option}</button>
            ))
          }
        </div>
      </Input>
  )
}

export default InputOptions
