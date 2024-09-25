import {Route, Routes} from "react-router-dom";
import Shell from "../../../components/shell/shell";
import JublawomaAdminHome from "./jublawoma-admin-home";
import JublawomaAdminNotFound from "./jublawoma-admin-not-found";
import OliumbiAdminLogin from "../../oliumbi/admin/oliumbi-admin-login";
import Protected from "../../../components/protected/protected";
import {Permission} from "../../../enums/shared/permission";
import JublawomaAdminArticle from "./jublawoma-admin-article";
import JublawomaAdminArticles from "./jublawoma-admin-articles";
import JublawomaAdminLogin from "./jublawoma-admin-login";

const JublawomaAdmin = () => {

  return (
        <Shell title="Jubla Woma Admin" side={true} logo="/assets/jublawoma/images/logos/logo.png" icon="/assets/jublawoma/images/logos/favicon.ico" links={[
          {name: "Home", to: "/", primary: true},
          {name: "News", to: "/article", primary: true},
          ]}>
          <Routes>
            <Route path="/login" element={<JublawomaAdminLogin/>}/>
            <Route path="/*" element={<JublawomaAdminNotFound/>}/>
            <Route element={<Protected permissions={[Permission.JUBLAWOMA_ADMIN]}/>}>
              <Route path="/" element={<JublawomaAdminHome/>}/>
              <Route path="/article" element={<JublawomaAdminArticles/>}/>
              <Route path="/article/:id" element={<JublawomaAdminArticle />}/>
            </Route>
          </Routes>
        </Shell>
  )
}

export default JublawomaAdmin
