<template>
  <!-- Default -->
  <ion-button @click="defaultClicked">Default</ion-button>
  <p>Hasil = {{ hasil }}</p>
  <!-- Anchor -->
  <ion-button href="https://ionicframework.com">Akses Ionic</ion-button>

  <!-- Colors -->
  <ion-button color="warning">Primary</ion-button>
  <ion-button color="medium">Medium</ion-button>

  <!-- Expand -->
  <ion-button expand="full">Full Button</ion-button>
  <ion-button expand="block">Block Button</ion-button>

  <!-- Round -->
  <ion-button color="danger" shape="round">Round Button</ion-button>

  <!-- Fill -->
  <ion-button expand="full" fill="outline">Outline + Full</ion-button>
  <ion-button expand="block" fill="outline">Outline + Block</ion-button>
  <ion-button shape="round" fill="outline">Outline + Round</ion-button>

  <!-- Icons -->
  <ion-button>
    <ion-icon slot="start" :icon="settings"></ion-icon>
    Icon di kiri
  </ion-button>

  <ion-button>
    Icon di kanan
    <ion-icon slot="end" :icon="menu"></ion-icon>
  </ion-button>

  <ion-button>
    <ion-icon slot="icon-only" :icon="star"></ion-icon>
  </ion-button>

  <!-- Sizes -->
  <ion-button size="large">Large</ion-button>
  <ion-button>Default</ion-button>
  <ion-button size="small">Small</ion-button>
</template>

<script>
import { IonButton, IonIcon } from '@ionic/vue';
import { defineComponent } from 'vue';
import { star, menu, settings } from 'ionicons/icons';

export default defineComponent({
  components: { IonButton, IonIcon },
  data() {
    return {
      hasil: ''
    }
  },
  methods: {
    defaultClicked() {
      this.hasil = "Default di-klik"
    }
  },
  setup() {
    return {
      star, 
      menu,
      settings,
    }
  }
});
</script>