// import logo from "./logo.svg";
// import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Beranda from "./containers/Beranda";
import Jadwal from "./containers/Jadwal";
import Informasi from "./containers/Informasi";
import { test } from "./entry";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Beranda />
        <Jadwal a={test} />
        <Informasi />
      </div>

      <Footer />
    </div>
  );
}

export default App;
