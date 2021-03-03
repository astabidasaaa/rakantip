import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Beranda from "./containers/Beranda";
import Jadwal from "./containers/Jadwal";
import Informasi from "./containers/Informasi";
import Tentang from "./containers/Tentang";
import Kenapa from "./containers/Kenapa";
import Area from "./containers/Area";
import Form from "./containers/Form";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Form />
        <Beranda />
        <Jadwal />
        <Informasi />
        <Tentang />
        <Kenapa />
        <Area />
      </div>

      <Footer />
    </div>
  );
}

export default App;
