<template>

  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button auto-hide="false"></ion-menu-button>
    </ion-buttons>
    <ion-buttons slot="secondary">
      <ion-button>
        <ion-icon slot="icon-only" :icon="star"></ion-icon>
      </ion-button>
    </ion-buttons>
    <ion-title>Left side menu toggle</ion-title>
  </ion-toolbar>

</template>

<script>
import { 
  IonButton, 
  IonButtons, 
  IonIcon,
  IonTitle, 
  IonToolbar
} from '@ionic/vue';
import { 
  star
} from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonButton, 
    IonButtons, 
    IonIcon,
    IonTitle, 
    IonToolbar
  },
  setup() {
    return {
      star
    }
  }
});
</script>