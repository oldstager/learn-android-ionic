<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button :text="getBackButtonText()" default-href="/home"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>&copy; 2021 Dr. Bambang Purnomosidi D. P.</ion-card-subtitle>
          <ion-card-title>InterPlace</ion-card-title>
        </ion-card-header>
        <ion-card-content>
<strong>InterPlace</strong> adalah aplikasi untuk menyimpan data lokasi yang menarik dalam bentuk 
foto yang diambil serta lokasi di peta. Aplikasi ini diharapkan bisa menolong para pemakai
yang sedang bepergian dan tidak punya kesempatan untuk menulis. Anda memfoto, InterPlace akan 
mengurusi detailnya. 
    </ion-card-content>
  </ion-card>
  </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'InterPlaceTentang',
  data() {
    return {
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
