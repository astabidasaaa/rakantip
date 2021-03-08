import { terfavorit, testimoni } from "../entry";
import Slider from "react-slick";

function Informasi() {
  const Favorit = () => {
    return terfavorit.map((favObj, i, favArr) => {
      return (
        <div className="fav-display" key={favArr[i].id}>
          <img src={favArr[i].src} alt={favArr[i].alt} />
          <div className="nama">
            <p className="sub-p-grey">{favArr[i].nama}</p>
          </div>
        </div>
      );
    });
  };

  const Testimoni = ({ nama, sebagai, bintang, komentar }) => {
    function berapa(bintang) {
      let a = [];
      for (let i = 1; i <= 5; i++) {
        if (i <= bintang) {
          a.push(<span key={nama + i} className="fa fa-star checked"></span>);
        }

        if (i > bintang) {
          a.push(<span key={nama + i} className="fa fa-star"></span>);
        }
      }

      return a;
    }

    return (
      <div className="test-display">
        <div className="siapa">
          <p className="sub-p-black">{nama}</p>
          <p className="sub-p-grey">{sebagai}</p>
        </div>
        <div className="berapa">{berapa(bintang)}</div>
        <div className="bagaimana">
          <p className="sub-p-black">{komentar}</p>
        </div>
      </div>
    );
  };

  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
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
        </div>
      </div>
      <div className="kanan">
        <div className="testimoni">
          <h4>Pendapat Mereka</h4>
          <div className="test-slider">
            <Slider {...settings}>
              <div className="testimoni-display">
                <Testimoni
                  nama={testimoni[0].nama}
                  sebagai={testimoni[0].sebagai}
                  bintang={testimoni[0].bintang}
                  komentar={testimoni[0].komentar}
                />
                <Testimoni
                  nama={testimoni[1].nama}
                  sebagai={testimoni[1].sebagai}
                  bintang={testimoni[1].bintang}
                  komentar={testimoni[1].komentar}
                />
              </div>
              <div className="testimoni-display">
                <Testimoni
                  nama={testimoni[2].nama}
                  sebagai={testimoni[2].sebagai}
                  bintang={testimoni[2].bintang}
                  komentar={testimoni[2].komentar}
                />
                <Testimoni
                  nama={testimoni[3].nama}
                  sebagai={testimoni[3].sebagai}
                  bintang={testimoni[3].bintang}
                  komentar={testimoni[3].komentar}
                />
              </div>
              <div className="testimoni-display">
                <Testimoni
                  nama={testimoni[4].nama}
                  sebagai={testimoni[4].sebagai}
                  bintang={testimoni[4].bintang}
                  komentar={testimoni[4].komentar}
                />
                <Testimoni
                  nama={testimoni[5].nama}
                  sebagai={testimoni[5].sebagai}
                  bintang={testimoni[5].bintang}
                  komentar={testimoni[5].komentar}
                />
              </div>
            </Slider>
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
