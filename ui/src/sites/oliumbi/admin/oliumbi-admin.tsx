import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Protected from "../../../components/protected/protected";
import {Permission} from "../../../enums/permission";
import OliumbiAdminLogin from "./oliumbi-admin-login";
import OliumbiAdminHome from "./oliumbi-admin-home";
import {useEffect} from "react";
import useLocal from "../../../hooks/use-local";
import {Configuration} from "../../../interfaces/configuration";
import {Language} from "../../../enums/language";
import Shell from "../../../components/shell/shell";
import OliumbiAdminTest from "./oliumbi-admin-test";

const OliumbiAdmin = () => {

  const [, setConfiguration] = useLocal<Configuration>("configuration")

  useEffect(() => {
    setConfiguration({
      language: Language.ENGLISH
    })
  }, [])

  return (
      <Router basename="oliumbi-admin">
        <Shell title="OliUmbi Admin" side={true} links={[
          {name: "Home", to: "/", primary: true},
          {name: "Veranstaltungen", to: "/veranstaltungen", primary: true},
          {name: "Beiträge", to: "/beitraege", primary: true},
          {name: "Über uns", to: "/ueber-uns", primary: true},
          {name: "Beitreten", to: "/beitreten", primary: true},
          {name: "Mitglieder", to: "/mitglieder", primary: true},
          {name: "Instagram", to: "https://www.instagram.com/jubla_woma/", primary: false},
          {name: "Kontakt", to: "/kontakt", primary: false},
          {name: "Impressum", to: "/impressum", primary: false},
          {name: "Datenschutz", to: "/datenschutz", primary: false},
        ]}>
          <Routes>
            <Route path="/login" element={<OliumbiAdminLogin/>}/>
            <Route path="/test" element={<OliumbiAdminTest/>}/>
            <Route element={<Protected permissions={[Permission.OLIUMBI_ADMIN]}/>}>
              <Route path="/" element={<OliumbiAdminHome/>}/>
            </Route>
          </Routes>
        </Shell>
      </Router>
  )
}

export default OliumbiAdmin
