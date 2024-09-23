import {useCallback, useState} from "react";
import {Method} from "../enums/shared/method";
import {Enviroment} from "../enums/shared/enviroment";
import {configuration} from "../services/configuration";

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

    // todo move this somewhere else
    switch (enviroment) {
      case Enviroment.JUBLAWOMA:
        url = configuration.api.jublawoma
        break;
      case Enviroment.JUBLAWOMA_ADMIN:
        url = configuration.api.jublawomaAdmin
        break;
      case Enviroment.UNCLET:
        url = configuration.api.unclet
        break;
      case Enviroment.UNCLET_ADMIN:
        url = configuration.api.uncletAdmin
        break;
      case Enviroment.OLIUMBI:
        url = configuration.api.oliumbi
        break;
      case Enviroment.OLIUMBI_ADMIN:
        url = configuration.api.oliumbiAdmin
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
