<template>
  <ion-page>

    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Biogra</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-refresher slot="fixed" @ionRefresh="refresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>
      
      <ion-list>
        <ActorsListItem 
          v-for="actor in actors" 
          :key="actor.id" 
          :actor="actor" />
      </ion-list>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonList, IonPage, IonRefresher, IonRefresherContent, IonTitle, IonToolbar } from '@ionic/vue';
import ActorsListItem from '@/components/ActorsListItem.vue';
import { defineComponent } from 'vue';
import Rest from '@/services/Rest';

export default defineComponent({
  name: 'Home',
  data() {
    return {
      actors: {}
    }
  },
  ionViewWillEnter() {
    const getRest = new Rest('http://192.168.1.5:4000/actors');
    getRest.get().
      then((ok: any) => (this.actors = ok.data));

  },
  methods: {
    refresh: (ev: CustomEvent) => {
      setTimeout(() => {
        ev.detail.complete();
      }, 3000);
    }
  },
  components: {
    IonContent,
    IonHeader,
    IonList,
    IonPage,
    IonRefresher,
    IonRefresherContent,
    IonTitle,
    IonToolbar,
    ActorsListItem
  },
});
</script>