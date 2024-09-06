import {Route, Routes} from "react-router-dom";
import OliumbiHome from "./oliumbi-home";

const OliUmbi = () => {

  return (
      <Routes>
        <Route path="/" element={<OliumbiHome/>}/>
      </Routes>
  )
}

export default OliUmbi
