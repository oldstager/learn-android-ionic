<template >
  <div class="ion-page">
    <ion-header>
      <ion-toolbar class="toolbar-md-primary">
        <ion-title>SMS Plugins - Vue/Capacitor </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <ion-item>
        <p>Kirim ke: </p>
        <ion-input v-model="tujuanSMS" />
        <p>Teks: </p>
        <ion-input v-model="teksSMS" />
      </ion-item>
      <ion-button @click="kirimSMS()">Kirim SMS</ion-button>
      <p>
        Status: {{ hasilSMS }}
      </p>
    </ion-content>
  </div>
</template>

<script lang="ts">
import { SMS } from '@ionic-native/sms'
import { AndroidPermissions } from '@ionic-native/android-permissions'

import { IonItem, IonInput, IonTitle, IonToolbar, IonButton, IonHeader, IonContent } from '@ionic/vue'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Sms',
  data() {
    return {
      tujuanSMS: '',
      teksSMS: '',
      hasilSMS: {},
    }
  },
  methods: {

    kirimSMS() {
    /*
      AndroidPermissions.checkPermission(AndroidPermissions.PERMISSION.SEND_SMS).then(
        (result: any) => {
          (SMS.send(this.tujuanSMS, this.teksSMS));
          this.hasilSMS = result;
        },
        (err: any) => {
          (AndroidPermissions.requestPermission(AndroidPermissions.PERMISSION.SEND_SMS));
          this.hasilSMS = err;
        });
    }
    */

      AndroidPermissions.checkPermission(AndroidPermissions.PERMISSION.SEND_SMS).then(
        result => {
          SMS.send(this.tujuanSMS, this.teksSMS);
          this.hasilSMS = result;
        },
        err => { 
          AndroidPermissions.requestPermission(AndroidPermissions.PERMISSION.SEND_SMS);
          this.hasilSMS = err;
        }
      );

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
