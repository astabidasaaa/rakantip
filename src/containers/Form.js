import { formPlaceholder, nitipPlaceholder } from "../entry";
import SubForm from "./SubForm";

function Form({
  yangNitipState,
  handleYangNitipChange,
  nitipState,
  handleNitipChange,
  addNitip,
  deleteNitip,
  handleNitipSubmit,
  overlayOff,
}) {
  const addBtn = (item) => {
    if (item <= 7) {
      return (
        <div
          className="tambah-nitip sub-p-grey"
          type="button"
          onClick={addNitip}
        >
          + Tambah nitip
        </div>
      );
    }
  };

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
            <label className="p-black">Nitip apa?</label>
            {nitipState.map((item, idx) => {
              return (
                <SubForm
                  idx={idx}
                  key={`nitip-${idx}`}
                  item={item}
                  nitipPlaceholder={nitipPlaceholder}
                  handleNitipChange={handleNitipChange}
                  deleteNitip={deleteNitip}
                />
              );
            })}
            {addBtn(Object.keys(nitipState).length)}
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
            <label htmlFor="catKemana" className="p-black">
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
