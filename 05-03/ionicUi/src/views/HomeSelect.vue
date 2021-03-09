<template>
  <ion-list>
    <ion-list-header>
      <ion-label>
        Pilihan:
      </ion-label>
    </ion-list-header>

    <ion-item>
      <ion-label>Jenis Kelamin</ion-label>
      <ion-select placeholder="Pilih jenis kelamin">
        <ion-select-option value="l">Laki-laki</ion-select-option>
        <ion-select-option value="p">Perempuan</ion-select-option>
      </ion-select>
    </ion-item>

    <ion-item>
      <ion-label>Pendidikan:</ion-label>
      <ion-select value="Diploma 3" ok-text="Ok" cancel-text="Batal">
        <ion-select-option value="Diploma 3">Diploma 3</ion-select-option>
        <ion-select-option value="Sarjana">Sarjana</ion-select-option>
        <ion-select-option value="Magister">Magister</ion-select-option>
        <ion-select-option value="Doktor">Doktor</ion-select-option>
      </ion-select>
    </ion-item>

    <ion-item>
      <ion-label>Keahlian</ion-label>
      <ion-select multiple="true" cancel-text="Batal" ok-text="Ok">
        <ion-select-option value="ionic">Ionic</ion-select-option>
        <ion-select-option value="js">JavaScript</ion-select-option>
        <ion-select-option value="ts">TypeScript</ion-select-option>
        <ion-select-option value="zig">Zig</ion-select-option>
        <ion-select-option value="rust">Rust</ion-select-option>
        <ion-select-option value="go">Go</ion-select-option>
      </ion-select>
    </ion-item>

  </ion-list>
</template>

<script>
import { 
  IonItem, 
  IonLabel, 
  IonList,
  IonListHeader,
  IonSelect,
  IonSelectOption
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonItem, 
    IonLabel, 
    IonList,
    IonListHeader,
    IonSelect,
    IonSelectOption
  }
});
</script>