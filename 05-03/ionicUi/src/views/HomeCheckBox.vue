<template>

  <!-- Checkboxes in a List -->
  <ion-list>
    <ion-item v-for="entry in form" :key="entry.id">
      <ion-label>{{entry.val}}</ion-label>
      <ion-checkbox
        slot="start"
        @click="klikCB"
        @update:modelValue="entry.isChecked = $event"
        :modelValue="entry.isChecked">
      </ion-checkbox>
    </ion-item>
  </ion-list>
  <p>
    <ion-button @click="prosesCB">Proses!</ion-button>
  </p>

  <ion-list>
    <ion-item v-for="hasil in pilihCB" :key="hasil.id">
      <ion-label>{{ hasil.id }} - {{hasil.val}} - {{ hasil.isChecked }}</ion-label>
    </ion-item>
  </ion-list>

</template>

<script>
import { IonCheckbox, IonItem, IonLabel, IonList, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonCheckbox, IonItem, IonLabel, IonList, IonButton },
  data() {
    return {
      pilihCB: []
    }
  },
  methods: {
    prosesCB() {
      this.pilihCB = this.form
    },
    klikCB() {
      this.pilihCB = this.form.val
    }
  },
  setup() {
    const form = [
      { id: 1, val: 'Pilihan 01', isChecked: true },
      { id: 2, val: 'Pilihan 02', isChecked: false },
      { id: 3, val: 'Pilihan 03', isChecked: false }
    ];
    return { form };
  }
});
</script>