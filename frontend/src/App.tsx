import OliUmbi from "./sites/oliumbi/oliumbi";
import OliumbiAdmin from "./sites/oliumbi/admin/oliumbi-admin";
import Jublawoma from "./sites/jublawoma/jublawoma";
import Unclet from "./sites/unclet/unclet";

const App = () => {
  return (
      <>
        <OliUmbi/>
        <OliumbiAdmin/>
        <Jublawoma/>
        <Unclet/>
      </>
  );
};

export default App;
