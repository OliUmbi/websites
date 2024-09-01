import {useCallback, useState} from "react";
import {Method} from "../enums/method";

const API_URL = import.meta.env.VITE_API_URL

interface Param {
  key: string,
  value: string
}

interface Payload {
  body?: any,
  params?: Param[]
}

const useApi = <T>(path: string, method: Method): {
  execute: (payload?: Payload) => void,
  data: T | null,
  error: string | null,
  loading: boolean
} => {

  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const execute = useCallback(async (payload?: Payload) => {
    setError(null)
    setLoading(true)

    let headers = {}
    let body = null
    let params = null

    if (payload) {
      if (payload.body) {
        if (payload.body instanceof FormData) {
          body = payload.body
        } else {
          headers = {...headers, "Content-Type": "application/json; charset=UTF-8"}
          body = JSON.stringify(payload.body)
        }
      }

      if (payload.params && payload.params.length > 0) {
        params = "?" + payload.params.map(value => value.key + "=" + value.value).join("&")
      }
    }

    let response;
    try {
      response = await fetch(API_URL + path + params, {
        mode: "cors",
        signal: AbortSignal.timeout(10000),
        method: method,
        body: body,
        headers: headers
      });
    } catch (error) {
      setError("API konnte nicht erreicht werden.")
      setLoading(false)
      return
    }

    let data;
    try {
      // todo rework
      if (response.headers.get("Content-Type") === "application/json") {
        data = await response.json()
      } else {
        data = await response.blob()
      }
    } catch (error) {
      setError("API-Antwort konnte nicht interpretiert werden.")
      setLoading(false)
      return
    }

    if (!response.ok) {
      setError(data.message)
      setLoading(false)
      return
    }

    setData(data)
    setError(null)
    setLoading(false)
  }, [])

  return {
    execute: execute,
    data: data,
    error: error,
    loading: loading
  }
}

export default useApi;
