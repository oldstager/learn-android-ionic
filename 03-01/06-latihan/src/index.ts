// paket-paket yang digunakan
import axios from 'axios';
import * as yargs from 'yargs';
import * as fs from "fs/promises";
let HtmlTableToJson = require('html-table-to-json');
import * as validateURI from "valid-url"
import * as fsNode from "fs";
import * as path from "path";

// menyiapkan berbagai opsi untuk yargs
const argv = yargs.options({
    url: {
        alias: 'u',
        demandOption: true,
        description: 'URL yang akan diambil'
    },
    output: {
        alias: 'o',
        default: "output.unk",
        description: 'Hasil disimpan di file ini'
    }
  }).argv;

let url: string = argv.url as string;
let fhasil: string = argv.output as string;

// Latihan 1: memeriksa validitas URL
// menggunakan paket valid-url
// jangan lupa npm install valid-url --save-dev
if (!validateURI.isUri(url)) {
  console.log('URL yang anda masukkan tidak valid');
  process.exit(1);
}

// Latihan 2: memeriksa apakah file sudah ada atau belum
// Jika sudah, keluar
if (fsNode.existsSync(fhasil)) {
  console.log('file sudah ada');
  process.exit(1);
} else {
  console.log('file ', fhasil, ' belum ada');
}

// Latihan 3: memeriksa akses direktori tempat file output
try {
  fsNode.accessSync(path.dirname(fhasil), 
                    fsNode.constants.R_OK | 
                    fsNode.constants.W_OK | 
                    fsNode.constants.F_OK);
  console.log('Hak akses direktori OK');
} catch (err) {
  console.log('Hak akses direktori tidak cukup');
  process.exit(1);
}

// persiapan untuk mengambil file menggunakan axios
const AxiosInstance = axios.create();
let requestedData: string = '';
let ftype: string = '';
let dataToBeWritten: string = '';
let jsonTables: any;

AxiosInstance.get(url)
  .then( 
    // file berhasil diambil
    response => {
      requestedData = response.data; 

      ftype = response.headers['content-type'].substring(0,9);

      // Jika HTML, maka cari table. Jika ada, isikan data tabel
      // ke JSON.
      if (ftype === 'text/html') {
        jsonTables = HtmlTableToJson.parse(requestedData);
        console.log('Jumlah tabel: ', jsonTables.count);
        if (jsonTables.count > 0) {
          dataToBeWritten = JSON.stringify(jsonTables.results);
        } else {
          console.log('Tidak ada tabel di HTML, menulis HTML ke file');
          dataToBeWritten = requestedData;
        }
      } else {
        // jika bukan HTML, langsung ditulis apa adanya.
        dataToBeWritten = requestedData;
      }

      // Simpan ke nama file
      (async function(f) {
        try {
          await fs.writeFile(f, dataToBeWritten);
          console.log(`Disimpan ke file ${f}`);
        } catch (error) {
          console.log('Error:', error.message);
        }
      })(fhasil);

   }).catch(error=> {
    console.log(error.message);
  } 
);
