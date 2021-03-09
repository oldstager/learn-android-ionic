<template>
  <ion-list>
    <ion-radio-group value="pilihan2">
      <ion-list-header>
        <ion-label>Pilihan yang tersedia</ion-label>
      </ion-list-header>

      <ion-item>
        <ion-label>Pilihan 1</ion-label>
        <ion-radio slot="start" value="pilihan1"></ion-radio>
      </ion-item>

      <ion-item>
        <ion-label>Pilihan 2</ion-label>
        <ion-radio slot="start" value="pilihan2"></ion-radio>
      </ion-item>

      <ion-item>
        <ion-label>Pilihan 3</ion-label>
        <ion-radio slot="start" value="pilihan3"></ion-radio>
      </ion-item>
    </ion-radio-group>
  </ion-list>
</template>

<script>
import { 
  IonItem, 
  IonLabel, 
  IonList, 
  IonListHeader,
  IonRadio, 
  IonRadioGroup
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { 
    IonItem, 
    IonLabel, 
    IonList, 
    IonListHeader,
    IonRadio, 
    IonRadioGroup
  }
});
</script>