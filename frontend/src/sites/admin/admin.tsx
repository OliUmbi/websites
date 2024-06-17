import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AdminHome from "./admin-home";

const Admin = () => {

  return (
      <Router basename="admin">
        <Routes>
          <Route path="/" element={<AdminHome/>}/>
        </Routes>
      </Router>
  )
}

export default Admin
