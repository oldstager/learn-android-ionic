import actors from "./actors.json";

console.log('Jumlah: ', Object.keys(actors).length);

console.log('menampilkan data');
console.log(actors);
console.log(actors.Actors[0].name);

console.log('stringify');
console.log(JSON.stringify(actors));
console.log('stringify - replacer null - space: 4');
console.log(JSON.stringify(actors, null, 4));
console.log('stringify - replacer hapus semua array - space: 4');
console.log(JSON.stringify(actors, replacer, 4));

function replacer(key: unknown, value: unknown) {
  if (typeof value === 'object') {
    console.log(key, value, " Array - Object, dihapus");
    return undefined;
  }
  return value;
}

let menu = {
   "id":"file",
   "value":"File",
   "popup":{
      "menuitem":[
         {
            "value":"New",
            "onclick":"CreateNewDoc()"
         },
         {
            "value":"Open",
            "onclick":"OpenDoc()"
         },
         {
            "value":"Close",
            "onclick":"CloseDoc()"
         }
      ]
   }
}

console.log(menu);
