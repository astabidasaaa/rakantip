import { formPlaceholder, nitipPlaceholder } from "../entry";

function Form({
  yangNitipState,
  handleYangNitipChange,
  nitipState,
  handleNitipChange,
  addNitip,
  handleNitipSubmit,
  overlayOff,
}) {
  return (
    <div id="overlay">
      <div className="form-container">
        <div className="close-btn" onClick={overlayOff}>
          <svg>
            <use xlinkHref="#close-btn" />
          </svg>
        </div>
        <h3>Formulir penitipan di rakan.tip</h3>
        <form className="form" onSubmit={handleNitipSubmit}>
          <div className="pertanyaan">
            <label htmlFor="nama" className="p-black">
              Nama lengkap kamu
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              className="sub-p-grey"
              value={yangNitipState.nama}
              placeholder={formPlaceholder.nama}
              onChange={handleYangNitipChange}
              autoComplete="off"
              required
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
                      value={nitipState[idx].nitip}
                      placeholder={nitipPlaceholder.nitip}
                      onChange={handleNitipChange}
                      alt="nitip"
                      autoComplete="off"
                      required
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
                      className="catatan sub-p-grey"
                      value={nitipState[idx].catatan}
                      placeholder={nitipPlaceholder.catatan}
                      onChange={handleNitipChange}
                      alt="catatan"
                      autoComplete="off"
                    />
                    <hr />
                  </div>
                </div>
              );
            })}
            <button
              className="tambah-nitip sub-p-grey"
              type="button"
              onClick={addNitip}
            >
              + Tambah nitip
            </button>
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
              value={yangNitipState.kemana}
              placeholder={formPlaceholder.kemana}
              onChange={handleYangNitipChange}
              autoComplete="off"
              required
            />
            <hr />
          </div>
          <div className="pertanyaan">
            <label htmlFor="cat-kemana" className="p-black">
              Catatan pengiriman
            </label>
            <input
              type="text"
              id="catKemana"
              name="catKemana"
              className="sub-p-grey"
              value={yangNitipState.catKemana}
              placeholder={formPlaceholder.catKemana}
              onChange={handleYangNitipChange}
              autoComplete="off"
            />
            <hr />
          </div>
          <div className="pertanyaan">
            <label htmlFor="ponsel" className="p-black">
              Nomor ponsel kamu
            </label>
            <input
              type="number"
              id="ponsel"
              name="ponsel"
              className="sub-p-grey"
              value={yangNitipState.ponsel}
              placeholder={formPlaceholder.ponsel}
              onChange={handleYangNitipChange}
              autoComplete="off"
              required
            />
            <hr />
          </div>
          <button type="submit" className="form-submit">
            Nitip sekarang
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
