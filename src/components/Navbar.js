import logo from "../assets/img/logo-rakantip.svg";
// import "./App.css";

function Navbar({ overlayOn }) {
  return (
    <div className="nav-bar" id="nav-bar">
      <div className="nav-logo">
        <img src={logo} alt="Logo rakan.tip" />
      </div>
      <div className="nav-menu">
        <div className="menu-1">
          <a href="#page-utama">Beranda</a>
        </div>
        <div className="menu-2">
          <a href="#page-tentang-kami">Tentang Kami</a>
        </div>
        <div className="menu-3">
          <a href="#footer">Kontak</a>
        </div>
        <button
          type="button"
          className="menu-btn"
          value="Ayo Nitip"
          onClick={overlayOn}
        >
          Ayo Nitip
        </button>
      </div>
      <div className="dropdown">
        <div className="dropdown-btn">
          <svg>
            <use xlinkHref="#three-dash" />
          </svg>
        </div>
        <div className="dropdown-content">
          <a href="#page-utama" className="menu-1 drpdwn-hvr">
            Beranda
          </a>
          <a href="#page-tentang-kami" className="menu-2 drpdwn-hvr">
            Tentang Kami
          </a>
          <a href="#footer" className="menu-3 drpdwn-hvr">
            Kontak
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
