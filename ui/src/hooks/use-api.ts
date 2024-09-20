import {useCallback, useState} from "react";
import {Method} from "../enums/global/method";
import {Enviroment} from "../enums/global/enviroment";

const API_JUBLAWOMA = import.meta.env.VITE_API_JUBLAWOMA
const API_JUBLAWOMA_ADMIN = import.meta.env.VITE_API_JUBLAWOMA_ADMIN
const API_UNCLET = import.meta.env.VITE_API_UNCLET
const API_UNCLET_ADMIN = import.meta.env.VITE_API_UNCLET_ADMIN
const API_OLIUMBI = import.meta.env.VITE_API_OLIUMBI
const API_OLIUMBI_ADMIN = import.meta.env.VITE_API_OLIUMBI_ADMIN

interface Param {
  key: string,
  value: string
}

interface Payload {
  body?: any,
  params?: Param[]
}

const useApi = <T>(enviroment: Enviroment, method: Method, path: string): {
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

    let url = ""
    let headers = {}
    let body = null
    let params = ""

    switch (enviroment) {
      case Enviroment.JUBLAWOMA:
        url = API_JUBLAWOMA
        break;
      case Enviroment.JUBLAWOMA_ADMIN:
        url = API_JUBLAWOMA_ADMIN
        break;
      case Enviroment.UNCLET:
        url = API_UNCLET
        break;
      case Enviroment.UNCLET_ADMIN:
        url = API_UNCLET_ADMIN
        break;
      case Enviroment.OLIUMBI:
        url = API_OLIUMBI
        break;
      case Enviroment.OLIUMBI_ADMIN:
        url = API_OLIUMBI_ADMIN
        break;
    }

    if (payload) {
      if (payload.body) {
        if (payload.body instanceof File) {
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
      response = await fetch(url + path + params, {
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
      if (response.headers.get("Content-Type").includes("application/json")) {
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
