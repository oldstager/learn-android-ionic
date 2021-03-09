<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <p v-if="terlihat">Detik ke: {{ detik }</p>
      <p><button @click="onOff">{{ teksButton }}</p>
    </p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

export default class HelloWorld extends Vue {
  msg: string,
  detik: number,
  teksButton: string,
  terlihat: boolen,
  data() {
    return {
      msg = 'Selamat datang!',
      detik = 0,
      teksButton = 'Tampilkan',
      terlihat = false
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
