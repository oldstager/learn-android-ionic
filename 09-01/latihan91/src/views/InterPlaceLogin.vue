<template>
  <ion-page>

    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>InterPlace Login:</ion-title>
      </ion-toolbar>
    </ion-header>
    
  <ion-content>

    <p>Nama: <ion-input v-model="ipName"></ion-input></p>
    <p>Kata kunci: <ion-input type="password" v-model="ipPass"></ion-input></p>
    <p>
    <ion-button @click="validasi">Validasi!</ion-button>
    </p>
    <p>{{ hasilLogin }}</p>
  </ion-content>
  </ion-page>

</template>

<script lang="ts">
import { IonInput, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

export default defineComponent ({
  name: 'InterPlaceLogin',
  data() {
    return {
      ipName: '',
      ipPass: '',
      hasilLogin: '',
      jumlahCoba: 0,
      unameDb: '',
      fnameDb: '',
      passDb: '', 
      hasilSQL: ''
    }
  },
  mounted() {

    const conn = SQLite.create({
      name: 'ip.db',
      location: 'default',
    });

    if (conn !== null)  {

      conn.then((db: SQLiteObject) => {
  
        db.sqlBatch([
          'DROP TABLE IF EXISTS Users',
          'CREATE TABLE Users (uname VARCHAR(8), fname VARCHAR(32), pass VARCHAR(8))',
          ['INSERT INTO Users VALUES (?,?,?)', ['a', 'User A', 'passA']],
        ]).then((ok: any) => {
            db.executeSql('SELECT * FROM Users', [])
              .then((okSelect: any) => {

                this.unameDb = okSelect.rows.item(0).uname;
                this.fnameDb = okSelect.rows.item(0).fname;
                this.passDb = okSelect.rows.item(0).pass;
                this.hasilSQL = "Berhasil select";

              })
              .catch(e => (this.hasilSQL = e.message));
        })
        .catch(e => (this.hasilSQL = e.message));
      })
    } else {
      this.hasilSQL = 'Koneksi basis data gagal!';
    }  
  },
  methods: {
    validasi() {
      if (this.ipName === this.unameDb && this.ipPass === this.passDb ) {
        this.$store.commit('ubahKeLogin', {
          userName: this.unameDb,
          fullName: this.fnameDb
        });
        this.router.push('/home');
      } else {
        this.jumlahCoba += 1;
        this.hasilLogin = 'Akses ' + this.jumlahCoba + ' ditolak!'
      }
    }
  },
  setup() {
    const router = useRouter();
    return { router };
  },  
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInput
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
