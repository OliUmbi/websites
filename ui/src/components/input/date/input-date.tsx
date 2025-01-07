import "./input-date.scss";
import Input from "../input";
import {ChangeEvent, useEffect} from "react";
import {date} from "../../../services/date";

interface Props {
  required: boolean,
  validation: ((value: Date) => string | null) | null,
  internal: string
  setInternal: (internal: string) => void
  value: Date | null,
  setValue: (value: Date | null) => void,
  setValid: (valid: boolean) => void,
  error: string,
  setError: (error: string) => void
  label: string
  placeholder: string
  disabled?: boolean
  time?: boolean
  past?: boolean
  future?: boolean
}

const InputDate = (props: Props) => {

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value
    value = value.trim()

    if (event.target.value.endsWith(", ")) {
      value += " "
    }

    if (props.time) {
      value = value.slice(0, 17)
    } else {
      value = value.slice(0, 10)
    }

    props.setInternal(value)
  }

  useEffect(() => {
    let value = props.internal

    if (value === "") {
      props.setValue(null)
      return
    }

    if (props.time) {
      props.setInternal(value.slice(0, 17))
    } else {
      props.setInternal(value.slice(0, 10))
    }
  }, [props.time, props.internal]);

  useEffect(() => {
    props.setValue(date.convert(props.internal))
  }, [props.setValue, props.internal]);

  useEffect(() => {
    if (props.internal === "") {
      if (props.required) {
        props.setError("Feld ist leer.")
        props.setValid(false)
        return;
      }
      props.setError("")
      props.setValid(true)
      return;
    }

    if (!date.valid(props.internal, props.time ? "time" : "date")) {
      // todo translation (probably to different translations)???
      props.setError("Das Datum ist nicht korrekt formatiert " + (props.time ? "dd.mm.yyyy, mm:ss" : "dd.mm.yyyy"))
      props.setValid(false)
      return
    }

    if (props.value) {
      if (props.future && props.value < new Date()) {
        props.setError("Das Datum kann nicht in der Vergangeheit sein.")
        props.setValid(false)
        return
      }

      if (props.past && props.value > new Date()) {
        props.setError("Das Datum kann nicht in der Zukunft sein.")
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
  }, [props.internal, props.required, props.setError, props.setValid, props.time, props.value, props.future, props.past, props.validation]);

  return (
      <Input label={props.label} required={props.required} error={props.error} disabled={props.disabled || false}>
        <div className="input-date">
          <input className="input-date__input" value={props.internal} onChange={handleOnChange} type="text" inputMode="text" placeholder={props.placeholder}/>
        </div>
      </Input>
  )
}

export default InputDate
