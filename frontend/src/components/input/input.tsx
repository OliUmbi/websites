import "./input.scss";
import {ReactNode} from "react";
import Text from "../text/text"

interface Props {
  children: ReactNode
  label: string
  required: boolean
  error: string
  disabled: boolean
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

  return (
      <label className="input" data-disabled={props.disabled}>
        <div className="input__head">
          <Text type="s" primary={true} mono={false}>{props.label} {props.required ? "" : "[optional]"}</Text>
        </div>
        <div className="input__body">
          {props.children}
        </div>
        {
          props.error ? (
              <div className="input__foot">
                <Text type="s" primary={false} mono={false}>{props.error}</Text>
              </div>
          ) : ""
        }
      </label>
  )
}

export default Input
