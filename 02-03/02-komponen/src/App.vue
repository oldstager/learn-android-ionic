<template>
  <ButtonOnOff strToHideShow="Universitas Terbuka"/>
  <ButtonOnOff strToHideShow="Indonesia"/>
</template>

<script>
import ButtonOnOff from './components/ButtonOnOff.vue'

export default {
  name: 'App',
  components: {
    ButtonOnOff
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
