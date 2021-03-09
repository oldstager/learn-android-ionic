(function (str, idx) {
    console.log(str[idx]); // <2>
})('Universitas Terbuka', 4); // <3>
var idxStr = function (str, idx) {
    console.log(str[idx]); // <5>
};
console.log(idxStr('Universitas Terbuka', 4)); // <6>
