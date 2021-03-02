// import logo from "../assets/img/logo-rakantip-polos-01.png";
// import "./App.css";

function Jadwal() {
  return (
    <div className="page-jadwal" id="page-jadwal">
      <h3 className="jadwal-title">Keberangkatan Kami</h3>
      <div className="jadwal-content">
        <div className="countdown">
          <div className="countdown-text">
            <div className="route">
              <p className="p-black">Bandung</p>
              <svg>
                <use xlinkHref="#right-arrow" />
              </svg>
              <p className="p-black">Jakarta</p>
            </div>
            <p className="sub-p-grey">Senin, 15 Februari 2021</p>
          </div>
          <div className="countdown-timer">
            <div className="unit hari">
              <h2>444</h2>
              <p className="sub-p-black">Hari</p>
            </div>
            <h4>:</h4>
            <div className="unit jam">
              <h2>44</h2>
              <p className="sub-p-black">Jam</p>
            </div>
            <h4>:</h4>
            <div className="unit menit">
              <h2>44</h2>
              <p className="sub-p-black">Menit</p>
            </div>
            <h4>:</h4>
            <div className="unit detik">
              <h2>44</h2>
              <p className="sub-p-black">Detik</p>
            </div>
          </div>
        </div>
        <div className="reminder">
          <p className="reminder-text sub-p-grey">
            Dapatkan notifikasi saat kami akan membuka penitipan!
          </p>
          <form className="reminder-form" action="#">
            <input
              type="text"
              id="reminder-input"
              name="reminder-input"
              className="reminder-input"
              value="Masukkan e-mail kamu"
            />
            <input type="submit" value="Ingatkan" className="reminder-submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Jadwal;
