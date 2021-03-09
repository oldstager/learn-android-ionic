<template>
  <ion-page>
    <ion-content class="ion-padding">
      <ion-button @click="openPopover">Proses!</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonButton, IonContent, IonPage, popoverController } from '@ionic/vue';
import Popover from './popover.vue';

export default {
  components: { IonButton, IonContent, IonPage },
  methods: {
    async openPopover(theEvent) {
      const popover = await popoverController
        .create({
          component: Popover,
          //cssClass: 'isikan-jika-perlu',
          event: theEvent,
          translucent: true
        })
      return popover.present();
    },
  },
}
</script>