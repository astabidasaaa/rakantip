// import logo from "../assets/img/logo-rakantip-polos-01.png";
// import "./App.css";
import { jadwal } from "../entry";

function Jadwal({ reminderState, handleReminderChange, handleReminderSubmit }) {
  const countDownDate = new Date(jadwal.countdown).getTime();

  // Update the count down every 1 second
  const x = setInterval(function () {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    if (distance >= 0) {
      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("minutes").innerHTML = minutes;
      document.getElementById("seconds").innerHTML = seconds;
    }

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown-timer").innerHTML =
        "Belum ada jadwal keberangkatan selanjutnya";
    }
  }, 1000);

  return (
    <div className="page-jadwal" id="page-jadwal">
      <h3 className="jadwal-title">Keberangkatan Kami</h3>
      <div className="jadwal-content">
        <div className="countdown">
          <div className="countdown-text">
            <div className="route">
              <p className="p-black">{jadwal.dari}</p>
              <svg>
                <use xlinkHref="#right-arrow" />
              </svg>
              <p className="p-black">{jadwal.ke}</p>
            </div>
            <p className="sub-p-grey" id="countdown-timer">
              {jadwal.display}
            </p>
          </div>
          <div className="countdown-timer">
            <div className="unit hari">
              <h2 id="days">0</h2>
              <p className="sub-p-black">Hari</p>
            </div>
            <h4>:</h4>
            <div className="unit jam">
              <h2 id="hours">0</h2>
              <p className="sub-p-black">Jam</p>
            </div>
            <h4>:</h4>
            <div className="unit menit">
              <h2 id="minutes">0</h2>
              <p className="sub-p-black">Menit</p>
            </div>
            <h4>:</h4>
            <div className="unit detik">
              <h2 id="seconds">0</h2>
              <p className="sub-p-black">Detik</p>
            </div>
          </div>
        </div>
        <div className="reminder">
          <p className="reminder-text sub-p-grey">
            Dapatkan notifikasi saat kami akan membuka penitipan!
          </p>
          <form className="reminder-form" onSubmit={handleReminderSubmit}>
            <input
              type="email"
              id="reminder-input"
              name="reminder-input"
              className="reminder-input"
              placeholder="masukkan email kamu"
              value={reminderState.email}
              onChange={handleReminderChange}
              required
            />
            <input type="submit" value="Ingatkan" className="reminder-submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Jadwal;
