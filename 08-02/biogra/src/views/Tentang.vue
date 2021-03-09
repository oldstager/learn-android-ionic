<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button :text="getBackButtonText()" default-href="/"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>&copy; 2021 Dr. Bambang Purnomosidi D. P.</ion-card-subtitle>
          <ion-card-title>Biogra</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-img :src="imgTentang" class="img-wrapper"></ion-img>
<strong>Biogra</strong> adalah aplikasi untuk melihat biografi aktor-aktor film.
    </ion-card-content>
  </ion-card>
  </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MaskaTentang',
  data() {
    return {
      imgTentang: '/assets/img/biogra-logo.png',
      getBackButtonText: () => {
        const win = window as any;
        const mode = win && win.Ionic && win.Ionic.mode;
        return mode === 'ios' ? 'Inbox' : '';
      }
    }
  },
  components: {
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonCard, 
    IonCardHeader, 
    IonCardSubtitle, 
    IonCardTitle, 
    IonCardContent
  },
});
</script>
