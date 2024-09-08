import OliUmbi from "./sites/oliumbi/oliumbi";
import OliumbiAdmin from "./sites/oliumbi/admin/oliumbi-admin";
import Jublawoma from "./sites/jublawoma/jublawoma";
import Unclet from "./sites/unclet/unclet";
import {BrowserRouter} from "react-router-dom";

const App = () => {

  let domain = window.location.hostname

  // todo configure with .env
  // todo make more stable

  return (
      <BrowserRouter>
        {
          domain === "jublawoma.ch" || true ? <Jublawoma/> : ""
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
