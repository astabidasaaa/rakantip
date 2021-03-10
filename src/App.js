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
import { useState } from "react";
import { formState } from "./entry";

function App() {
  const [yangNitipState, setYangNitipState] = useState(formState);

  const handleYangNitipChange = (e) =>
    setYangNitipState({
      ...yangNitipState,
      [e.target.name]: [e.target.value],
    });

  const nitipApa = { nitip: "", catatan: "" };
  const [nitipState, setNitipState] = useState([{ ...nitipApa }]);

  const addNitip = () => {
    setNitipState([...nitipState, { ...nitipApa }]);
  };

  const handleNitipChange = (e) => {
    const updatedNitip = [...nitipState];
    updatedNitip[e.target.dataset.idx][e.target.alt] = e.target.value;
    setNitipState(updatedNitip);
  };

  const handleNitipSubmit = (e) => {
    e.preventDefault();
    setYangNitipState(formState);
    setNitipState([{ ...nitipApa }]);
    alert(
      "Penitipan telah disubmit oleh: " +
        yangNitipState.nama +
        " ke: " +
        yangNitipState.kemana
    );
    overlayOff();
    // console.log(yangNitipState);
    // console.log(nitipState);
  };

  const [reminderState, setReminderState] = useState("");
  const handleReminderChange = (e) => {
    setReminderState(e.target.value);
  };

  const handleReminderSubmit = (e) => {
    e.preventDefault();
    // console.log(reminderState);
    setReminderState("");
    alert("Pengingat telah dipasang ke: " + reminderState);
  };

  function overlayOn() {
    document.getElementById("overlay").style.display = "flex";
    document.body.classList.toggle("noscroll", true);
    document.getElementById("nav-bar").classList.toggle("pad-right", true);
  }

  function overlayOff() {
    document.getElementById("overlay").style.display = "none";
    document.body.classList.toggle("noscroll", false);
    document.getElementById("nav-bar").classList.toggle("pad-right", false);
  }

  return (
    <div className="App">
      <Navbar overlayOn={overlayOn} />
      <div className="container">
        <Form
          handleYangNitipChange={handleYangNitipChange}
          yangNitipState={yangNitipState}
          handleNitipChange={handleNitipChange}
          nitipState={nitipState}
          addNitip={addNitip}
          handleNitipSubmit={handleNitipSubmit}
          overlayOff={overlayOff}
        />
        <Beranda
          overlayOn={overlayOn}
          nitipState={nitipState}
          handleNitipChange={handleNitipChange}
        />
        <Jadwal
          reminderState={reminderState}
          handleReminderChange={handleReminderChange}
          handleReminderSubmit={handleReminderSubmit}
        />
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
