<template>
  <ion-page>
    
    <ion-split-pane when="sm" content-id="main-content">
    
      <ion-menu content-id="main-content">

        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Menu</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content>
          <ion-list>
            <ion-list-header>
              Navigasi
            </ion-list-header>
            <ion-menu-toggle auto-hide="false">
              <ion-item button href="/nav/home">
                <ion-icon :icon="home">
                </ion-icon>
                <ion-label>Home</ion-label>
              </ion-item>
              <ion-item button href="/nav/settings">
                <ion-icon :icon="settings">
                </ion-icon>
                <ion-label>Settings</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>
        </ion-content>
      </ion-menu>

      <div class="ion-page" id="main-content">
        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-menu-toggle>
                <ion-button>
                  <ion-icon slot="icon-only" :icon="menu">
                  </ion-icon>
                </ion-button>
              </ion-menu-toggle>
            </ion-buttons>
            <ion-title>Header</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <h1>Isi</h1>
        </ion-content>
      </div>

    </ion-split-pane>
  </ion-page>

</template>

<script lang="ts">
import { IonPage, IonHeader, IonTitle, IonToolbar, IonContent, IonSplitPane, IonIcon } from '@ionic/vue';
import { defineComponent } from 'vue';
import { home, menu, settings } from 'ionicons/icons';

export default defineComponent({
  name: 'HomeSplitPane',
  components: {
    IonPage,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonSplitPane
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
