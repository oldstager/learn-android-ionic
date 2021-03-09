<template>
  <ion-page>

    <ion-header> 
      <ion-toolbar color="primary">
        <ion-title>Header</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-toolbar>
        <h1>Main Content</h1>
      </ion-toolbar>
    </ion-content>

    <ion-footer>
      <ion-toolbar color="success">
        <ion-title>Footer</ion-title>
      </ion-toolbar>
    </ion-footer>
  
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonTitle, IonToolbar, IonContent, IonFooter } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeSinglePage',
  components: {
    IonPage,
    IonContent,
    IonFooter,
    IonHeader,
    IonTitle,
    IonToolbar
  }
});
</script>

<style scoped>
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
