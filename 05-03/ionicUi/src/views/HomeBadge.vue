<template>
  <ion-item>
    <ion-label class="ion-text-end">Pesan</ion-label>
    <ion-badge slot="end">20</ion-badge>
  </ion-item>
</template>

<script>
import { IonBadge, IonItem, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonBadge, IonItem, IonLabel }
});
</script>