import * as fs from "fs/promises";

let f: string = 'test.txt';

let requestedData = 'ini contoh teks yang ditulis ke file';

(async function(f) {
  try {
    await fs.writeFile(f, requestedData);
    console.log(`Disimpan ke file ${f}`);
  } catch (error) {
    console.log('Error:', error.message);
  }
})(f);
