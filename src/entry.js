import gambar1 from "./assets/img/dimsum.jpg";
import gambar2 from "./assets/img/hipikicin.jpg";
import gambar3 from "./assets/img/Sei-sapi.jpg";
import gambar4 from "./assets/img/dimsum.jpg";

// format countdown = "mm dd, yyyy hh:mm:ss" english
// format display = "Senin, 15 Agustus 2020" indonesia
export const jadwal = {
  countdown: "april 30, 2021 23:00:00",
  display: "Jumat, 30 April 2021",
  dari: "Bandung",
  ke: "Jakarta",
};

export const terfavorit = [
  {
    id: 1,
    nama: "Dimsum Arsyif",
    src: gambar1,
    alt: "Dimsum Arsyif",
  },
  {
    id: 2,
    nama: "HIPIKIC.IN",
    src: gambar2,
    alt: "HIPIKIC.IN",
  },
  {
    id: 3,
    nama: "Sei Sapi Lamalera",
    src: gambar3,
    alt: "Sei Sapi Lamalera",
  },
  {
    id: 4,
    nama: "Dimsum Arsyif",
    src: gambar4,
    alt: "Dimsum Arsyif",
  },
];

export const testimoni = [
  {
    id: 1,
    nama: "Sangkara",
    sebagai: "Warga Bandung",
    bintang: 5,
    komentar:
      "Pelayanan sangat ramah, asyik, dan cepat! sukses terus Rakan.tip!",
  },
  {
    id: 2,
    nama: "Naufal",
    sebagai: "Warga Bandung",
    bintang: 3,
    komentar: "keren juga rakantip",
  },
  {
    id: 3,
    nama: "Faiz",
    sebagai: "Pegawai",
    bintang: 1,
    komentar: "jelek",
  },
  {
    id: 4,
    nama: "Jum",
    sebagai: "Pegawai",
    bintang: 5,
    komentar: "asik kanda waw",
  },
  {
    id: 5,
    nama: "Alex",
    sebagai: "Pedagang",
    bintang: 4,
    komentar: "pengiriman cepat, kanda ramah, kurir teladan",
  },
  {
    id: 6,
    nama: "Iqbal",
    sebagai: "Atlet",
    bintang: 3,
    komentar: "woi kan",
  },
];

export const formState = {
  nama: "",
  kemana: "",
  catKemana: "",
  ponsel: "",
};

export const formPlaceholder = {
  nama: "cth: Rakanda Pranidhana",
  kemana: "cth: Jalan Buah Batu 123, Bandung",
  catKemana: "cth: Depan sekolahan, jangan lewat jl abc karena diportal",
  ponsel: "cth: 0812345678910",
};

export const nitipPlaceholder = {
  nitip: "cth: Primarasa, Hipikicin, Dimsum Arsyif",
  barang: "cth: kopi hazelnut, dimsum ayam",
  qty: "cth: 1 box, 5 potong",
  catatan: "cth: Gak pedes, gak pake bakso, esnya dipisah",
};
