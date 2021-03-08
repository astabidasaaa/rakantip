function Form({ nitipState, addNitip }) {
  function off() {
    document.getElementById("overlay").style.display = "none";
    document.body.classList.toggle("noscroll", false);
    document.getElementById("nav-bar").classList.toggle("pad-right", false);
  }

  return (
    <div id="overlay">
      <div className="form-container">
        <div className="close-btn" onClick={off}>
          <svg>
            <use xlinkHref="#close-btn" />
          </svg>
        </div>
        <h3>Formulir penitipan di rakan.tip</h3>
        <form className="form">
          <div className="pertanyaan">
            <label htmlFor="nama" className="p-black">
              Nama lengkap kamu
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              className="sub-p-grey"
              value="text"
              placeholder="ex: Rakanda Pranidhana"
            />
            <hr />
          </div>
          <div className="pertanyaan">
            <p className="p-black">Nitip apa?</p>
            {nitipState.map((val, idx) => {
              const nitipId = `nitip-${idx}`;
              const catatanId = `catatan-${idx}`;
              return (
                <div key={`nitip-${idx}`} className="nitip-container">
                  <div className="pertanyaan">
                    <label className="sub-p-black" htmlFor={nitipId}>{`Nitip #${
                      idx + 1
                    }`}</label>
                    <input
                      type="text"
                      name={nitipId}
                      data-idx={idx}
                      id={nitipId}
                      className="nitip sub-p-grey"
                      placeholder="ex: https://www.instagram.com/p/CKu-SddBGtK/"
                    />
                    <hr />
                  </div>

                  <div className="pertanyaan">
                    <label className="sub-p-black" htmlFor={catatanId}>
                      Catatan penitipan
                    </label>
                    <input
                      type="text"
                      name={catatanId}
                      data-idx={idx}
                      id={catatanId}
                      className="catatan-nitip sub-p-grey"
                      placeholder="ex: Nitip 5 buah, gak pedes, gak pake bakso"
                    />
                    <hr />
                  </div>
                </div>
              );
            })}
            <input
              className="tambah-nitip sub-p-grey"
              type="button"
              value="+ Tambah nitip"
              onClick={addNitip}
            />
          </div>
          <div className="pertanyaan">
            <label htmlFor="kemana" className="p-black">
              Dikirim kemana?
            </label>
            <input
              type="text"
              id="kemana"
              name="kemana"
              className="sub-p-grey"
              placeholder="ex: Jalan Buah Batu 123, Bandung"
            />
            <hr />
          </div>
          <div className="pertanyaan">
            <label htmlFor="cat-kemana" className="p-black">
              Catatan pengiriman
            </label>
            <input
              type="text"
              id="cat-kemana"
              name="cat-kemana"
              className="sub-p-grey"
              placeholder="ex: Depan sekolahan, jangan lewat jl abc karena diportal"
            />
            <hr />
          </div>
          <div className="pertanyaan">
            <label htmlFor="ponsel" className="p-black">
              Nomor ponsel kamu
            </label>
            <input
              type="text"
              id="ponsel"
              name="ponsel"
              className="sub-p-grey"
              placeholder="ex: 0812345678910"
            />
            <hr />
          </div>
          <input type="submit" value="Nitip sekarang" className="form-submit" />
        </form>
      </div>
    </div>
  );
}

export default Form;
