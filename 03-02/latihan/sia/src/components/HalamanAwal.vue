<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <p>
      <button @click='tampilkanMhsDosen'>Tampilkan Data Mahasiswa dan Dosen</button>
    </p>
    <p v-if=tampil>
      <table class="center">
        <caption>Daftar Dosen Universitas Terbuka</caption>
          <thead>
            <tr>
              <th>NIDN</th>
              <th>Nama</th>
              <th>Tanggal Lahir</th>
              <th>Alamat</th>
              <th>Homebase</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="dataDosen in dataDosenList" :key="dataDosen.id">
              <td>{{ dataDosen.nidn }}</td>
              <td>{{ dataDosen.nama }}</td>
              <td>{{ dataDosen.tglLahir }}</td>
              <td>{{ dataDosen.alamat }}</td>
              <td>{{ dataDosen.homebase }}</td>
            </tr>
          </tbody>
      </table>

      <table class="center">
        <caption>Daftar Mahasiswa Universitas Terbuka</caption>
          <thead>
            <tr>
              <th>NIM</th>
              <th>Nama</th>
              <th>Tanggal Lahir</th>
              <th>E-mail</th>
              <th>Program Studi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="dataMhs in dataMhsList" :key="dataMhs.id">
              <td>{{ dataMhs.nim }}</td>
              <td>{{ dataMhs.nama }}</td>
              <td>{{ dataMhs.tglLahir }}</td>
              <td>{{ dataMhs.email }}</td>
              <td>{{ dataMhs.prodi }}</td>
            </tr>
          </tbody>
      </table>
    </p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HalamanAwal',
  data() {
    return {
      tampil: false,
      dataMhsList: [],
      dataDosenList: []
    };
  },
  props: {
    msg: String
  },
  methods: {
    tampilkanMhsDosen() {
      
      let AxiosInstance = axios.create();
      let requestedMhs;
      let requestedDosen;

      AxiosInstance.get('http://192.168.1.4:4000/mhs')
        .then(
          response => {
            requestedMhs = response.data;
          
            this.dataMhsList = requestedMhs;
            this.tampil = true;

          }).catch(error=> {
            console.log(error.message);
          });

      AxiosInstance.get('http://192.168.1.4:4000/dosen')
        .then(
          response => {
            requestedDosen = response.data;
          
            this.dataDosenList = requestedDosen;
            this.tampil = true;

          }).catch(error=> {
            console.log(error.message);
          });
 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.center {
  margin-left: auto;
  margin-right: auto;
}
</style>
