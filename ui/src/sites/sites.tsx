import JublawomaHome from "./jublawoma/jublawoma-home";
import JublawomaEvents from "./jublawoma/jublawoma-events";
import JublawomaArticles from "./jublawoma/jublawoma-articles";
import JublawomaArticle from "./jublawoma/jublawoma-article";
import JublawomaAbout from "./jublawoma/jublawoma-about";
import JublawomaJoin from "./jublawoma/jublawoma-join";
import JublawomaDonations from "./jublawoma/jublawoma-donations";
import JublawomaDonate from "./jublawoma/jublawoma-donate";
import JublawomaContact from "./jublawoma/jublawoma-contact";
import JublawomaLegal from "./jublawoma/jublawoma-legal";
import JublawomaPrivacy from "./jublawoma/jublawoma-privacy";
import JublawomaNotFound from "./jublawoma/jublawoma-not-found";

export const sites = [
  {
    domain: "jublawoma.ch",
    name: "Jubla Woma",
    description: "Jungwacht Blauring Wohlenschwil Mägenwil",
    logo: "/assets/jublawoma/images/logos/logo.png",
    icon: "/assets/jublawoma/images/logos/favicon.ico",
    side: false,
    links: [
      {
        name: "Home",
        path: "/",
        page: <JublawomaHome/>,
        listed: true,
        protected: false,
        primary: true,
      },
      {
        name: "Veranstaltungen",
        path: "/veranstaltungen",
        page: <JublawomaEvents/>,
        listed: true,
        protected: false,
        primary: true,
      },
      {
        name: "News",
        path: "/news",
        page: <JublawomaArticles/>,
        listed: true,
        protected: false,
        primary: true,
      },
      {
        name: "News",
        path: "/news/:id",
        page: <JublawomaArticle/>,
        listed: true,
        protected: false,
        primary: true,
      },
      {
        name: "Über uns",
        path: "/ueber-uns",
        page: <JublawomaAbout/>,
        listed: true,
        protected: false,
        primary: true,
      },
      {
        name: "Beitreten",
        path: "/beitreten",
        page: <JublawomaJoin/>,
        listed: true,
        protected: false,
        primary: true,
      },
      {
        name: "Spenden",
        path: "/spenden",
        page: <JublawomaDonations/>,
        listed: false,
        protected: false,
        primary: true,
      },
      {
        name: "Spenden",
        path: "/spenden/:id",
        page: <JublawomaDonate/>,
        listed: false,
        protected: false,
        primary: true,
      },
      {
        name: "Instagram",
        path: "https://www.instagram.com/jubla_woma/",
        page: null,
        listed: true,
        protected: false,
        primary: false,
      },
      {
        name: "Kontakt",
        path: "/kontakt",
        page: <JublawomaContact/>,
        listed: true,
        protected: false,
        primary: false,
      },
      {
        name: "Impressum",
        path: "/impressum",
        page: <JublawomaLegal/>,
        listed: true,
        protected: false,
        primary: false,
      },
      {
        name: "Datenschutz",
        path: "/datenschutz",
        page: <JublawomaPrivacy/>,
        listed: true,
        protected: false,
        primary: false,
      },
      {
        name: "Seite nicht gefunden",
        path: "/*",
        page: <JublawomaNotFound/>,
        listed: false,
        protected: false,
        primary: false,
      }
    ]
  }
]
