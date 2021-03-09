"use strict";
exports.__esModule = true;
exports.getData = exports.getAllData = void 0;
var data = require("./sample-01.json");
var getAllData = function () { return data; };
exports.getAllData = getAllData;
var getData = function (id) { return data.find(function (m) { return m.id === id; }); };
exports.getData = getData;
console.log(exports.getAllData());
