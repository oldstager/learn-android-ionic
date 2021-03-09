"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function buatMax(jumlah) {
    return function (target, propertyKey, descriptor) {
        var oldMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var returnedResult;
            var result = oldMethod.apply(this, arguments);
            if (result.length > jumlah) {
                returnedResult = result.substring(0, jumlah);
            }
            else {
                returnedResult = result;
            }
            return returnedResult;
        };
    };
}
var ClassA = /** @class */ (function () {
    function ClassA(teks) {
        this.str1 = teks;
    }
    ClassA.prototype.method1 = function (newStr1) {
        this.str1 = newStr1;
        return this.str1;
    };
    ClassA.prototype.method2 = function (newStr2) {
        this.str1 = newStr2;
        return this.str1;
    };
    __decorate([
        buatMax(5),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", String)
    ], ClassA.prototype, "method2", null);
    return ClassA;
}());
var kelasA = new ClassA("isi awal");
console.log(kelasA.str1);
console.log(kelasA.method1('lebih dari 5 karakter'));
console.log(kelasA.method2('lebih dari 5 karakter'));
