<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <p>
      <button @click='tampilkanMhs'>Tampilkan Data Mahasiswa</button>
    </p>
    <p v-if=tampil>
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
      dataMhsList: []
    };
  },
  props: {
    msg: String
  },
  methods: {
    tampilkanMhs() {
      
      let AxiosInstance = axios.create();
      let requestedData;

      AxiosInstance.get('http://192.168.1.5:4000/mhs')
        .then(
          response => {
            requestedData = response.data;
          
            this.dataMhsList = requestedData;
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
