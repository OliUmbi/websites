import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Protected from "../../../components/protected/protected";
import {Permission} from "../../../enums/permission";
import OliumbiAdminLogin from "./oliumbi-admin-login";
import OliumbiAdminHome from "./oliumbi-admin-home";

const OliumbiAdmin = () => {

  return (
      <Router basename="oliumbi-admin">
        <Routes>
          <Route path="/login" element={<OliumbiAdminLogin/>}/>
          <Route element={<Protected permissions={[Permission.OLIUMBI_ADMIN]}/>}>
            <Route path="/" element={<OliumbiAdminHome/>}/>
          </Route>
        </Routes>
      </Router>
  )
}

export default OliumbiAdmin
