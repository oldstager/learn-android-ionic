<template>
  <ion-page>

    <!-- hanya berlaku pada iOS -->
    <ion-header :translucent="true">

      <ion-toolbar>
        <ion-title>Blank - Header</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">

      <!-- hanya berlaku pada iOS -->
      <ion-header collapse="condense">

        <ion-toolbar>
          <ion-title size="large">Blank - header pada content</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <strong>About: </strong>
        <p>Aplikasi ini dibuat untuk praktikum 6 - KB 1
        </p>
      </div>
    </ion-content>

    <ion-footer :translucent="true">
      <ion-toolbar>
        <ion-title>Navigasi</ion-title>
        <ion-router-link href="/">>
          Home
        </ion-router-link>
        <ion-router-link href="/about">
          About
        </ion-router-link>
      </ion-toolbar>
    </ion-footer>

  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonFooter, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonFooter,
    IonPage,
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
