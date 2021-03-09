w<template>
  
  <ion-page>
    
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <!-- bisa ditambahkan routing
        <ion-tab-button tab="home" href="/tabs/tab1">
        -->
        <ion-tab-button tab="home">
          <ion-label>Home</ion-label>
          <ion-icon :icon="home" />
        </ion-tab-button>
        <ion-tab-button tab="settings">
          <ion-label>Settings</ion-label>
          <ion-icon :icon="settings"></ion-icon>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>

  </ion-page>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { IonPage, IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon } from '@ionic/vue';
import { settings, home } from 'ionicons/icons';

export default defineComponent({
  name: 'HomeTabs',
  components: {
    IonPage,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonIcon,
    IonLabel
  },
  setup() {
    return {
      settings, 
      home, 
    }
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
