<template>
  
  <ion-grid fixed>

    <ion-row>
      <ion-col> 
        <ion-item>
          <ion-label>Baris 1 - Kolom 1</ion-label>
        </ion-item>
      </ion-col>
      <ion-col>
        <ion-item>
          <ion-label>Baris 1 - Kolom 2</ion-label>
        </ion-item>
      </ion-col>
      <ion-col>
        <ion-item>
          <ion-label>Baris 1 - Kolom 3</ion-label>
        </ion-item>
      </ion-col>
    </ion-row>

    <ion-row>
      <ion-col offset="6"> 
        <ion-item>
          <ion-label>Baris 2 - Kolom 1</ion-label>
        </ion-item>
      </ion-col>
      <ion-col>
        <ion-item>
          <ion-label>Baris 2 - Kolom 2</ion-label>
        </ion-item>
      </ion-col>
      <ion-col> 
        <ion-item>
          <ion-label>Baris 2 - Kolom 3</ion-label>
        </ion-item>
      </ion-col>
    </ion-row>

    <ion-row>
      <ion-col size="2"> 
        <ion-item>
          <ion-label>Baris 3 - Kolom 1</ion-label>
        </ion-item>
      </ion-col>
      <ion-col>
        <ion-item>
          <ion-label>Baris 3 - Kolom 2</ion-label>
        </ion-item>
      </ion-col>
      <ion-col pull="2"> 
        <ion-item>
          <ion-label>Baris 3 - Kolom 3</ion-label>
        </ion-item>
      </ion-col>
    </ion-row>

    <ion-row>
      <ion-col size="1" class="ion-align-self-end bgcolor2"> 
        <ion-item>
          <ion-label>4 - 1</ion-label>
        </ion-item>
      </ion-col>
      <ion-col size="2" class="bgcolor1 ion-justify-content-center">
        <ion-item>
          <ion-label>4 - 2</ion-label>
        </ion-item>
      </ion-col>
      <ion-col>
        <ion-item>
          <ion-label>4 - 3</ion-label>
        </ion-item>
      </ion-col>
    </ion-row>

  </ion-grid>

</template>

<script lang="ts">
import { 
  IonGrid, 
  IonRow,
  IonCol,
  IonLabel
} from '@ionic/vue';

import { defineComponent } from 'vue';
export default defineComponent({
  name: 'HomeSinglePage',
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonLabel
  }
});
</script>

<style scoped>

.bgcolor1 {
  background: #cdcfd6;
}
.bgcolor2 {
  background: #cdcfaa;
}
.bgcolor3 {
  background: #aacfd6;
}
.bgcolor4 {
  background: #cdaad6;
}

#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}

</style>
