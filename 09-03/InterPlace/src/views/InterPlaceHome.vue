<template>

  <ion-page>

    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>InterPlace - {{ fullName }}
          <p> 
          <ion-button color="danger" @click="logout">Logout
          </ion-button>
          <ion-button color="warning" @click="editUser">Edit User
          </ion-button>
          </p>
        </ion-title>
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

  </ion-page>

</template>

<script>
import { IonItem, IonList, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { Plugins, CameraSource, CameraResultType } from "@capacitor/core";
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder } from '@ionic-native/native-geocoder'

const { Camera } = Plugins;

export default defineComponent ({
  name: 'IntePlaceHome',
  data() {
    return {
      fullName: '',
      imageUrl: null,
      waktu: '',
      urutanEvent: 0,
      locLatitude: '',
      locLongitude: '',
      namaLokasi: '',
      semuaEvent: [{eventKe: "0", eventName: "Event ke 0"}]
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

    this.$forceUpdate();
    
  },
  methods: {
    logout() {
      this.$store.commit('ubahKeLogout');
      this.router.push('/login');
    },
    editUser() {
      this.router.push('/editUser')
    },
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
            ( this.namaLokasi = result[0] )
          ).catch((error) => (this.namaLokasi = error));

      }).catch((error) => {
        console.log('Error: tidak berhasil mendapatkan lokasi ', error);
      });
      
    }

  },
  activated() {
    console.log("activated")
  },
  components: {
    IonItem,
    IonList,
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
