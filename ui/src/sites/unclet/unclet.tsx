import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Shell from "../../components/shell/shell";
import UncletHome from "./unclet-home";
import UncletNotFound from "./unclet-not-found";
import UncletPrivate from "./unclet-private";
import UncletCatering from "./unclet-catering";
import UncletCourses from "./unclet-courses";
import UncletCourse from "./unclet-course";
import UncletAbout from "./unclet-about";
import UncletContact from "./unclet-contact";
import UncletTerms from "./unclet-terms";
import UncletLegal from "./unclet-legal";
import UncletPrivacy from "./unclet-privacy";

const Unclet = () => {

  return (
      <Shell title="Uncle-T" side={false} logo="/assets/unclet/images/logos/logo.png" icon="/assets/unclet/images/logos/favicon.ico" links={[
        {name: "Home", to: "/", primary: true},
        {name: "Privatkoch", to: "/privatkoch", primary: true},
        {name: "Catering", to: "/catering", primary: true},
        {name: "Kurse", to: "/kurse", primary: true},
        {name: "Über Mich", to: "/ueber-uns", primary: true},
        {name: "Instagram", to: "https://www.instagram.com/unclet_gmbh/", primary: false},
        {name: "Kontakt", to: "/kontakt", primary: false},
        {name: "Geschäftsbedingung", to: "/geschaeftsbedingung", primary: false},
        {name: "Impressum", to: "/impressum", primary: false},
        {name: "Datenschutz", to: "/datenschutz", primary: false}
      ]}>
        <Routes>
          <Route path="/" element={<UncletHome/>}/>
          <Route path="/privatkoch" element={<UncletPrivate/>}/>
          <Route path="/catering" element={<UncletCatering/>}/>
          <Route path="/kurse" element={<UncletCourses/>}/>
          <Route path="/kurse/:id" element={<UncletCourse/>}/>
          <Route path="/ueber-uns" element={<UncletAbout/>}/>
          <Route path="/kontakt" element={<UncletContact/>}/>
          <Route path="/geschaeftsbedingung" element={<UncletTerms/>}/>
          <Route path="/impressum" element={<UncletLegal/>}/>
          <Route path="/datenschutz" element={<UncletPrivacy/>}/>
          <Route path="/*" element={<UncletNotFound/>}/>
        </Routes>
      </Shell>
  )
}

export default Unclet
