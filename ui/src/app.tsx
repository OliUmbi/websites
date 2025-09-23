import Jublawoma from "./sites/jublawoma/jublawoma";
import JublawomaAdmin from "./sites/jublawoma/admin/jublawoma-admin";
import Unclet from "./sites/unclet/unclet";
import UncletAdmin from "./sites/unclet/admin/unclet-admin";
import Oliumbi from "./sites/oliumbi/oliumbi";
import OliumbiAdmin from "./sites/oliumbi/admin/oliumbi-admin";
import {BrowserRouter} from "react-router-dom";
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
          domain === "admin.uncle-t.ch" ? <UncletAdmin/> : ""
        }
        {
          domain === "oliumbi.ch" ? <Oliumbi/> : ""
        }
        {
          domain === "admin.oliumbi.ch" ? <OliumbiAdmin/> : ""
        }
      </BrowserRouter>
  );
};

export default App;
