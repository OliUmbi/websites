import {useSyncExternalStore} from "react";
import {local} from "../services/local";

const useLocal = <T>(name: string): [T | null, (value: T) => void] => {

  let value = null
  let stored = useSyncExternalStore(local.subscribe(name), local.get(name))

  if (stored) {
    value = JSON.parse(stored) as T
  }

  const setValue = (value: T) => {
    local.set(name, JSON.stringify(value))
  }

  return [value, setValue]
}

export default useLocal;
