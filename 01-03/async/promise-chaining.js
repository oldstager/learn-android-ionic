function getAngkaAcak(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
let p = new Promise((resolve, reject) => {
    let acak = getAngkaAcak(20);
    let hasil; // <1>
    if (acak > 10) {
        resolve(acak);
        return;
    }
    reject("Hasil < = 10");
}).then(function (hasil) {
    console.log(hasil); // <3>
    return hasil * 2; // <4>
}).then(function (hasil) {
    console.log(hasil); // <6>
    return hasil * 2; // <7>
}).then(function (hasil) {
    console.log(hasil);
    return hasil * 2;
});
console.log(p); // <5>
p.catch(err => console.log("ERROR - ", err)); // <6>
