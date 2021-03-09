// paket-paket yang digunakan
import axios from 'axios';
import * as yargs from 'yargs';
import * as fs from "fs/promises";
let HtmlTableToJson = require('html-table-to-json');

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
