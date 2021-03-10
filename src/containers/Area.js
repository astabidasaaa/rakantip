import petaBandung from "../assets/img/peta-bandung.png";
import petaJakarta from "../assets/img/peta-jakarta.png";
// import "./App.css";

function Area() {
  return (
    <div className="page-area" id="page-area">
      <h3>Area Pelayanan</h3>
      <div className="konten area-bandung">
        <img className="peta-bandung" src={petaBandung} alt="Peta Bandung" />
        <div className="area-text">
          <h4>Bandung</h4>
          <div className="point">
            <div className="kiri">
              <p className="p-grey">Sumur Bandung</p>
              <p className="p-grey">Pasteur</p>
              <p className="p-grey">Padjajaran</p>
              <p className="p-grey">Antapani</p>
            </div>
            <div className="kanan">
              <p className="p-grey">Turangga</p>
              <p className="p-grey">Dago</p>
              <p className="p-grey">Riau</p>
              <p className="p-grey">Buah Batu</p>
            </div>
          </div>
        </div>
      </div>
      <div className="konten area-jakarta">
        <img className="peta-jakarta" src={petaJakarta} alt="Peta Jakarta" />
        <div className="area-text">
          <h4>Jakarta</h4>
          <div className="point">
            <div className="kiri">
              <p className="p-grey">Kuningan</p>
              <p className="p-grey">Sudirman</p>
              <p className="p-grey">Mampang</p>
              <p className="p-grey">Cawang</p>
            </div>
            <div className="kanan">
              <p className="p-grey">Kemang</p>
              <p className="p-grey">Kebayoran Baru</p>
              <p className="p-grey">Tebet</p>
              <p className="p-grey">Pancoran</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Area;
