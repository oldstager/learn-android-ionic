<template >
  <div class="ion-page">
    <ion-header>
      <ion-toolbar class="toolbar-md-primary">
        <ion-title>Geocoder Plugins - Vue/Capacitor </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <ion-item>
        <p>Latitude: </p>
        <ion-input v-model="inputLat" />
        <p>Longitude: </p>
        <ion-input v-model="inputLong" />
        <p>Nama lokasi: {{ outputNama }}</p>
      </ion-item>
      <ion-item>
        <p>Lokasi: </p>
        <ion-input v-model="inputNama" />
        <ol>
          <li>Latitude: {{ outputLat }}</li>
          <li>Longitude: {{ outputLong }}</li>
        </ol>
      </ion-item>
      <ion-button @click="tampilkanInfoGeo()">Tampilkan Info Geo</ion-button>
    </ion-content>
  </div>
</template>

<script lang="ts">

// WARNING:
// Tidak stabil, jika "Service not available", maka HP harus di-restart
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder'
import { IonItem, IonInput, IonTitle, IonToolbar, IonButton, IonHeader, IonContent } from '@ionic/vue'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Geocoder',
  data() {
    return {
      inputNama: '',
      inputLat: 0.00,
      inputLong: 0.00,
      outputNama: '',
      outputLat: '',
      outputLong: '',
    }
  },
  methods: {

    tampilkanInfoGeo() {

      const options: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5
      };

      NativeGeocoder.reverseGeocode(this.inputLat, this.inputLong, options)
        .then((result: NativeGeocoderResult[])=> 
          ( this.outputNama = JSON.stringify(result[0]) )
        ).catch((error) => (this.outputNama = error));

      NativeGeocoder.forwardGeocode(this.inputNama, options)
        .then((result: NativeGeocoderResult[])=> {
          this.outputLat = result[0].latitude;
          this.outputLong = result[0].longitude
        }).catch((error) => console.log(error));

   }
  },
  components: {
    IonTitle, 
    IonToolbar, 
    IonButton, 
    IonHeader, 
    IonContent,
    IonItem,
    IonInput
  }
});
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
