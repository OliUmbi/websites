import "./input-date.scss";
import Input from "../input";
import {ChangeEvent, useEffect} from "react";
import {date} from "../../../services/date";

export interface Props {
  required: boolean,
  validation: ((value: string) => string | null) | null,
  internal: string
  setInternal: (internal: string) => void
  setValue: (value: any | null) => void,
  setValid: (valid: boolean) => void,
  error: string,
  setError: (error: string) => void
  label: string
  placeholder: string
  time?: boolean
  past?: boolean
  future?: boolean
  disabled?: boolean
}

const InputNumber = (props: Props) => {

  const handleOnChange = (event: ChangeEvent<any>) => {
    event.preventDefault()

    let value = event.target.value
    value = value.trim()

    props.setInternal(value)
  }

  useEffect(() => {
    // todo idk
    props.setValid(date.valid(props.internal, props.time ? "time" : "date"))
    props.setValue(date.convert(props.internal))
  }, [props.internal]);

  useEffect(() => {
    if (props.validation) {
      let error = props.validation(props.internal)

      if (error) {
        // todo group and move to hook
        props.setError(error)
        props.setValid(false)
        return;
      }
    }

    if (!date.valid(props.internal, props.time ? "time" : "date")) {
      // todo translation (probably to different translations)???
      // todo group and move to hook
      props.setError("Not in correct format " + (props.time ? "dd.mm.yyyy, mm:ss" : "dd.mm.yyyy"))
      props.setValid(false)
      return
    }

    // todo group and move to hook
    props.setError("")
    props.setValid(true)
  }, [props.internal, props.time, props.setError, props.validation]);

  return (
      <Input label={props.label} required={props.required} error={props.error} disabled={props.disabled || false}>
        <div className="input-date">
          <input className="input-date__input" value={props.time ? props.internal : props.internal.slice(0,10)} onChange={handleOnChange} type="text" placeholder={props.placeholder}/>
        </div>
      </Input>
  )
}

export default InputNumber
