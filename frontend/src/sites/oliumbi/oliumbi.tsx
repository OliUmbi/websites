import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import OliumbiHome from "./oliumbi-home";

const OliUmbi = () => {

  return (
      <Router basename="oliumbi">
        <Routes>
          <Route path="/" element={<OliumbiHome/>}/>
        </Routes>
      </Router>
  )
}

export default OliUmbi
