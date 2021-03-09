<template>
  <ion-slides pager="true" :options="slideOpts">
    <ion-slide>
      <h1>Slide pertama</h1>
    </ion-slide>
    <ion-slide>
      <h1>Slide kedua</h1>
    </ion-slide>
    <ion-slide>
      <h1>Slide ketiga</h1>
    </ion-slide>
  </ion-slides>
</template>


<script>
import { IonSlides, IonSlide } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonSlides, IonSlide },
  setup() {
    // Komponen diambil dari http://idangero.us/swiper/api/ 
    // API dan opsi bisa diakses dari URL tersebut.
    const slideOpts = {
      initialSlide: 1,
      speed: 400
    };
    return { slideOpts }
  }
});
</script>