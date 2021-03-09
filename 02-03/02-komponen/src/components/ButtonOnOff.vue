<template>
  <p v-if="compShowHide">{{ strToHideShow }}</p>
  <button @click="onOff">{{ aksi }}</button>
</template>

<script>
export default {
  name: 'ButtonOnOff',
  data() {
    return {
      aksi: 'Sembunyikan',
      terlihat: true
    }
  },
  props: {
    strToHideShow: String
  },
  computed: {
    compShowHide() {
      if (this.terlihat === true) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    onOff() {
      if (this.aksi === 'Sembunyikan') {
        this.aksi = 'Tampilkan';
        this.terlihat = false;
      } else {
        this.aksi = 'Sembunyikan';
        this.terlihat = true;
      }
    }
  }
}
</script>

<style scoped>
button {
  color: #42b983;
}
</style>
