<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button :text="getBackButtonText()" default-href="/"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true" v-if="user">
      <ion-item>
        <ion-icon :icon="personCircle" color="primary"></ion-icon>
        <ion-label class="ion-text-wrap">
          <h2>
            {{ user.name }}
            <span class="date">
              <ion-note>{{ user.phone }}</ion-note>
            </span>
          </h2>
          <h3>Website: <ion-note>{{ user.address.street }}</ion-note></h3>
        </ion-label>
      </ion-item>
      
      <div class="ion-padding">
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { useRoute } from 'vue-router';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonNote, IonPage, IonToolbar } from '@ionic/vue';
import { personCircle } from 'ionicons/icons';
//import { getMessage } from '../data/messages';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ViewUser',
  data() {
    return {
      personCircle,
      getBackButtonText: () => {
        const win = window as any;
        const mode = win && win.Ionic && win.Ionic.mode;
        return mode === 'ios' ? 'Inbox' : '';
      },
      user: ''
    }
  },
  mounted() {
    const route = useRoute();
    this.axios
      .get("https://jsonplaceholder.typicode.com/users/" + parseInt(route.params.id as string, 10))
      .then((response: any) => {
        this.user = response.data;
    });
  },
  components: {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonNote,
    IonPage,
    IonToolbar,
  },
});

</script>

<style scoped>
ion-item {
  --inner-padding-end: 0;
  --background: transparent;
}

ion-label {
  margin-top: 12px;
  margin-bottom: 12px;
}

ion-item h2 {
  font-weight: 600;
}

ion-item .date {
  float: right;
  align-items: center;
  display: flex;
}

ion-item ion-icon {
  font-size: 42px;
  margin-right: 8px;
}

ion-item ion-note {
  font-size: 15px;
  margin-right: 12px;
  font-weight: normal;
}

h1 {
  margin: 0;
  font-weight: bold;
  font-size: 22px;
}

p {
  line-height: 22px;
}
</style>