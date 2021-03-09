<template>

  <p>List biasa</p>
  <ion-list>
    <ion-item>
      <ion-label>Urutan list nomor 1</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Urutan list nomor 2</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Urutan list nomor 3</ion-label>
    </ion-item>
  </ion-list>

  <p>List - sliding items</p>
  <ion-list>
    <ion-item-sliding>
      <ion-item>
        <ion-label>Item 1</ion-label>
      </ion-item>
      <ion-item-options side="start">
        <ion-item-option @click="unread(item)">Unread</ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item>
        <ion-label>Item 2</ion-label>
      </ion-item>
      <ion-item-options side="start">
        <ion-item-option @click="unread(item)">Unread</ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
  </ion-list>
</template>

<script>
import { 
  IonItem, 
  IonItemOption, 
  IonItemOptions, 
  IonItemSliding, 
  IonList, 
  IonLabel, 
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { 
    IonItem, 
    IonItemOption, 
    IonItemOptions, 
    IonItemSliding, 
    IonList, 
    IonLabel
  }
});
</script>