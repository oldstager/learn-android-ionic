<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>HTML Canvas - Ionic/Vue</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">

      <canvas id="c"></canvas>
      <div>
        <ion-button @click="drawRect">Tambahkan Kotak</ion-button>
        <ion-button @click="subWidth">-</ion-button>
        <ion-button @click="addWidth">+</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Canvas',
  el: '#app',
  data() {
    return {
      vueCanvas: null,
      rectWidth: 200
    }
  },
  mounted() {
      const c = document.getElementById("c");
      const ctx = c.getContext("2d");    
      this.vueCanvas = ctx;
  },
  methods: {
    drawRect() {
      this.vueCanvas.clearRect(0, 0, 400, 200);
      
      this.vueCanvas.beginPath();
      this.vueCanvas.rect(20, 20, this.rectWidth, 100);
      this.vueCanvas.stroke();      
    },
    addWidth() {
      this.rectWidth += 10
      this.drawRect()
    },
    subWidth() {
      this.rectWidth -= 10
      this.drawRect()      
    }
  },
  components: {
    IonButton,
    IonContent,
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

#c {
  height: 200px;
  width: 400px;
  border: 1px solid gray;
}
</style>
