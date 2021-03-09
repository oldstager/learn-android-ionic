<template >
  <div class="ion-page">
    <ion-header>
      <ion-toolbar class="toolbar-md-primary">
        <ion-title>Call Number Plugins - Vue/Capacitor </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <ion-item>
        <p>Nomor yg dihubungi: </p>
        <ion-input v-model="tujuanTelpon" />
      </ion-item>
      <ion-button @click="telpon()">Telpon!</ion-button>
      <p>
        Status: {{ hasilTelpon }}
      </p>
    </ion-content>
  </div>
</template>

<script lang="ts">
import { CallNumber } from '@ionic-native/call-number'

import { IonItem, IonInput, IonTitle, IonToolbar, IonButton, IonHeader, IonContent } from '@ionic/vue'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CallPhoneNumber',
  data() {
    return {
      tujuanTelpon: '',
      hasilTelpon: {},
    }
  },
  methods: {

    telpon() {

      CallNumber.callNumber(this.tujuanTelpon, true)
        .then(res => (this.hasilTelpon = res))
        .catch(err => (this.hasilTelpon = err));

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
