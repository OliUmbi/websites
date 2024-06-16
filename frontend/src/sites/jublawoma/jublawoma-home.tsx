import Header from "../../components/header/header";

const JublawomaHome = () => {

  return (
      <>
        <Header links={[
          {name: "Home", to: "/"},
          {name: "Anlässe", to: "/"},
          {name: "News", to: "/"},
          {name: "Über uns", to: "/"},
          {name: "Beitretten", to: "/"},
          {name: "Mitglieder", to: "/"}
        ]} sublinks={[
          {name: "Instagram", to: "/impressum"},
          {name: "Kontakt", to: "/impressum"},
          {name: "Impressum", to: "/impressum"},
          {name: "Datenschutz", to: "/impressum"},
        ]}/>
        <h1>Jubla WoMa</h1>
        <small>a oliUmbi production</small>
      </>
  )
}

export default JublawomaHome
