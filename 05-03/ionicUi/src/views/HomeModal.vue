<template>
  <ion-page>
    <ion-content class="ion-padding">
      <ion-button @click="bukaDialogModal">Buka Dialog Modal</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonButton, IonContent, IonPage, modalController } from '@ionic/vue';
import Modal from './modal.vue'

export default {
  components: { IonButton, IonContent, IonPage },
  methods: {
    async bukaDialogModal() {
      const modal = await modalController
        .create({
          component: Modal,
          cssClass: 'maska-dialog-modal',
          componentProps: {
            title: 'MaskaApp:'
          },
        })
      return modal.present();
    },
  },
}
</script>