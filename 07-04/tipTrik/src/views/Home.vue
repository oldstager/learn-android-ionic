<template>
  <ion-page>
    
    <ion-content>
    
      <p v-pin:[direction]="200">Demo custom directive</p>

      <ion-list>
        <ion-item v-for="post in dataPosts" :key="post.id">
          <b>ID</b>: {{ post.id }}<br />
          <b>User ID</b>: {{ post.userId }}<br />
          <b>Title</b>: {{ post.title }}<br />
          <b>Body</b>: {{ post.body }}<br />
        </ion-item>
      </ion-list>
      <ion-button>Button Shadow</ion-button>
      <p>Contoh komponen IonButton yang sudah didesain ulang</p>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonList, IonItem, IonContent, IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';
import Rest from '@/services/Rest';

export default defineComponent({
  name: 'Home',
  data() {
    return {
      direction: 'left',
      dataPosts: {}
    }
  },
  ionViewDidEnter() {
    console.log('Home page did enter');
  },
  ionViewDidLeave() {
    console.log('Home page did leave');
  },
  ionViewWillEnter() {
    const getRest = new Rest('https://jsonplaceholder.typicode.com/posts');
    getRest.get().
      then((ok: any) => (this.dataPosts = ok.data));

  },
  ionViewWillLeave() {
    console.log('Home page will leave');
  },  
  components: {
    IonContent,
    IonPage,
    IonList,
    IonItem,
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
</style>
