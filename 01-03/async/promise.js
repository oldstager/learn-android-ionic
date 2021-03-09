function getAngkaAcak(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
let p = new Promise((resolve, reject) => {
    let acak = getAngkaAcak(1000);
    if (acak > 500) {
        resolve(true); // <3>
        return;
    }
    reject("Hasil < = 500"); // <4>
});
console.log(p); // <5>
p.catch(err => console.log("ERROR - ", err)); // <6>
