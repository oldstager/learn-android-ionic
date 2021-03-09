<template>

  <ion-item>
    <ion-label position="stacked">Stacked Label</ion-label>
    <ion-input v-model="hasilInput"></ion-input>
  </ion-item>
  
  <ion-item>Teks: {{ hasilInput }}</ion-item>

</template>

<script>
import { IonLabel, IonInput, IonItem } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonLabel, IonInput, IonItem },
  data() {
    return {
      hasilInput: ''
    }
  }
});
</script>