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

  <ion-grid>
    <ion-row>

      <ion-col v-for="cat in cats" :key="cat.id">
        {{ cat.title }}<br />
         <ion-img class="img-wrapper" :src="cat.thumbnailUrl"></ion-img>
      </ion-col>

    </ion-row>

  </ion-grid>

  </ion-content>
  </ion-page>

</template>

<script lang="ts">
import { IonImg, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ViewCat',
  data() {
    return {
      cats: []
    }
  },
  mounted() {
    this.axios.get("https://jsonplaceholder.typicode.com/photos").then((response: any) => {
      this.cats = response.data;
    })
  },
  components: {
    IonImg,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
  }
})
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
