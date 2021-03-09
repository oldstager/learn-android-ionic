var peg01 = {
    nik: '012345',
    nama: 'Donal',
    alamat: 'Jl. Awan Biru 21',
    menikah: true,
    npp: '98123',
    jabatan: 'Manager SDM',
    gaji: 15000000
};
console.log(peg01.nama, peg01.jabatan); // <4>
var strKamus = {}; // <6>
strKamus["university"] = "universitas";
strKamus["freedom"] = "merdeka";
console.log(strKamus["university"]);
function tambahNilai(kunci, nilai) {
    console.log('Menambah ', kunci, nilai);
}
function perbaruiNilai(kunci, nilaiBaru) {
    console.log('Memperbarui ', kunci, nilaiBaru);
}
var pemrosesTambah = tambahNilai; // <10>
pemrosesTambah(123, 'Nilai 123');
var pemrosesPerbarui = perbaruiNilai;
pemrosesPerbarui(123, 'Nilai baru 123');
