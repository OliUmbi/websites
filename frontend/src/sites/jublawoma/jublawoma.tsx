import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import JublawomaHome from "./jublawoma-home";
import Header from "../../components/header/header";

const Jublawoma = () => {

  return (
        <Router basename="jublawoma">
          <Header links={[
            {name: "Home", to: "/"},
            {name: "Veranstaltungen", to: "/veranstaltungen"},
            {name: "Beiträge", to: "/beitraege"},
            {name: "Über uns", to: "/ueber-uns"},
            {name: "Beitreten", to: "/beitreten"},
            {name: "Mitglieder", to: "/mitglieder"}
          ]} sublinks={[
            {name: "Instagram", to: "https://www.instagram.com/jubla_woma/"},
            {name: "Kontakt", to: "/kontakt"},
            {name: "Impressum", to: "/impressum"},
            {name: "Datenschutz", to: "/datenschutz"},
          ]}/>
          <Routes>
            <Route path="/" element={<JublawomaHome/>}/>
            <Route path="/veranstaltungen" element={<JublawomaHome/>}/>
            <Route path="/beitraege" element={<JublawomaHome/>}/>
            <Route path="/beitraege/:id" element={<JublawomaHome/>}/>
            <Route path="/ueber-uns" element={<JublawomaHome/>}/>
            <Route path="/beitreten" element={<JublawomaHome/>}/>
            <Route path="/mitglieder" element={<JublawomaHome/>}/>
            <Route path="/mitglieder/spenden" element={<JublawomaHome/>}/>
            <Route path="/mitglieder/kleider" element={<JublawomaHome/>}/>
            <Route path="/kontakt" element={<JublawomaHome/>}/>
            <Route path="/impressum" element={<JublawomaHome/>}/>
            <Route path="/datenschutz" element={<JublawomaHome/>}/>
          </Routes>
        </Router>
  )
}

export default Jublawoma
