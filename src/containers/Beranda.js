import logo from "../assets/img/logo-rakantip-polos-01.png";
import { nitipPlaceholder } from "../entry";
// import "./App.css";

function Beranda({ overlayOn, nitipState, handleNitipChange }) {
  return (
    <div className="page-utama">
      <a className="anchor" id="page-utama" href="#"></a>
      <div className="hero">
        <div className="hero-text">
          <h1>Nitip apapun yang kamu suka</h1>
          <p className="p-grey">
            Jasa titip serba-serbi, makanan ataupun barang, khususnya UMKM
            makanan / usaha rumah tangga.
          </p>
        </div>
        <div className="hero-logo">
          <img src={logo} alt="Logo rakan.tip" />
        </div>
      </div>
      <div className="form-nitip">
        <input
          type="text"
          id="nitip-input"
          name="nitip-0"
          className="nitip-input"
          data-idx="0"
          alt="nitip"
          autoComplete="off"
          value={nitipState[0].nitip}
          placeholder={nitipPlaceholder.nitip}
          onChange={handleNitipChange}
        />
        <button type="button" className="nitip-submit" onClick={overlayOn}>
          Nitip dong
        </button>
      </div>
    </div>
  );
}

export default Beranda;
