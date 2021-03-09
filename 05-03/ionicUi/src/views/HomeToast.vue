<template>
  <ion-page>
    <ion-content class="ion-padding">
      <ion-button @click="toastStandar">Buka Toast Standar</ion-button>
      <ion-button @click="toastOpsi">Buka Toast - Opsi</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonButton, IonContent, IonPage, toastController } from '@ionic/vue';

export default {
  components: { IonButton, IonContent, IonPage },
  methods: {
    async toastStandar() {
      const toast = await toastController
        .create({
          message: 'Tampilan pemberitahuan toast standar...',
          duration: 2000
        })
      return toast.present();
    },
    async toastOpsi() {
      const toast = await toastController
        .create({
          header: 'MaskaApp:',
          message: 'Pilihan:',
          position: 'bottom',
          buttons: [
            {
              side: 'start',
              icon: 'star',
              text: 'Pilihan 1',
              handler: () => {
                console.log('Memilih pilihan 1');
              }
            }, {
              text: 'Pilihan 2',
              role: 'cancel',
              handler: () => {
                console.log('Memilih pilihan 2');
              }
            }
          ]
        })
      return toast.present();
    },
  },
}
</script>