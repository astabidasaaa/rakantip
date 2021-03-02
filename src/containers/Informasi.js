// import logo from "../assets/img/logo-rakantip-polos-01.png";
// import "./App.css";
import { terfavorit } from "../entry";

function Informasi() {
  const Favorit = () => {
    return terfavorit.map((favObj, i, favArr) => {
      return (
        <div className="fav-display" key={favArr[i].urutan}>
          <img src={favArr[i].src} alt={favArr[i].alt} />
          <div className="nama">
            <p className="sub-p-grey">{favArr[i].nama}</p>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="page-informasi" id="page-informasi">
      <div className="terfavorit">
        <div className="terfavorit-text">
          <h4>Terfavorit</h4>
          <p className="p-grey">Jajanan yang paling sering dititipin ke kami</p>
        </div>
        <div className="terfavorit-display">
          <Favorit />
          {/* <div className="fav-display">
            <img src="../assets/img/dimsum.jpg" alt="" />
            <div className="nama">
              <p className="sub-p-grey">Dimsum Arsyif</p>
            </div>
          </div>
          <div className="fav-display">
            <img src="../assets/img/hipikicin.jpg" alt="" />
            <div className="nama">
              <p className="sub-p-grey">HIPIKIC.IN</p>
            </div>
          </div>
          <div className="fav-display">
            <img src="../assets/img/Sei-sapi.jpg" alt="" />
            <div className="nama">
              <p className="sub-p-grey">Sei Sapi Lamalera</p>
            </div>
          </div>
          <div className="fav-display">
            <img src="../assets/img/dimsum.jpg" alt="" />
            <div className="nama">
              <p className="sub-p-grey">Dimsum Arsyif</p>
            </div>
          </div> */}
        </div>
      </div>
      <div className="kanan">
        <div className="testimoni">
          <h4>Pendapat Mereka</h4>
          <div className="testimoni-display">
            <div className="test-display">
              <div className="siapa">
                <p className="sub-p-black">Sangkara</p>
                <p className="sub-p-grey">Warga Bandung</p>
              </div>
              <div className="berapa">*****</div>
              <p className="bagaimana sub-p-black">
                Pelayanan sangat ramah, asyik, dan cepat! sukses terus
                Rakan.tip!
              </p>
            </div>
            <div className="test-display">
              <div className="siapa">
                <p className="sub-p-black">Sangkara</p>
                <p className="sub-p-grey">Warga Bandung</p>
              </div>
              <div className="berapa">*****</div>
              <p className="bagaimana sub-p-black">
                Pelayanan sangat ramah, asyik, dan cepat! sukses terus
                Rakan.tip!
              </p>
            </div>
          </div>
        </div>
        <div className="prosedur">
          <div className="prosedur-title">
            <h4>
              Cara nitip di <span>Rakan.tip</span>
            </h4>
          </div>
          <div className="prosedur-konten">
            <div className="konten">
              <div className="bullet">
                <p className="sub-p-grey">1</p>
              </div>
              <div className="text">
                <p className="sub-p-grey">
                  Cari makanan favorit kamu di Instagram atau website
                </p>
              </div>
            </div>
            <div className="konten">
              <div className="bullet">
                <p className="sub-p-grey">2</p>
              </div>
              <div className="text">
                <p className="sub-p-grey">Copy paste link produk favoritmu</p>
              </div>
            </div>
            <div className="konten">
              <div className="bullet">
                <p className="sub-p-grey">3</p>
              </div>
              <div className="text">
                <p className="sub-p-grey">Bayar dengan berbagai metode</p>
              </div>
            </div>
            <div className="konten">
              <div className="bullet">
                <p className="sub-p-grey">4</p>
              </div>
              <div className="text">
                <p className="sub-p-grey">
                  Kirimkan bukti pembayaran ke kontak kami
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Informasi;
