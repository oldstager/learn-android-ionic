var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(nik, nama) {
        this.perNik = nik;
        this.perNama = nama;
    }
    return Person;
}());
var Pegawai = /** @class */ (function (_super) {
    __extends(Pegawai, _super);
    function Pegawai(nik, npp, // <7>
    nama, dept) {
        var _this = _super.call(this, nik, nama) || this;
        _this.pegNpp = npp;
        _this.dept = dept;
        return _this;
    }
    Pegawai.prototype.getGaji = function () {
        return this.gaji;
    };
    Pegawai.prototype.setGaji = function (gajiBaru) {
        this.gaji = gajiBaru;
    };
    Pegawai.prototype.getPotonganPajak = function () {
        return this.gaji * (Pegawai.potongPajak / 100);
    };
    Pegawai.prototype.presensi = function () {
        var dateTime = new Date();
        console.log("Presensi pada " +
            dateTime.toLocaleTimeString() +
            ' - ' + dateTime.toDateString());
    };
    Pegawai.potongPajak = 10; // <6>
    return Pegawai;
}(Person));
var pakBambang = new Pegawai('nik1122', 'npp123', // <12> 
'Bambang Purnomosidi', 'IT');
console.log(pakBambang.setGaji(15750500)); // <13>
console.log(pakBambang.getGaji());
console.log(pakBambang.presensi());
console.log(pakBambang.getPotonganPajak());
// error:
// Property '_pegJmlTanggungan' is private and only 
//    accessible within class 'Pegawai'
// console.log(pakBambang._pegJmlTanggungan);
