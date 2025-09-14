import JublawomaHome from "./jublawoma-home";
import JublawomaEvents from "./jublawoma-events";
import JublawomaAbout from "./jublawoma-about";
import JublawomaJoin from "./jublawoma-join";
import JublawomaDonations from "./jublawoma-donations";
import JublawomaContact from "./jublawoma-contact";
import JublawomaLegal from "./jublawoma-legal";
import JublawomaPrivacy from "./jublawoma-privacy";
import Shell from "../../components/shell/shell";
import JublawomaDonate from "./jublawoma-donate";
import JublawomaNotFound from "./jublawoma-not-found";
import JublawomaArticles from "./jublawoma-articles";
import JublawomaArticle from "./jublawoma-article";
import {Route, Routes} from "react-router-dom";
import JublawomaThanks from "./jublawoma-thanks";

const Jublawoma = () => {

  return (
        <Shell title="Jubla Woma" side={false} logo="/assets/jublawoma/images/logos/logo.png" icon="/assets/jublawoma/images/logos/favicon.ico" links={[
          {name: "Home", to: "/", primary: true},
          {name: "Spenden", to: "/spenden", primary: true},
          {name: "Veranstaltungen", to: "/veranstaltungen", primary: true},
          {name: "News", to: "/news", primary: true},
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
            <Route path="/news" element={<JublawomaArticles/>}/>
            <Route path="/news/:id" element={<JublawomaArticle/>}/>
            <Route path="/ueber-uns" element={<JublawomaAbout/>}/>
            <Route path="/beitreten" element={<JublawomaJoin/>}/>
            <Route path="/spenden" element={<JublawomaDonations/>}/>
            <Route path="/spenden/:id" element={<JublawomaDonate/>}/>
            <Route path="/spenden/danke" element={<JublawomaThanks/>}/>
            <Route path="/kontakt" element={<JublawomaContact/>}/>
            <Route path="/impressum" element={<JublawomaLegal/>}/>
            <Route path="/datenschutz" element={<JublawomaPrivacy/>}/>
            <Route path="/*" element={<JublawomaNotFound/>}/>
          </Routes>
        </Shell>
  )
}

export default Jublawoma
