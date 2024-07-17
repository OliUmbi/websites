import "./input.scss";
import {ChangeEvent} from "react";
import Text from "../text/text"
import IconButton from "../icon/button/icon-button";
import Icon from "../icon/icon";

export interface Props {
  value: string | number | Date
  setValue: (value: string | number | Date) => void
  type: "text" | "email" | "password" | "number" | "datetime" | "date" | "time"
  error: string
  label: string
  required: boolean
  disabled: boolean
  placeholder: string
  min: number
  max: number
  step: number
  characters: string
  rows?: number
}

/**
 * types:
 * - text (rows)
 * - password
 * - email
 *
 * - number (steps, min, max)
 *
 * - time
 * - date (min)
 * - datetime
 *
 * - file upload
 *
 * - multi select (list type of shit?)
 * - single select (square cards?)
 *
 * - range / slider
 *
 * - dropdown
 *
 * validation
 * - custom function?
 * - is empty / required
 *
 * operation while updating
 *
 * disabled
 */

const Input = (props: Props) => {

  const handleOnChange = (event: ChangeEvent<any>) => {
    event.preventDefault()
    props.setValue(event.target.value)
  }

  // todo max length + validation (email, number, date, password min) + options (hori, vert) + range

  return (
      <label className="input">
        <div className="input__head">
          <Text type="s" primary={true} mono={false}>{props.label} {props.required ? "*" : ""}</Text>
        </div>
        <div>
          {
            props.rows ? (
                <textarea className="input__body" value={props.value} onChange={handleOnChange} rows={props.rows} required={props.required} placeholder={props.placeholder}/>
            ) : (
                <input className="input__body" type={props.hidden ? "password" : "text"} value={props.value} onChange={handleOnChange} required={props.required} placeholder={props.placeholder}/>
            )
          }
          <div>
            <Icon>remove</Icon>
            <Icon>add</Icon>
          </div>
          </div>
        <div className="input__foot">
          <Text type="s" primary={true} mono={true}>{props.error}</Text>
        </div>
      </label>
  )
}

export default Input
