import useLocal from "./use-local";
import {Configuration} from "../interfaces/configuration";
import {Language} from "../enums/language";
import english from "../translations/english.json";
import german from "../translations/german.json";

const useLanguage = (): (key: string) => string => {

  const [configuration] = useLocal<Configuration>("configuration")

  const translation = (key: string): string => {

    switch (configuration?.language) {
      case Language.ENGLISH:
        return english[key] || "Translation not found."
      case Language.GERMAN:
        return german[key] || "Übersetzung wurde nicht gefunden."
      default:
        return "No language is set."
    }
  }

  return translation
}

export default useLanguage;
