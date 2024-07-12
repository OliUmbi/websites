import "./input.scss";
import {ChangeEvent} from "react";
import Text from "../text/text"

export interface Props {
  value: string
  setValue: (value: string) => void
  error: string
  label: string
  required: boolean;
  hidden: boolean
  placeholder: string
  rows?: number
}

/**
 * types:
 * - text
 * - password
 * - email
 * - number
 * - time
 * - date
 * - datetime
 * - multiline
 * - file upload
 * - multi select (list type of shit?)
 * - single select (square cards?)
 *
 * validation
 * - custom function?
 * - is empty / required
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
        {
          props.rows ? (
              <textarea className="input__body" value={props.value} onChange={handleOnChange} rows={props.rows} required={props.required} placeholder={props.placeholder}/>
          ) : (
              <input className="input__body" type={props.hidden ? "password" : "text"} value={props.value} onChange={handleOnChange} required={props.required} placeholder={props.placeholder}/>
          )
        }
        <div className="input__foot">
          <Text type="s" primary={true} mono={true}>{props.error}</Text>
        </div>
      </label>
  )
}

export default Input
