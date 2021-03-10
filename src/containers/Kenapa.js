function Kenapa() {
  return (
    <div className="page-kenapa-kami" id="page-kenapa-kami">
      <h3>
        Kenapa <span>Rakan.tip</span>
      </h3>
      <div className="kenapa-konten">
        <div className="point cepat">
          <div className="gambar">
            <svg>
              <use xlinkHref="#stopwatch" />
            </svg>
          </div>
          <h5>Cepat</h5>
          <p className="sub-p-grey">
            Durasi pengiriman bakal bikin kamu terkaget-kaget.
          </p>
        </div>
        <div className="point tepat">
          <div className="gambar">
            <svg>
              <use xlinkHref="#target" />
            </svg>
          </div>
          <h5>Tepat</h5>
          <p className="sub-p-grey">
            Paket bisa dikirim ke rumah atau ke tempat nongkrong kamu.
          </p>
        </div>
        <div className="point bersahabat">
          <div className="gambar">
            <svg>
              <use xlinkHref="#friends" />
            </svg>
          </div>
          <h5>Bersahabat</h5>
          <p className="sub-p-grey">Pelayanan ramah kepada buyer dan seller</p>
        </div>
      </div>
    </div>
  );
}

export default Kenapa;
