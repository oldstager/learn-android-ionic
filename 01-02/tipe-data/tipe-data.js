var isFinished = false;
console.log(isFinished, typeof isFinished); //  <1>
var price = 150.34;
console.log(price, typeof price);
var numOfEmployees = 25;
console.log(numOfEmployees, typeof numOfEmployees);
var progLang = "TypeScript";
console.log(progLang, typeof progLang);
var university = ['UT', 'UGM', 'ITB'];
console.log(university, typeof university);
var employee;
employee = [1, "Zaky Aditya", true, 20, "Engineer"];
console.log(employee, typeof employee);
var Color;
(function (Color) {
    Color[Color["Black"] = 2] = "Black";
    Color[Color["Blue"] = 3] = "Blue";
    Color[Color["Yellow"] = 4] = "Yellow";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Red"] = 9] = "Red";
})(Color || (Color = {}));
console.log(Color, typeof Color);
var code;
console.log(code, typeof code);
code = 'my code';
console.log(code, typeof code);
code = 21;
console.log(code, typeof code);
var valueNull = null;
console.log(valueNull, typeof valueNull);
var valueUndefined = undefined;
console.log(valueUndefined, typeof valueUndefined);
var valueAny;
console.log(valueAny, typeof valueAny);
valueAny = true;
console.log(valueAny, typeof valueAny);
valueAny = 42;
console.log(valueAny, typeof valueAny);
valueAny = "TypeScript";
console.log(valueAny, typeof valueAny);
valueAny = [];
console.log(valueAny, typeof valueAny);
valueAny = {};
console.log(valueAny, typeof valueAny);
valueAny = Math.random;
console.log(valueAny, typeof valueAny);
valueAny = null;
console.log(valueAny, typeof valueAny);
valueAny = undefined;
console.log(valueAny, typeof valueAny);
var valueUnknown;
console.log(valueUnknown, typeof valueUnknown);
valueUnknown = true;
console.log(valueUnknown, typeof valueUnknown);
valueUnknown = 42;
console.log(valueUnknown, typeof valueUnknown);
valueUnknown = "TypeScript";
console.log(valueUnknown, typeof valueUnknown);
valueUnknown = [];
console.log(valueUnknown, typeof valueUnknown);
valueUnknown = {};
console.log(valueUnknown, typeof valueUnknown);
valueUnknown = Math.random;
console.log(valueUnknown, typeof valueUnknown);
valueUnknown = null;
console.log(valueUnknown, typeof valueUnknown);
valueUnknown = undefined;
console.log(valueUnknown, typeof valueUnknown);
