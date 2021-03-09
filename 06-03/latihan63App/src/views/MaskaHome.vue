<template>
  <ion-page>

    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>MaskaApp</ion-title>
      </ion-toolbar>
    </ion-header>
    
  <ion-content>

  <ion-list>
    <ion-item v-for="cat in cats" :key="cat.id">
      <p>{{ cat.nama }}</p>
      <p>
      <ion-button v-if="!cat.adopted" @click="adopsi(cat.id)">
        Adopsi
      </ion-button>
      </p>
      <ion-img class="img-wrapper" :src="cat.file"></ion-img>
    </ion-item>
  </ion-list>

  </ion-content>
  </ion-page>

</template>

<script lang="ts">
import { alertController, IonImg, IonList, IonItem, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { getCats, getCat  } from '../data/cats';
import { defineComponent } from 'vue';

export default defineComponent ({
  name: 'MaskaHome',
  data() {
    return {
      cats: getCats()
    }
  },
  methods: {
    async adopsi(id: number) {
      const theCat = getCat(id);
      const alert = await alertController
        .create({
          header: 'Konfirmasi',
          message: `Anda akan mengadopsi <strong>${theCat?.nama}</strong>`,
          buttons: [
            {
              text: 'Batal',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                console.log(`Memilih batal adopsi ${theCat?.nama}`)
              },
            },
            {
              text: 'Ok',
              handler: () => {
                console.log(`Ok, proses adopsi ${theCat?.nama}!`)
              },
            },
          ],
        });
      return alert.present();
    }
  },
  components: {
    IonImg,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem
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
