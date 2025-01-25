import {Route, Routes} from "react-router-dom";
import Shell from "../../components/shell/shell";
import OliumbiHome from "./oliumbi-home";
import OliumbiNotFound from "./oliumbi-not-found";
import OliumbiArticle from "./oliumbi-article";

const Oliumbi = () => {

  return (
      <Shell title="OliUmbi" side={false} links={[
        {name: "Home", to: "/", primary: true},
        {name: "Jubla Woma", to: "https://jublawoma.ch", primary: true},
        {name: "Uncle-T", to: "https://uncle-t.ch", primary: true},
        {name: "GitHub", to: "https://github.com/OliUmbi", primary: false}
      ]}>
        <Routes>
          <Route path="/" element={<OliumbiHome/>}/>
          <Route path="/article/:id" element={<OliumbiArticle/>}/>
          <Route path="/*" element={<OliumbiNotFound/>}/>
        </Routes>
      </Shell>
  )
}

export default Oliumbi
