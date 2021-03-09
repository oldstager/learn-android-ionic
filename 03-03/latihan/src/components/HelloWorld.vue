<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <p>Jumlah detik: {{ counter }}</p>
    <p>
      <button @click="counterOnOff">{{ teksButton }}</button>
    </p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  },
  data() {
    return {
      counter: 0,
      teksButton: 'Hitung!',
      interval: 0
    }
  }
})

export default class HelloWorld extends Vue {

  // menggunakan ! supaya tidak perlu masuk
  // ke konstruktur. Bagian ini sama dengan
  // data()
  counter!: number;
  teksButton!: string;
  interval!: number;

  // akan dikerjakan setiap setInterval
  tambahSatu() {
    this.counter += 1;
  }
  counterOnOff() {
    if (this.teksButton === 'Hitung!') {
      this.teksButton = 'Berhenti Menghitung!';
      // setiap 1 detik, akan mengerjakan tambahSatu
      this.interval = setInterval(this.tambahSatu, 1000);
    } else {
      this.teksButton = 'Hitung!';
      // Jika sudah selesai / Off, maka bersihkan interval
      // 
      clearInterval(this.interval);
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
</style>
