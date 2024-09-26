import {Route, Routes} from "react-router-dom";
import Shell from "../../../components/shell/shell";
import JublawomaAdminHome from "./jublawoma-admin-home";
import JublawomaAdminNotFound from "./jublawoma-admin-not-found";
import Protected from "../../../components/protected/protected";
import JublawomaAdminArticle from "./jublawoma-admin-article";
import JublawomaAdminArticles from "./jublawoma-admin-articles";
import JublawomaAdminLogin from "./jublawoma-admin-login";
import {SharedAccountPermissionPermission} from "../../../enums/shared/permission";

const JublawomaAdmin = () => {

  return (
        <Shell title="Jubla Woma Admin" side={true} logo="/assets/jublawoma/images/logos/logo.png" icon="/assets/jublawoma/images/logos/favicon.ico" links={[
          {name: "Home", to: "/", primary: true},
          {name: "News", to: "/news", primary: true},
          ]}>
          <Routes>
            <Route path="/login" element={<JublawomaAdminLogin/>}/>
            <Route path="/*" element={<JublawomaAdminNotFound/>}/>
            <Route element={<Protected permissions={[SharedAccountPermissionPermission.JUBLAWOMA_ADMIN]}/>}>
              <Route path="/" element={<JublawomaAdminHome/>}/>
              <Route path="/news" element={<JublawomaAdminArticles/>}/>
              <Route path="/news/:id" element={<JublawomaAdminArticle />}/>
            </Route>
          </Routes>
        </Shell>
  )
}

export default JublawomaAdmin
