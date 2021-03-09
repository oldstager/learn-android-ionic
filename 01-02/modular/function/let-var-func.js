var scoping = function (input) {
    var angka1 = 100;
    if (typeof input == 'number') {
        var angka2 = angka1 + input; // <2>
        var angka3 = angka1 - input; // <3>
    }
    // Error: Cannot find name 'angka2'
    // return angka2;                     // <4>
    // karena definisi dengan var, maka 
    // bisa diakses
    return angka3; // <5>
};
console.log(scoping(1));
