// tanpa generics                         // <1>
function funN(argN) {
    return argN;
}
function funS(argS) {
    return argS;
}
console.log(funN(23));
console.log(funS('TypeScript'));
// tanpa generics - menggunakan any
// tidak type safe, karena menerima tipe 
// data apa saja.
function funA(argA) {
    return argA;
}
console.log(funA(true));
console.log(funA([1, 2, 3]));
// menggunakan generics
function funG1(argG1) {
    return argG1;
}
function funGn(argGn1, argGn2) {
    return argGn2;
}
console.log(funG1('TypeScript'));
console.log(funG1(23));
console.log(funGn('TypeScript', 23));
function panjang(argGC) {
    return argGC.length;
}
var hasil1 = panjang({ length: 23, name: 'TypeScript' }); // <7>
var hasil2 = panjang('TypeScript');
console.log(hasil1);
console.log(hasil2);
