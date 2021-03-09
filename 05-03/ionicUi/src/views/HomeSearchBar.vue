<template>

  <ion-searchbar show-cancel-button="always" value="Cari 1..."></ion-searchbar>
  <ion-searchbar show-cancel-button="never" value="Cari 2 ..."></ion-searchbar>
  <ion-toolbar>
    <ion-searchbar value="Cari keseluruhan ..."></ion-searchbar>
  </ion-toolbar>

</template>

<script>
import { IonSearchbar, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonSearchbar, IonToolbar }
});
</script>