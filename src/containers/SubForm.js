function SubForm({
  idx,
  item,
  handleNitipChange,
  nitipPlaceholder,
  deleteNitip,
}) {
  const nitipId = `nitip${idx}`;
  const catatanId = `catatan${idx}`;
  const deleteBtn = (idx) => {
    if (idx !== 0) {
      return (
        <div className="delete-nitip" onClick={() => deleteNitip(idx)}>
          <svg>
            <use xlinkHref="#delete-btn" />
          </svg>
          <p className="sub-p-grey">Hapus</p>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div key={nitipId} className="nitip-container">
      <div className="pertanyaan sub-form">
        <label className="sub-p-black" htmlFor={nitipId}>{`Nitip #${
          idx + 1
        }`}</label>
        <input
          type="text"
          name={nitipId}
          data-idx={idx}
          id={nitipId}
          className="nitip sub-p-grey"
          value={item.nitip}
          placeholder={nitipPlaceholder.nitip}
          onChange={handleNitipChange}
          alt="nitip"
          autoComplete="off"
          required
        />
        <hr />
      </div>

      <div className="pertanyaan sub-form">
        <label className="sub-p-black" htmlFor={catatanId}>
          Catatan penitipan
        </label>
        <input
          type="text"
          name={catatanId}
          data-idx={idx}
          id={catatanId}
          className="catatan sub-p-grey"
          value={item.catatan}
          placeholder={nitipPlaceholder.catatan}
          onChange={handleNitipChange}
          alt="catatan"
          autoComplete="off"
        />
        <hr />
      </div>
      {deleteBtn(idx)}
    </div>
  );
}

export default SubForm;
