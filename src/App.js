import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Beranda from "./containers/Beranda";
import Jadwal from "./containers/Jadwal";
import Informasi from "./containers/Informasi";
import Tentang from "./containers/Tentang";
import Kenapa from "./containers/Kenapa";
import Area from "./containers/Area";
// import Test from "./containers/Test";
import Form from "./containers/Form";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";

function App() {
  const nitipApa = { nitip: "", catatan: "" };
  const [nitipState, setNitipState] = useState([{ ...nitipApa }]);
  const [yangNitip, setYangNitip] = useState({});

  const addNitip = () => {
    setNitipState([...nitipState, { ...nitipApa }]);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Form nitipState={nitipState} addNitip={addNitip} />
        <Beranda />
        <Jadwal />
        <Informasi />
        <Tentang />
        <Kenapa />
        <Area />
        {/* <Test /> */}
      </div>

      <Footer />
    </div>
  );
}

export default App;
