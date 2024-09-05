import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import JublawomaHome from "./jublawoma-home";
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
import Shell from "../../components/shell/shell";

const Jublawoma = () => {

  return (
        <Router basename="jublawoma">
          <Shell title="Jubla Woma" side={false} logo="/assets/jublawoma/images/logos/logo.png" icon="/assets/jublawoma/images/logos/favicon.ico" links={[
            {name: "Home", to: "/", primary: true},
            {name: "Veranstaltungen", to: "/veranstaltungen", primary: true},
            {name: "Über uns", to: "/ueber-uns", primary: true},
            {name: "Beitreten", to: "/beitreten", primary: true},
            {name: "Instagram", to: "https://www.instagram.com/jubla_woma/", primary: false},
            {name: "Kontakt", to: "/kontakt", primary: false},
            {name: "Impressum", to: "/impressum", primary: false},
            {name: "Datenschutz", to: "/datenschutz", primary: false},
          ]}>
            <Routes>
              <Route path="/" element={<JublawomaHome/>}/>
              <Route path="/veranstaltungen" element={<JublawomaEvents/>}/>
              <Route path="/ueber-uns" element={<JublawomaAbout/>}/>
              <Route path="/beitreten" element={<JublawomaJoin/>}/>
              <Route path="/spenden" element={<JublawomaDonate/>}/>
              <Route path="/kontakt" element={<JublawomaContact/>}/>
              <Route path="/impressum" element={<JublawomaLegal/>}/>
              <Route path="/datenschutz" element={<JublawomaPrivacy/>}/>
            </Routes>
          </Shell>
        </Router>
  )
}

export default Jublawoma
