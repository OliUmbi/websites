import "./input-number.scss";
import Input from "../input";
import {ChangeEvent, useEffect} from "react";
import Icon from "../../icon/icon";

interface Props {
  required: boolean,
  validation: ((value: number) => string | null) | null,
  internal: string
  setInternal: (internal: string) => void
  value: number | null,
  setValue: (value: number | null) => void,
  setValid: (valid: boolean) => void,
  error: string,
  setError: (error: string) => void
  label: string
  placeholder: string
  disabled?: boolean
  min?: number
  max?: number
  step?: number
}

const InputNumber = (props: Props) => {

  const handleOnChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let value = event.target.value
    value = value.trim()

    props.setInternal(value)
  }

  useEffect(() => {
    let value = props.internal

    if (value === "") {
      props.setValue(null)
      return
    }

    let number = Number(value)

    if (isNaN(number)) {
      props.setValue(null)
      return
    }

    props.setValue(number)
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
    }

    if (isNaN(Number(props.internal))) {
      // todo translation
      props.setError("Die Eingabe ist keine Zahl.")
      props.setValid(false)
      return
    }

    if (props.value !== null) {
      if (props.min && props.value < props.min) {
        props.setError("Die Eingabe ist zu klein.")
        props.setValid(false)
        return
      }

      if (props.max && props.value > props.max) {
        props.setError("Die Eingabe ist zu gross.")
        props.setValid(false)
        return
      }

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
  }, [props.internal, props.required, props.setError, props.setValid, props.min, props.max, props.validation, props.value]);

  const subtract = () => {
    if (props.value !== null) {
      let value = props.value
      let step = props.step || 1

      value -= step
      if (props.min !== undefined && value < props.min) {
        value = props.min
      }

      props.setInternal(value.toString())
    }
  }

  const add = () => {
    if (props.value !== null) {
      let value = props.value
      let step = props.step || 1

      value += step
      if (props.max !== undefined && value > props.max) {
        value = props.max
      }

      props.setInternal(value.toString())
    }
  }

  return (
      <Input label={props.label} required={props.required} error={props.error} disabled={props.disabled || false}>
        <div className="input-number" data-step={!!props.step}>
          <input className="input-number__input" value={props.internal} onChange={handleOnChange} type="text" inputMode="decimal" placeholder={props.placeholder}/>
          {
            props.step ? (
                <>
                  <div className="input-number__button" onClick={subtract}>
                    <Icon>minus</Icon>
                  </div>
                  <div className="input-number__button" onClick={add}>
                    <Icon>plus</Icon>
                  </div>
                </>
            ) : ""
          }
        </div>
      </Input>
  )
}

export default InputNumber
