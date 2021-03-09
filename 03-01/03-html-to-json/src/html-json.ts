let HtmlTableToJson = require('html-table-to-json');

let jsonTables = HtmlTableToJson.parse(`
        <p>Tabel 1</p>
        <table>
            <tr>
                <th>NIM</th>
                <th>Nama</th>
                <th>Alamat</th>
            </tr>
            <tr>
                <td>123456</td>
                <td>Mahasiswa</td>
                <td>Satu</td>
            </tr>
            <tr>
                <td>7891011</td>
                <td>Mahasiswa</td>
                <td>Dua</td>
            </tr>
        </table>
        <p>Tabel 2</p>
        <table>
            <tr>
                <th>NIDN</th>
                <th>Nama Dosen</th>
            </tr>
            <tr>
                <td>9876</td>
                <td>Dosen Satu</td>
            </tr>
            <tr>
                <td>98789</td>
                <td>Dosen dua</td>
            </tr>
        </table>
    `);

console.log('Jumlah tabel: ', jsonTables.count);
console.log(jsonTables.results);
