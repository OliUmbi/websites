import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import UncletHome from "./unclet-home";

const Unclet = () => {

  return (
      <Router basename="unclet">
        <Routes>
          <Route path="/" element={<UncletHome/>}/>
        </Routes>
      </Router>
  )
}

export default Unclet
