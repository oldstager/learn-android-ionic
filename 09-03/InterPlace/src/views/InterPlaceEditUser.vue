<template>
  <ion-page>

    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>InterPlace - Edit Data Pemakai</ion-title>
      </ion-toolbar>
    </ion-header>
    
  <ion-content>

    <p>Nama Pemakai (maksimal 8): <ion-input v-model="ipUserName" /></p>
    <p>Nama Lengkap (maksimal 32): <ion-input v-model="ipFullName" /></p>
    <p>Kata kunci: <ion-input type="password" v-model="ipPass" /></p>
    <p>
    <ion-button @click="updateUser">Simpan!</ion-button>
    </p>
    <p>Hasil: {{ hasilEdit }}</p>
    <p><ion-button @click='backHome'>Kembali</ion-button></p>
  </ion-content>
  </ion-page>

</template>

<script lang="ts">
import { IonInput, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

export default defineComponent ({
  name: 'InterPlaceEditUser',
  data() {
    return {
      ipUserName: '',
      ipFullName: '',
      ipPass: '',
      hasilLogin: '',
      jumlahCoba: 0,
      hasilEdit: ''
    }
  },
  mounted() {

    if (!this.$store.state.iPLogin) {
      this.router.push('/login');
    }

    this.$forceUpdate();
  },
  methods: {
    backHome() {
      this.router.push('/home');
    },
    updateUser() {
      if (this.ipUserName === '' || 
        this.ipFullName === '' || 
        this.ipPass === '') {
          this.hasilEdit = 'Semua isian harus diisi'
      } else {

        const conn = SQLite.create({
          name: 'ip.db',
          location: 'default',
        });

        if (conn !== null)  {

          conn.then((db: SQLiteObject) => {
      
              db.executeSql('UPDATE Users SET uname=?, fname=?, pass=?', [this.ipUserName, this.ipFullName, this.ipPass])
                .then((okUpdate) => {
                  this.hasilEdit = 'Edit berhasil!';
                  this.$store.commit('ubahKeLogin', {
                    userName: this.ipUserName,
                    fullName: this.ipFullName
                  });
                })
                .catch(e => (this.hasilEdit = e.message));
          })
        } else {
          this.hasilEdit = 'Koneksi basis data gagal!';
        }  

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
