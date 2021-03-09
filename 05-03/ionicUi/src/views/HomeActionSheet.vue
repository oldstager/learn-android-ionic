<template>
  <div id="container">
    <ion-button @click="tampilkanAS">Klik saya</ion-button>
    <p>Pilihan anda: {{ hasilAS }}</p>
  </div>
</template>

<script>
import { IonButton, actionSheetController } from '@ionic/vue';
import { defineComponent } from 'vue';
import { close, trash, share } from 'ionicons/icons';

export default defineComponent({
  components: { IonButton },
  data() {
    return {
      hasilAS: ''
    }
  },
  methods: {
    async tampilkanAS() {
      const actionSheet = await actionSheetController
        .create({
          header: 'Silahkan memilih',
          cssClass: 'maska-color-shade',
          buttons: [
            {
              text: 'Delete',
              role: 'destructive',
              icon: trash,
              handler: () => {
                this.hasilAS = 'Delete'
              },
            },
            {
              text: 'Share',
              icon: share,
              handler: () => {
                this.hasilAS = 'Share'
              },
            },
            {
              text: 'Cancel',
              icon: close,
              role: 'cancel',
              handler: () => {
                this.hasilAS = 'Cancel'
              },
            },
          ],
        });
      return actionSheet.present();
    },
  },
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
</style>
