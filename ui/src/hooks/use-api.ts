import {useCallback, useState} from "react";
import {Method} from "../enums/shared/method";
import {Enviroment} from "../enums/shared/enviroment";
import {configuration} from "../services/configuration";
import useLocal from "./use-local";
import {AccountSessionCreateResponse} from "../interfaces/shared/account";
import {useNavigate} from "react-router-dom";

interface Param {
  key: string,
  value: string
}

interface Payload {
  body?: any,
  path?: string,
  params?: Param[]
}

const useApi = <T>(enviroment: Enviroment, method: Method, path: string): {
  execute: (payload?: Payload) => void,
  data: T | null,
  error: string | null,
  loading: boolean
} => {

  const navigate = useNavigate()

  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const session = useLocal<AccountSessionCreateResponse>("session")

  const execute = useCallback(async (payload?: Payload) => {
    setError(null)
    setLoading(true)

    let url = ""
    let headers = {}
    let body = null

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

    url += path

    if (payload) {
      if (payload.body) {
        if (payload.body instanceof File) {
          body = payload.body
        } else {
          headers = {...headers, "Content-Type": "application/json; charset=UTF-8"}
          body = JSON.stringify(payload.body)
        }
      }

      if (payload.path) {
        url += payload.path
      }

      if (payload.params && payload.params.length > 0) {
        url += "?" + payload.params.map(value => value.key + "=" + value.value).join("&")
      }
    }

    if (session.value) {
      headers = {...headers, "Authentication": session.value.token}
    }

    let response;
    try {
      response = await fetch(url, {
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

    if (response.status == 401) {
      setError(data.message)
      setLoading(false)

      navigate("/login")
      return
    }

    if (response.status !== 200) {
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
