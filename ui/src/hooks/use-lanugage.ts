import useLocal from "./use-local";
import {Configuration} from "../interfaces/global/configuration";
import {Language} from "../enums/global/language";
import english from "../translations/english.json";
import german from "../translations/german.json";

const useLanguage = (): (key: string) => string => {

  const [configuration] = useLocal<Configuration>("configuration")

  return (key: string): string => {
    // todo depending on mode fall back to "translation not found" or to the key itself
    switch (configuration?.language) {
      case Language.ENGLISH:
        // @ts-ignore
        return english[key] || "Translation not found."
      case Language.GERMAN:
        // @ts-ignore
        return german[key] || "Übersetzung wurde nicht gefunden."
      default:
        return "No language is set."
    }
  }
}

export default useLanguage;
