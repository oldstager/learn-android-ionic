<template >
  <div class="ion-page">
    <ion-header>
      <ion-toolbar class="toolbar-md-primary">
        <ion-title>SocialSharing Plugins - Vue/Capacitor </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <p><strong>{{ text }}</strong></p>
      <p><ion-img class="img-wrapper" :src="imgUrl" /></p>
      <p><a href="url">Universitas Terbuka</a></p>
      <ion-button @click="kirimKeWhatsApp()">Share melalui WhatsApp</ion-button>
    </ion-content>
  </div>
</template>

<script>
import { IonButton, IonHeader, IonContent, IonImg } from '@ionic/vue';

import { SocialSharing } from '@ionic-native/social-sharing';

export default {
  name: "AppRate",
  data() {
    return {
      text: 'Universitas Terbuka',
      imgUrl: 'https://www.ut.ac.id/sites/all/files/Logo-UT_03.png',
      url: 'https://www.ut.ac.id/en'
    }
  },
  methods: {
    kirimKeWhatsApp() {
      SocialSharing.shareViaWhatsApp(this.text, this.imgurl, this.url)
    }
  },
  components: {
    IonImg,
    IonHeader,
    IonContent,
    IonButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
