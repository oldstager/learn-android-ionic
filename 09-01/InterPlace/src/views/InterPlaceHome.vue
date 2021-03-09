<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>InterPlace - {{ fullName }} 
          <ion-button color="danger" @click="logout">Logout
          </ion-button>
        </ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">

      <div id="container">
        <strong>InterPlace</strong>
        <p>Track some interesting places!</p>
      </div>

  </ion-content>

</ion-page>

</template>

<script lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent ({
  name: 'IntePlaceHome',
  data() {
    return {
      fullName: ''
    }
  },
  setup() {
    const router = useRouter();
    return { router };
  },  
  mounted() {

    if (!this.$store.state.iPLogin) {
      this.router.push('/login');
    } else {
      this.fullName = this.$store.state.iPFullName;
    }

  },
  methods: {
    logout() {
      this.$store.commit('ubahKeLogout');
      this.router.push('/login');
    }
  },
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
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
