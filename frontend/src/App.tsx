import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import JublawomaHome from "./sites/jublawoma/jublawoma-home";
import UncletHome from "./sites/unclet/unclet-home";
import AdminHome from "./sites/admin/admin-home";

const App = () => {
  return (
      <>
        <Router basename="admin">
          <Routes>
            <Route path="/" element={<AdminHome/>}/>
          </Routes>
        </Router>
        <Router basename="jublawoma">
          <Routes>
            <Route path="/" element={<JublawomaHome/>}/>
          </Routes>
        </Router>
        <Router basename="unclet">
          <Routes>
            <Route path="/" element={<UncletHome/>}/>
          </Routes>
        </Router>
      </>
  );
};

export default App;
