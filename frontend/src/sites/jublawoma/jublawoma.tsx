import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import JublawomaHome from "./jublawoma-home";
import Header from "../../components/header/header";
import JublawomaEvents from "./jublawoma-events";
import JublawomaPosts from "./jublawoma-posts";
import JublawomaPost from "./jublawoma-post";
import JublawomaAbout from "./jublawoma-about";
import JublawomaJoin from "./jublawoma-join";
import JublawomaMembers from "./jublawoma-members";
import JublawomaDonate from "./jublawoma-donate";
import JublawomaClothes from "./jublawoma-clothes";
import JublawomaContact from "./jublawoma-contact";
import JublawomaLegal from "./jublawoma-legal";
import JublawomaPrivacy from "./jublawoma-privacy";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";

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
          <Breadcrumbs/>
          <Routes>
            <Route path="/" element={<JublawomaHome/>}/>
            <Route path="/veranstaltungen" element={<JublawomaEvents/>}/>
            <Route path="/beitraege" element={<JublawomaPosts/>}/>
            <Route path="/beitraege/:id" element={<JublawomaPost/>}/>
            <Route path="/ueber-uns" element={<JublawomaAbout/>}/>
            <Route path="/beitreten" element={<JublawomaJoin/>}/>
            <Route path="/mitglieder" element={<JublawomaMembers/>}/>
            <Route path="/spenden" element={<JublawomaDonate/>}/>
            <Route path="/kleider" element={<JublawomaClothes/>}/>
            <Route path="/kontakt" element={<JublawomaContact/>}/>
            <Route path="/impressum" element={<JublawomaLegal/>}/>
            <Route path="/datenschutz" element={<JublawomaPrivacy/>}/>
          </Routes>
        </Router>
  )
}

export default Jublawoma
