"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sample_02_json_1 = __importDefault(require("./sample-02.json"));
var cars_json_1 = __importDefault(require("./cars.json"));
console.log('Jumlah: ', Object.keys(sample_02_json_1.default).length);
console.log('menampilkan data');
console.log(sample_02_json_1.default);
console.log(sample_02_json_1.default.menu.popup.menuitem);
console.log(sample_02_json_1.default.menu.popup.menuitem[0]);
console.log(sample_02_json_1.default.menu.popup.menuitem[0].value);
console.log('stringify');
console.log(JSON.stringify(sample_02_json_1.default));
console.log('stringify - replacer null - space: 4');
console.log(JSON.stringify(sample_02_json_1.default, null, 4));
console.log('stringify - replacer hapus semua array - space: 4');
console.log(JSON.stringify(sample_02_json_1.default, replacer, 4));
console.log(JSON.stringify(cars_json_1.default, ['name', 'email'], 4));
function replacer(key, value) {
    if (typeof value !== 'object') {
        return undefined;
    }
    return value;
}
