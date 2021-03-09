<template >
  <div class="ion-page">
    <ion-header>
      <ion-toolbar class="toolbar-md-primary">
        <ion-title>AppRate Plugins - Vue/Capacitor </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <ion-button @click="kirimRate()">Kirim Rate!</ion-button>
    </ion-content>
  </div>
</template>

<script>
//import { Plugins } from "@capacitor/core";
import { AppRate } from '@ionic-native/app-rate';

//const { AppRate } = Plugins;

export default {
  name: "AppRate",
  methods: {
    kirimRate() {
      AppRate.setPreferences({
        storeAppURL: {
          //ios: '<my_app_id>',
          android: 'market://details?id=io.maska.app'
          //blackberry: 'appworld://content/[App Id]/',
          //windows8: 'ms-windows-store:Review?name=<the Package Family Name of the application>'
        }
      });
    
      AppRate.promptForRating(true);

    }
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
