<template>
  <ion-card>
    <ion-card-header>
      <ion-card-subtitle>MaskaApp:</ion-card-subtitle>
      <ion-card-title>Tentang Maska</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      MaskaApp adalah aplikasi untuk para penggemar kucing di Indonesia.<br />
      Dengan menggunakan aplikasi ini, proses adopsi kucing akan menjadi<br />
      lebih mudah dan dengan proses yang terpercaya.
    </ion-card-content>
  </ion-card>

  <ion-card>
    <ion-item>
      <ion-icon :icon="people" slot="start"></ion-icon>
      <ion-label>&copy; Dr. Bambang Purnomosidi D. P.</ion-label>
      <ion-button fill="outline" slot="end">Kontributor</ion-button>
    </ion-item>

    <ion-card-content>
      Software ini dibuat dengan Ionic - Vue dan &hearts;
    </ion-card-content>
  </ion-card>

</template>

<script>
import { 
  IonCard, 
  IonCardContent, 
  IonCardSubtitle, 
  IonCardTitle, 
  IonIcon, 
  IonItem, 
  IonLabel 
} from '@ionic/vue';
import { people } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { 
    IonCard, 
    IonCardContent, 
    IonCardSubtitle, 
    IonCardTitle, 
    IonIcon, 
    IonItem, 
    IonLabel 
  },
  setup() {
    return {
      people
    };
  }
});
</script>