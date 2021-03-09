<template >
  <div class="ion-page">
    <ion-header>
      <ion-toolbar class="toolbar-md-primary">
        <ion-title>Geolocation Plugins - Vue/Capacitor </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <ion-button @click="tampilkanLokasi()">Tampilkan lokasi anda</ion-button>
      <p>Lokasi anda sekarang:</p>
      <ol>
        <li>Latitude: {{ locLatitude }}</li>
        <li>Longitude: {{ locLongitude }}</li>
      </ol>
      <p>Lokasi hasil pemantauan:</p>
      <ol>
        <li>Latitude: {{ locLatitudeNow }}</li>
        <li>Longitude: {{ locLongitudeNow }}</li>
      </ol>
    </ion-content>
  </div>
</template>

<script>
import { Geolocation } from '@ionic-native/geolocation';
import { IonTitle, IonToolbar, IonButton, IonHeader, IonContent } from '@ionic/vue';

export default {
  name: "Geolocation",
  data() {
    return {
      locLatitude: '',
      locLongitude: '',
      locLatitudeNow: '',
      locLongitudeNow: ''
    }
  },
  methods: {
    tampilkanLokasi() {
      Geolocation.getCurrentPosition().then((resp) => {
        this.locLatitude = resp.coords.latitude
        this.locLongitude = resp.coords.longitude
      }).catch((error) => {
        console.log('Error: tidak berhasil mendapatkan lokasi ', error);
      });

      const watch = Geolocation.watchPosition();
      watch.subscribe((data) => {
        this.locLatitudeNow = data.coords.latitude;
        this.locLongitudeNow = data.coords.longitude;
      });
   }
  },
  components: {
    IonTitle, 
    IonToolbar, 
    IonButton, 
    IonHeader, 
    IonContent 
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
