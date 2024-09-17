import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import Shell from "../../../components/shell/shell";
import JublawomaAdminHome from "./jublawoma-admin-home";
import JublawomaAdminNotFound from "./jublawoma-admin-not-found";

const JublawomaAdmin = () => {

  return (
        <Shell title="Jubla Woma Admin" side={true} logo="/assets/jublawoma/images/logos/logo.png" icon="/assets/jublawoma/images/logos/favicon.ico" links={[
          {name: "Home", to: "/", primary: true},
          ]}>
          <Routes>
            <Route path="/" element={<JublawomaAdminHome/>}/>
            <Route path="/*" element={<JublawomaAdminNotFound/>}/>
          </Routes>
        </Shell>
  )
}

export default JublawomaAdmin
