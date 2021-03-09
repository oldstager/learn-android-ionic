function getAngkaAcak(max: number): number {
  return Math.floor(Math.random() * Math.floor(max));
}

let p = new Promise<number>((resolve, reject) => {

  let acak = getAngkaAcak(20);
  let hasil: number;                                  // <1>

  if (acak > 10) {
    resolve(acak);
    return;
  }

  reject("Hasil < = 10");

}).then(function(hasil) {                             // <2>
  console.log(hasil);                                 // <3>
  return hasil*2;                                     // <4>
}).then(function(hasil) {                             // <5>
  console.log(hasil);                                 // <6>
  return hasil*2;                                     // <7>
}).then(function(hasil) {
  console.log(hasil);
  return hasil*2;
});

console.log(p);                                       // <5>
p.catch(err => console.log("ERROR - ", err));         // <6>

// run (bisa berbeda-beda):
//  pertama (jika resolve):
//    Promise { <pending> }
//    12
//    24
//    48
//  kedua (jika reject):
//    Promise { <pending> }
//    ERROR -  Hasil < = 10

