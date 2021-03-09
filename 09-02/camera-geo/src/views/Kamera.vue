<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar class="toolbar-md-primary">
        <ion-title>InterPlace</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <ion-list>
        <ion-item v-for="{eventKe, eventName, index} in semuaEvent" :key="index">
          <table>
            <tr style="background-color:#D1D0FA">
              <td>
                <strong>{{ eventKe }} - {{ eventName }}</strong>
              </td>
            </tr>
            <tr>
              <td>
                <ion-button ref="tombolFoto" @click="berfotoSekarang()">Ambil Foto!</ion-button>
              </td>
            </tr>
            <tr>
              <td>
                <img ref="gambar" />
              </td>
            </tr>
            <tr>
              <td>
                <strong>Waktu</strong>: {{ waktu }}<br />
                <strong>Koordinat</strong>: 
                <ul>
                  <li>Latitude: {{ locLatitude }}</li>
                  <li>Longitude: {{ locLongitude }}</li>
                </ul><br />
                <strong>Lokasi</strong>:
                <ul>
                  <li>Kode negara: {{ namaLokasi.countryCode }} </li>
                  <li>Kode pos: {{ namaLokasi.postalCode }} </li>
                  <li>Area administratif: {{ namaLokasi.administrativeArea }}</li>
                  <li>Sub area administratif: {{ namaLokasi.subAdministrativeArea }}</li>
                  <li>Lokalitas: {{ namaLokasi.locality }}</li>
                  <li>Sub lokalitas: {{ namaLokasi.subLocality }}</li>
                  <li>Jalan raya: {{ namaLokasi.thoroughfare }}</li>
                  <li>Sub jalan raya: {{ namaLokasi.subThoroughfare }}</li> 
                </ul>
              </td>
            </tr>
          </table>
        </ion-item>
      </ion-list>
    </ion-content>
  </div>
</template>

<script>
import { Plugins, CameraSource, CameraResultType } from "@capacitor/core";
import { 
  IonItem, 
  IonList
} from '@ionic/vue';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder'

const { Camera } = Plugins;


export default {
  name: "Kamera",
  data() {
    return {
      imageUrl: null,
      waktu: '',
      urutanEvent: 0,
      locLatitude: '',
      locLongitude: '',
      namaLokasi: '',
      semuaEvent: [{eventKe: "0", eventName: "Event ke 0"}]
    };
  },
  components: { 
    IonItem, 
    IonList
  },  
  methods: {
    async berfotoSekarang() {

      this.$refs.tombolFoto.disabled = true;

      const currTime = new Date();
      this.waktu = currTime.toString();

      const isAvailable = true;

      if (!isAvailable) {
        alert("Device anda tidak mempunyai kamera");
      } else {
        try {
          const image = await Camera.getPhoto({
            quality: 90,
            allowEditing: false,
            resultType: CameraResultType.DataUrl,
            source: CameraSource.Prompt
          });
          console.log(image);
          // image.base64_data will contain the base64 encoded result as a JPEG, with the data-uri prefix added
          this.imageUrl = image.dataUrl;
          // can be set to the src of an image now
          this.$refs.gambar.src = image.dataUrl;
        } catch (e) {
          console.log("error", e);
        }
      }

      this.urutanEvent += 1;
      
      this.semuaEvent.push({eventKe: this.urutanEvent.toString(), eventName: "Event ke " + this.urutanEvent.toString()});

      Geolocation.getCurrentPosition().then((resp) => {
        this.locLatitude = resp.coords.latitude
        this.locLongitude = resp.coords.longitude

        const options = {
          useLocale: true,
          maxResults: 5
        };

        NativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude, options)
          .then((result)=> 
  /*          ( this.namaLokasi = JSON.stringify(result[0]) ) */
            ( this.namaLokasi = result[0] )
          ).catch((error) => (this.namaLokasi = error));

      }).catch((error) => {
        console.log('Error: tidak berhasil mendapatkan lokasi ', error);
      });
      
    }
  },
  activated() {
    console.log("activated")
  }
};
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
img {
  width: 50%;
  height: auto;
}
th, td {
  padding: 10px;
  text-align: left;
}
</style>
