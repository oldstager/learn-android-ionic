var add1 = function (a, b) { return a + b; }; // <1>
var add2 = function (a, b) { return a + b; }; // <2>
var lenStr1 = function (s) { return s.length; }; // <3>
var lenStr2 = function (s) { return s.length; }; // <4>
// Penggunaan arrow func                                        // <5>
console.log(add1(2, 3));
console.log(add2(2, 3));
console.log(lenStr1('abcdefg'));
console.log(lenStr2('abcdefg'));
