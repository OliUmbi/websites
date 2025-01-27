import {Route, Routes} from "react-router-dom";
import Protected from "../../../components/protected/protected";
import {useEffect} from "react";
import useLocal from "../../../hooks/use-local";
import {Configuration} from "../../../interfaces/shared/configuration";
import {Language} from "../../../enums/shared/language";
import Shell from "../../../components/shell/shell";
import {SharedAccountPermissionPermission} from "../../../enums/shared/permission";
import OliumbiAdminLogin from "./oliumbi-admin-login";
import OliumbiAdminNotFound from "./oliumbi-admin-not-found";
import OliumbiAdminHome from "./oliumbi-admin-home";
import OliumbiAdminArticles from "./oliumbi-admin-articles";
import OliumbiAdminArticle from "./oliumbi-admin-article";
import OliumbiAdminNotify from "./oliumbi-admin-notify";

const OliumbiAdmin = () => {

  return (
      <Shell title="OliUmbi Admin" side={true} links={[
        {name: "Home", to: "/", primary: true},
        {name: "Articles", to: "/article", primary: true},
        {name: "Notify", to: "/notify", primary: true},
      ]}>
        <Routes>
          <Route path="/login" element={<OliumbiAdminLogin/>}/>
          <Route path="/*" element={<OliumbiAdminNotFound/>}/>
          <Route element={<Protected permissions={[SharedAccountPermissionPermission.OLIUMBI_ADMIN]}/>}>
            <Route path="/" element={<OliumbiAdminHome/>}/>
            <Route path="/article" element={<OliumbiAdminArticles/>}/>
            <Route path="/article/:id" element={<OliumbiAdminArticle />}/>
            <Route path="/notify" element={<OliumbiAdminNotify/>}/>
          </Route>
        </Routes>
      </Shell>
  )
}

export default OliumbiAdmin
