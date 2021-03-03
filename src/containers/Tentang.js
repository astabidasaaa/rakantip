import logo from "../assets/img/logo-rakantip.svg";
import foto from "../assets/img/foto-pegawai.png";
// import "./App.css";

function Tentang() {
  return (
    <div className="page-tentang-kami">
      <a className="anchor" id="page-tentang-kami" href="#"></a>
      <h3>Tentang Kami</h3>
      <div className="tentang-perusahaan">
        <img src={logo} alt="Logo rakan.tip" />
        <p className="p-black">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </p>
        <p className="p-black">
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
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
