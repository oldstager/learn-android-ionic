var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getAngkaAcak(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function lebihDari(max, angka) {
    if (angka > max) {
        throw "ERR: arg 1 harus lebih besar daripada arg 2";
    }
    let acak = getAngkaAcak(max);
    if (acak > angka) {
        return true;
    }
    else {
        return acak;
    }
}
let p = function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // let hasilOK: boolean | number = await lebihDari(100, 500);     // <4>
            let hasilOK = yield lebihDari(1000, 500); // <5>
            return hasilOK;
        }
        catch (error) { // <6>
            return error;
        }
    });
};
(() => __awaiter(this, void 0, void 0, function* () {
    console.log(yield p());
}))();
// jika <4> di uncomment, maka hasil:
//  ERR: arg 1 harus lebih besar daripada arg 2
// jika menggunakan <5>, maka hasil kemungkinan:
//  true
//  134 (atau angka lain)
