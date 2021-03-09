<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Ionic - SQLite</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Ionic - SQLite</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <p>
        <strong>SQLite Native API Plugin</strong>
        </p>
        <ion-button @click="aksesSqlite">Akses SQLite</ion-button>
      </div>
      <h2>Hasil SQL: {{ hasilSQL }}</h2>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

export default defineComponent({
  name: 'Home',
  data() {
    return {
      hasilSQL: ''
    }
  },
  methods: {
    aksesSqlite() {

      const conn = SQLite.create({
        name: 'data.db',
        location: 'default',
      });

      if (conn == null)  {
        this.hasilSQL = "Koneksi gagal";
      } else {
        conn.then((db: SQLiteObject) => {
          db.executeSql('create table danceMoves(name VARCHAR(32))', [])
            .then((ok: any) => (this.hasilSQL = ok))
            .catch((e: any) => (this.hasilSQL = e));
        })
        .catch(e => console.log(e));

      } 
 
    }
        /*
      if (conn == null)  {
        this.hasilSQL = "Koneksi gagal";
      } else {
      conn.then((db: SQLiteObject) => {
          db.executeSql('create table danceMoves(name VARCHAR(32))', [])
            .then((ok: any) => (this.hasilSQL = ok))
            .catch((e: any) => (this.hasilSQL = e));

      })
      .catch(e => console.log(e));

    }

    */
  },
  components: {
    IonContent,
    IonButton,
    IonHeader,
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
