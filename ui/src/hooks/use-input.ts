import {useState} from "react";
import {date} from "../services/date";

const useInput = <T extends string | string[] | number | boolean | Date | File>(required: boolean, defaultValue?: T, validation?: (value: T) => string | null): {
  required: boolean,
  validation: ((value: T) => string | null) | null,
  internal: string
  setInternal: (internal: string) => void,
  value: T | null,
  setValue: (value: T | null) => void,
  valid: boolean,
  setValid: (valid: boolean) => void,
  error: string,
  setError: (error: string) => void
} => {

  const convertDefault = () => {
    if (!defaultValue) {
      return ""
    }

    if (typeof defaultValue === "string") {
      return defaultValue
    }

    if (typeof defaultValue === "number") {
      return defaultValue.toString()
    }

    if (typeof defaultValue === "boolean") {
      return defaultValue.toString()
    }

    if (defaultValue instanceof Date) {
      return date.locale(defaultValue, "time")
    }

    if (Array.isArray(defaultValue)) {
      return defaultValue.join("|")
    }

    if (defaultValue instanceof File) {
      return defaultValue.name
    }

    return ""
  }

  const [internal, setInternal] = useState<string>(convertDefault())
  const [value, setValue] = useState<T | null>(null)
  const [valid, setValid] = useState<boolean>(false)
  const [error, setError] = useState<string>("")

  return {
    required: required,
    validation: validation || null,
    internal: internal,
    setInternal: setInternal,
    value: value,
    setValue: setValue,
    valid: valid,
    setValid: setValid,
    error: error,
    setError: setError
  }
}

export default useInput;
