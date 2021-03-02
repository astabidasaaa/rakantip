import logo from "../assets/img/logo-rakantip-polos-01.png";
// import "./App.css";

function Beranda() {
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
      <form className="form-nitip" action="#">
        <input
          type="text"
          id="nitip-input"
          name="nitip-input"
          className="nitip-input"
          placeholder="ex: https://www.instagram.com/p/CKu-SddBGtK/"
        />
        <input type="submit" value="Nitip dong" className="nitip-submit" />
      </form>
    </div>
  );
}

export default Beranda;
