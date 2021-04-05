function SubForm({
  idx,
  item,
  nitipState,
  handleNitipChange,
  nitipPlaceholder,
  deleteNitip,
}) {
  const nitipId = `nitip${idx}`,
    barangId = `barang${idx}`,
    qtyId = `qty${idx}`,
    catatanId = `catatan${idx}`;

  const deleteBtn = (idx) => {
    if (nitipState.length !== 1) {
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
        <label className="sub-p-black" htmlFor={nitipId}>{`Toko #${
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
      <div className="pertanyaan sub-form">
        <label className="sub-p-black" htmlFor={barangId}>
          Nama pesanan
        </label>
        <input
          type="text"
          name={barangId}
          data-idx={idx}
          id={barangId}
          className="catatan sub-p-grey"
          value={nitipState[idx].barang}
          placeholder={nitipPlaceholder.barang}
          onChange={handleNitipChange}
          alt="barang"
          autoComplete="off"
          required
        />
        <hr />
      </div>
      <div className="pertanyaan sub-form">
        <label className="sub-p-black" htmlFor={qtyId}>
          Jumlah pesanan
        </label>
        <input
          type="text"
          name={qtyId}
          data-idx={idx}
          id={qtyId}
          className="catatan sub-p-grey"
          value={nitipState[idx].qty}
          placeholder={nitipPlaceholder.qty}
          onChange={handleNitipChange}
          alt="qty"
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
          value={nitipState[idx].catatan}
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
