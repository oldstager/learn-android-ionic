<template>
  <ion-button @click="prosesSatu">Proses 1!</ion-button>
  <br />
  <ion-button @click="prosesDua">Proses 2!</ion-button>
</template>

<script>
import { IonButton, loadingController } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    timeout: { type: Number, default: 20000 },
  },
  methods: {
    async prosesSatu() {
      const loading = await loadingController
        .create({
          //cssClass: 'maska-color-shade',
          message: 'Mohon ditunggu ...',
          duration: this.timeout,
        });

      await loading.present();

      setTimeout(function() {
        loading.dismiss()
      }, this.timeout);
    },
    async prosesDua() {
      const loading = await loadingController
        .create({
          spinner: null,
          duration: this.timeout,
          message: 'Tunggu sebentar ...',
          translucent: true,
          //cssClass: 'maska-color-shade',
          backdropDismiss: true
        });

      await loading.present();

      setTimeout(function() {
        loading.dismiss()
      }, this.timeout);
    },
  },
  components: { IonButton }
});
</script>