<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Data User</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-refresher slot="fixed" @ionRefresh="refresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>
      
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Inbox</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-list>
        <UserListItem v-for="user in users" :key="user.id" :user="user" />
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonList, IonPage, IonRefresher, IonRefresherContent, IonTitle, IonToolbar } from '@ionic/vue';
import UserListItem from '@/components/UserListItem.vue';
import { defineComponent } from 'vue';
//import { getUsers } from '@/data/users'
//import axios from 'axios';

export default defineComponent({
  name: 'Home',
  data() {
    return {
      users: [] 
    }
  },
  mounted() {
    this.axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      this.users = response.data;
    })
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
    UserListItem
  },
});
</script>