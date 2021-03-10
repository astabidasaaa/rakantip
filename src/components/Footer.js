// import logo from "../assets/img/logo-rakantip.svg";
// import "./App.css";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="kontak">
        <h5>Hubungi Kami</h5>
        <div className="konten">
          <div className="kiri">
            <p className="sub-p-black">Jalan Buah Batu 123</p>
            <p className="sub-p-black">Buah Batu</p>
            <p className="sub-p-black">Kota Bandung, Jawa Barat</p>
            <p className="sub-p-black">Indonesia</p>
          </div>
          <div className="kanan">
            <p className="sub-p-black">+6281320790461</p>
            <p className="sub-p-black">rakan@tip.com</p>
          </div>
        </div>
      </div>
      <div className="media-sosial">
        <h5>Ikuti Kami</h5>
        <div className="instagram">
          <svg>
            <use xlinkHref="#instagram" />
          </svg>
          <p className="sub-p-black">
            <a href="#/">@rakan.tip</a>
          </p>
        </div>
      </div>
      <div className="pranala-luar">
        <p className="sub-p-black">
          <a href="#/">Syarat & Ketentuan</a>
        </p>
        <p className="sub-p-black">
          <a href="#/">Kebijakan Privasi</a>
        </p>
        <p className="sub-p-black">Copyright Rakan.tip 2021</p>
        <p className="sub-p-black">
          Site oleh: <a href="#/">Sangkara</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
