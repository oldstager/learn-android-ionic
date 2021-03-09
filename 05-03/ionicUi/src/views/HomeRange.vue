<template>
  <ion-list>
    <ion-item>
      <ion-range ref="nilaiRange" 
        min="-200" max="200" 
        color="medium">
        <ion-label slot="start">-200</ion-label>
        <ion-label slot="end">200</ion-label>
      </ion-range>
    </ion-item>
  </ion-list>
</template>

<script>
import { IonItem, IonLabel, IonList, IonRange } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {  IonItem, IonLabel, IonList, IonRange }
});
</script>