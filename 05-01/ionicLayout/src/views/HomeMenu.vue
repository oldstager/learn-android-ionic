<template>

    <ion-menu contentId="main-content">

      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <ion-list>
          <ion-list-header>Navigate</ion-list-header>
          <ion-menu-toggle>
            <ion-item button href="/menu/home">
              <ion-icon :icon='home' />
              <ion-label>Home</ion-label>
            </ion-item>
            <ion-item button href="/menu/settings">
              <ion-icon :icon='settings' />
              <ion-label>Settings</ion-label>
            </ion-item>
            <ion-item href="/menu/menu3">
              Menu ke 3 tanpa icon
            </ion-item>
          </ion-menu-toggle>
        </ion-list>
      </ion-content>

    </ion-menu>

    <ion-page class="ion-page" id="main-content">

      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-toggle>
              <ion-button>
                <ion-icon slot="icon-only" :icon="menu"></ion-icon>
              </ion-button>
            </ion-menu-toggle>
          </ion-buttons>
          <ion-title>
            Header
          </ion-title>
        </ion-toolbar>
      </ion-header>
    
      <ion-content class="ion-padding">
        <h1>Content</h1>
        <p>Klik pada ikon menu untuk menampilkan menu</p>
      </ion-content>

    </ion-page>

</template>

<script lang="ts">

import { IonButtons, IonMenuToggle, IonButton, IonLabel, IonItem, IonIcon, IonList, IonListHeader, IonMenu, IonPage, IonHeader, IonTitle, IonToolbar, IonContent } from '@ionic/vue';
import { home, menu, settings } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeMenu',
  components: {
    IonButtons,
    IonMenuToggle,
    IonButton,
    IonIcon,
    IonLabel,
    IonListHeader,
    IonItem,
    IonList,
    IonMenu,
    IonPage,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar
  },
  setup() {
    return {
      home, 
      menu,
      settings,
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
