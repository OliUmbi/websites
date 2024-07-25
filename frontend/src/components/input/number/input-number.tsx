import "./input-number.scss";
import Input from "../input";
import {ChangeEvent} from "react";
import Icon from "../../icon/icon";

export interface Props {
  value: number | null
  setValue: (value: number | null) => void
  error: string
  label: string
  required: boolean
  placeholder: string
  min: number
  max: number
  step: number
  disabled?: boolean
  hidden?: boolean
}

const InputNumber = (props: Props) => {

  const handleOnChange = (event: ChangeEvent<any>) => {
    event.preventDefault()
    let value = event.target.valueAsNumber
    if (value < props.min) {
      value = props.min
    }
    if (value > props.max) {
      value = props.max
    }
    props.setValue(value)
  }

  const subtract = () => {
    let value = props.value !== null ? props.value : props.max

    value -= props.step
    if (value < props.min) {
      value = props.min
    }

    props.setValue(value)
  }

  const add = () => {
    let value = props.value !== null ? props.value : props.min

    value += props.step
    if (value > props.max) {
      value = props.max
    }

    props.setValue(value)
  }

  return (
      <Input label={props.label} required={props.required} error={props.error} disabled={props.disabled || false}>
        <div className="input-number">
          <input className="input-number__input" value={props.value !== null ? props.value : ""} onChange={handleOnChange} type="number" required={props.required} disabled={props.disabled} placeholder={props.placeholder} min={props.min} max={props.max} step={props.step}/>
          <div className="input-number__button" onClick={() => subtract()}>
            <Icon>remove</Icon>
          </div>
          <div className="input-number__button" onClick={() => add()}>
            <Icon>add</Icon>
          </div>
        </div>
      </Input>
  )
}

export default InputNumber
