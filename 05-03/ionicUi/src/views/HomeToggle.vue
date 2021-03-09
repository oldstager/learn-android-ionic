<template>

  <ion-list>
    <ion-item>
      <ion-label>
        Toggle 1
      </ion-label>
      <ion-toggle checked color="secondary"></ion-toggle>
    </ion-item>
  </ion-list>

</template>

<script>
import { IonList, IonItem, IonLabel, IonToggle } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonList, IonItem, IonLabel, IonToggle }
});
</script>