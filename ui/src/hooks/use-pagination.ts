import {useState} from "react";

const usePagination = (size: number): {
  total: number
  setTotal: (value: number) => void
  size: number
  offset: number
  setOffset: (value: number) => void
} => {

  const [total, setTotal] = useState<number>(0)
  const [offset, setOffset] = useState<number>(0)

  return {
    total,
    setTotal,
    size,
    offset,
    setOffset
  }
}

export default usePagination;
