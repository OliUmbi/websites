import OliUmbi from "./sites/oliumbi/oliumbi";
import OliumbiAdmin from "./sites/oliumbi/admin/oliumbi-admin";
import Jublawoma from "./sites/jublawoma/jublawoma";
import Unclet from "./sites/unclet/unclet";
import {BrowserRouter} from "react-router-dom";
import JublawomaAdmin from "./sites/jublawoma/admin/jublawoma-admin";
import "./prototypes/array";

const App = () => {

  // todo make this global and return a enviroment object to get configurations and so on
  let domain = window.location.hostname

  // todo configure with .env
  // todo make more stable

  return (
      <BrowserRouter>
        {
          domain === "jublawoma.ch" || true ? <Jublawoma/> : ""
        }
        {
          domain === "admin.jublawoma.ch" ? <JublawomaAdmin/> : ""
        }
        {
          domain === "uncle-t.ch" ? <Unclet/> : ""
        }
        {
          domain === "oliumbi.ch" ? <OliUmbi/> : ""
        }
        {
          domain === "admin.oliumbi.ch" ? <OliumbiAdmin/> : ""
        }
      </BrowserRouter>
  );
};

export default App;
