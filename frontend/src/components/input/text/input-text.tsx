import "./input-text.scss";
import Input from "../input";
import {ChangeEvent} from "react";
import Text from "../../text/text";

export interface Props {
  value: string
  setValue: (value: string) => void
  error: string
  label: string
  required: boolean
  placeholder: string
  disabled?: boolean
  hidden?: boolean
  rows?: number
  characters?: number
}

const InputText = (props: Props) => {

  const handleOnChange = (event: ChangeEvent<any>) => {
    event.preventDefault()
    props.setValue(event.target.value)
  }

  return (
      <Input label={props.label} required={props.required} error={props.error} disabled={props.disabled || false}>
        <div className="input-text">
          {
            props.rows === 1 ? (
                <input className="input-text__input" value={props.value} onChange={handleOnChange} type={props.hidden ? "password" : "text"} required={props.required} disabled={props.disabled} placeholder={props.placeholder} maxLength={props.characters}/>
            ) : (
                <textarea className="input-text__input" value={props.value} onChange={handleOnChange} rows={props.rows} required={props.required} disabled={props.disabled} placeholder={props.placeholder} maxLength={props.characters}/>
            )
          }
          {
            props.characters ? (
                <div className="input-text__characters">
                  <Text type="s" primary={false} mono={true}>{props.value.length}/{props.characters}</Text>
                </div>
            ) : ""
          }
        </div>
      </Input>
  )
}

export default InputText
