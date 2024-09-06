import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import UncletHome from "./unclet-home";

const Unclet = () => {

  return (
      <Routes>
        <Route path="/" element={<UncletHome/>}/>
      </Routes>
  )
}

export default Unclet
