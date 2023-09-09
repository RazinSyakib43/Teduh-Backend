function encodeBaju(batasHargaJual, hargaJualIdeal, hargaDitawar) {

  const encoding = {
    T: 0,
    E: 1,
    D: 2,
    U: 3,
    H: 4,
    A: 5,
    S: 6,
    Y: 7,
    I: 8,
    K: 9,
  };

  const hargaBaju = parseInt(
    encoding[batasHargaJual.charAt(0)] + encoding[batasHargaJual.charAt(1)],
    10
  );

if (hargaDitawar < hargaJualIdeal) {
  return "ACCEPT, terima kasih sudah berbelanja";
} else if (hargaDitawar < hargaBaju) {
  return "REJECT, belum balik modal nih!";
} else {
  return "GOOD, customer terbaik gak pake nawar";
}

}

// Contoh penggunaan fungsi
console.log(encodeBaju("AT", "YH", 70000));
console.log(encodeBaju("ESH", "DTT", 150000));
console.log(encodeBaju("DET", "DHT", 250000));
