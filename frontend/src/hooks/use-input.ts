import {useState} from "react";

const useInput = (defaultValue?: string): {
  value: string
  setValue: (value: string) => void;
  error: string;
  setError: (error: string) => void;
} => {

  const [value, setValue] = useState<string>(defaultValue || "")
  const [error, setError] = useState<string>("")

  return {
    value: value,
    setValue: setValue,
    error: error,
    setError: setError
  }
}

export default useInput;
