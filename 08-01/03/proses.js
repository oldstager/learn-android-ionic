"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var actors_json_1 = __importDefault(require("./actors.json"));
console.log('Jumlah: ', Object.keys(actors_json_1.default).length);
console.log('menampilkan data');
console.log(actors_json_1.default);
console.log(actors_json_1.default.Actors[0].name);
console.log('stringify');
console.log(JSON.stringify(actors_json_1.default));
console.log('stringify - replacer null - space: 4');
console.log(JSON.stringify(actors_json_1.default, null, 4));
console.log('stringify - replacer hapus semua array - space: 4');
console.log(JSON.stringify(actors_json_1.default, replacer, 4));
function replacer(key, value) {
    if (typeof value === 'object') {
        console.log(key, value, " Array - Object, dihapus");
        return undefined;
    }
    return value;
}
var menu = {
    "id": "file",
    "value": "File",
    "popup": {
        "menuitem": [
            {
                "value": "New",
                "onclick": "CreateNewDoc()"
            },
            {
                "value": "Open",
                "onclick": "OpenDoc()"
            },
            {
                "value": "Close",
                "onclick": "CloseDoc()"
            }
        ]
    }
};
console.log(menu);
