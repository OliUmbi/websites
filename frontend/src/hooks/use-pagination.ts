import {useState} from "react";
import {date} from "../services/date";

const useInput = (total: number, size: number): {
  total: number
  size: number
  offset: number
  setOffset: (value: number) => void
} => {

  const [offset, setOffset] = useState<number>(0)

  return {
    total,
    size,
    offset,
    setOffset
  }
}

export default useInput;
