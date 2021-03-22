import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Beranda from "./containers/Beranda";
import Jadwal from "./containers/Jadwal";
import Informasi from "./containers/Informasi";
import Tentang from "./containers/Tentang";
import Kenapa from "./containers/Kenapa";
import Area from "./containers/Area";
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

  const nitipApa = {};
  const [nitipState, setNitipState] = useState([{ ...nitipApa }]);

  const addNitip = () => {
    setNitipState([...nitipState, { ...nitipApa }]);
  };

  const deleteNitip = (idx) => {
    const updatedNitip = nitipState.filter((item, sidx) => idx !== sidx);
    setNitipState(updatedNitip);
  };

  const handleNitipChange = (e) => {
    const updatedNitip = [...nitipState];
    updatedNitip[e.target.dataset.idx][e.target.name] = e.target.value;
    setNitipState(updatedNitip);
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleNitipSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body:
        encode({
          "form-name": "form-nitip",
          ...yangNitipState,
        }) +
        "&" +
        nitipState.map((item) => encode(item)).join("&"),
    })
      .then(() =>
        alert("Penitipan telah disubmit. Terima kasih sudah menitip!")
      )
      .catch((error) => alert(error));

    e.preventDefault();

    setYangNitipState(formState);

    setNitipState([{ ...nitipApa }]);

    // alert("Penitipan telah disubmit. Terima kasih sudah menitip!");
    overlayOff();
  };

  const reminderDefault = { email: "" };
  const [reminderState, setReminderState] = useState(reminderDefault);

  const handleReminderChange = (e) => {
    const { name, value } = e.target;
    setReminderState({ [name]: value });
  };

  const handleReminderSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "reminder",
        ...reminderState,
      }),
    })
      .then(() => alert("Pengingat telah dipasang!"))
      .catch((error) => alert(error));

    e.preventDefault();
    setReminderState(reminderDefault);
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
    <div className="App" id="App">
      <Navbar overlayOn={overlayOn} />
      <div className="container">
        <Form
          handleYangNitipChange={handleYangNitipChange}
          yangNitipState={yangNitipState}
          handleNitipChange={handleNitipChange}
          nitipState={nitipState}
          addNitip={addNitip}
          deleteNitip={deleteNitip}
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
      </div>

      <Footer />
    </div>
  );
}

export default App;
