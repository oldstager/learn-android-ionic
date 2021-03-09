import data from "./sample-02.json";
import cars from "./cars.json";

console.log('Jumlah: ', Object.keys(data).length);

console.log('menampilkan data');
console.log(data);
console.log(data.menu.popup.menuitem);
console.log(data.menu.popup.menuitem[0]);
console.log(data.menu.popup.menuitem[0].value);

console.log('stringify');
console.log(JSON.stringify(data));
console.log('stringify - replacer null - space: 4');
console.log(JSON.stringify(data, null, 4));
console.log('stringify - replacer hapus semua array - space: 4');
console.log(JSON.stringify(data, replacer, 4));

console.log(JSON.stringify(cars,['name', 'email'],4));

function replacer(key: unknown, value: unknown) {
  if (typeof value !== 'object') {
    return undefined;
  }
  return value;
}
