import * as yargs from 'yargs';

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

console.log('Anda memasukkan URL ', argv.url);
console.log('Anda memasukkan nama file output:', argv.output);

