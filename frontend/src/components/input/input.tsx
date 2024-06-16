import "./input.scss";
import {ChangeEvent} from "react";
import Text from "../text/text"

export interface InputProps {
  value: string,
  setValue: (value: string) => void,
  type: "text" | "password" | "email"
  label: string,
  required: boolean,
  placeholder: string,
  message: string,
  rows?: number
}

const Input = (props: InputProps) => {

  const handleOnChange = (event: ChangeEvent<any>) => {
    event.preventDefault()
    props.setValue(event.target.value)
  }

  return (
      <label className="input">
        <div className="input__head">
          <Text type="s" primary={false}>{props.label} {props.required ? "*" : ""}</Text>
        </div>
        {
          props.rows! ? (
              <textarea className="input__body" value={props.value} onChange={handleOnChange} rows={props.rows} required={props.required} placeholder={props.placeholder}/>
          ) : (
              <input className="input__body" type={props.type} value={props.value} onChange={handleOnChange} required={props.required} placeholder={props.placeholder}/>
          )
        }
        <div className="input__foot">
          <Text type="s" primary={true}>{props.message}</Text>
        </div>
      </label>
  )
}

export default Input
