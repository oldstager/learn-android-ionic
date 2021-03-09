function getAngkaAcak(max: number): number {                          // <1>
  return Math.floor(Math.random() * Math.floor(max));
}

function lebihDari(max: number, angka: number): boolean | number {    // <2>
  if (angka > max) {
    throw "ERR: arg 1 harus lebih besar daripada arg 2"
  }
  let acak = getAngkaAcak(max);
  if (acak > angka) {
    return true;
  } else {
    return acak;
  }
}

let p = async function (): Promise<boolean | number> {                // <3>

  try {

    // let hasilOK: boolean | number = await lebihDari(100, 500);     // <4>
    let hasilOK: boolean | number = await lebihDari(1000, 500);       // <5>
    return hasilOK;

  } catch(error) {                                                    // <6>

    return error;

  }

};

(async () => {                                                        // <7>
  console.log(await p())
})()

// jika <4> di uncomment, maka hasil:
//  ERR: arg 1 harus lebih besar daripada arg 2
// jika menggunakan <5>, maka hasil kemungkinan:
//  true
//  134 (atau angka lain)
