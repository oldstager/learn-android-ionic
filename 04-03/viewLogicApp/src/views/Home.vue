<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <div id="container">
        <p>Daftar User</p>
        <p><ion-button @click="ambilData">Ambil data</ion-button></p>
        <table class="center">
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>E-mail</th>
            <th>Company</th>
          </tr>
          <tr v-for="user in dataUsers" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.company.name }}</td>
          </tr>
        </table>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import EndPointAccess from '@/services/EndPointAccess';

let resData: any;

export default defineComponent({
  name: 'Home',
  data() {
    return {
      dataUsers: null
    }
  },
  methods: {
    ambilData() {
      resData = new EndPointAccess('https://jsonplaceholder.typicode.com/users');
      resData.getRes()
        .then((response: any)  => (this.dataUsers = response.data))
    }
  },
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton
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

.center {
  margin-left: auto;
  margin-right: auto;
}

</style>
