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
    <p>Status login: {{ hasilLogin }}</p>
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
        this.hasilLogin = 'Akses ke ' + this.jumlahCoba + ' ditolak!'
      }
    }
  },
  setup() {
    const router = useRouter();
    return { router };
  },  
  mounted() {

    const conn = SQLite.create({
      name: 'ip.db',
      location: 'default',
    });

    if (conn !== null)  {

      conn.then((db: SQLiteObject) => {
  
        db.executeSql('SELECT * FROM Users', [])
          .then((okSelect: any) => {

            if (okSelect.rows.length < 1) {
              db.executeSql('INSERT INTO Users VALUES (?,?,?)', ['user1', 'User 1', 'pass1'])
              .then(() => {
                this.unameDb = 'user1';
                this.fnameDb = 'User 1';
                this.passDb = 'pass1';
              })
            } else {
              this.unameDb = okSelect.rows.item(0).uname;
              this.fnameDb = okSelect.rows.item(0).fname;
              this.passDb = okSelect.rows.item(0).pass;
            }

          }).catch(e => (this.hasilSQL = e.message));
      })
    } else {
      this.hasilSQL = 'Koneksi basis data gagal!';
    }  
    this.$forceUpdate();
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