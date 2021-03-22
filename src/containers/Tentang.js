import logo from "../assets/img/logo-rakantip.svg";
import foto from "../assets/img/foto-pegawai.png";

function Tentang() {
  return (
    <div className="page-tentang-kami">
      <button className="anchor" id="page-tentang-kami" href="#/"></button>
      <h3>Tentang Kami</h3>
      <div className="tentang-perusahaan">
        <img src={logo} alt="Logo rakan.tip" />
        <p className="p-black">
          Kemunculan rakan.tip sebagai sebuah usaha jasa penitipan
          makanan/barang dilatarbelakangi akibat adanya pandemi. Demi menolong
          dan memudahkan warga Kota Bandung dan Jakarta dalam memenuhi ke-BM-an
          di masa pandemi ini, rakan.tip siap membantu kalian semua warga Kota
          Bandung dan Jakarta. Selain itu, rakan.tip juga berkomitmen untuk
          mendukung usaha rumahan untuk terus maju dan diminati oleh berbagai
          kalangan di seantero Kota Bandung dan Jakarta.
        </p>
        <p className="p-black">
          Dengan mudah dan tanpa ribet serta tentunya menegakan protokol
          kesehatan di masa pandemi ini, rakan.tip siap hadir mengantar makanan
          ke rumah kalian!
        </p>
      </div>
      <div className="tentang-pegawai">
        <h4>Pegawai Kami</h4>
        <div className="pegawai-konten">
          <img src={foto} alt="Foto pegawai" />
          <div className="pegawai-text">
            <h5>Rakanda Pranidhana</h5>
            <p className="p-grey">Bos rakan.tip / kurir / Antek Bappenas</p>
            <p className="p-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tentang;
