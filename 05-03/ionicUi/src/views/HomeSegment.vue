<template>
  <!-- Default Segment -->
  <ion-segment @ionChange="segmentChanged($event)">
    <ion-segment-button value="button1">
      <ion-label>Button 1</ion-label>
    </ion-segment-button>
    <ion-segment-button value="button2">
      <ion-label>Button 2</ion-label>
    </ion-segment-button>
  </ion-segment>

  <!-- Scrollable Segment -->
  <ion-segment scrollable value="heart">
    <ion-segment-button value="home">
      <ion-icon :icon="home"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="heart">
      <ion-icon :icon="heart"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="pin">
      <ion-icon :icon="pin"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="star">
      <ion-icon :icon="star"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="call">
      <ion-icon :icon="call"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="globe">
      <ion-icon :icon="globe"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="basket">
      <ion-icon :icon="basket"></ion-icon>
    </ion-segment-button>
  </ion-segment>

  <!-- Segment with secondary color -->
  <ion-segment @ionChange="segmentChanged($event)" color="secondary">
    <ion-segment-button value="standard">
      <ion-label>Standard</ion-label>
    </ion-segment-button>
    <ion-segment-button value="hybrid">
      <ion-label>Hybrid</ion-label>
    </ion-segment-button>
    <ion-segment-button value="sat">
      <ion-label>Satellite</ion-label>
    </ion-segment-button>
  </ion-segment>

  <!-- Segment dalam toolbar -->
  <ion-toolbar>
    <ion-segment @ionChange="segmentChanged($event)">
      <ion-segment-button value="camera">
        <ion-icon :icon="camera"></ion-icon>
      </ion-segment-button>
      <ion-segment-button value="bookmark">
        <ion-icon :icon="bookmark"></ion-icon>
      </ion-segment-button>
    </ion-segment>
  </ion-toolbar>

  <!-- Segment dengan pilihan default -->
  <ion-segment @ionChange="segmentChanged($event)" value="javascript">
    <ion-segment-button value="python">
      <ion-label>Python</ion-label>
    </ion-segment-button>
    <ion-segment-button value="javascript">
      <ion-label>Javascript</ion-label>
    </ion-segment-button>
  </ion-segment>
</template>

<script lang="ts">
import { IonSegment, IonSegmentButton, IonToolbar, IonIcon } from '@ionic/vue';
import { defineComponent } from 'vue';
import { home, heart, pin, star, call, globe, basket, camera, bookmark } from 'ionicons/icons';

export default defineComponent({
  components: { IonSegment, IonSegmentButton, IonToolbar, IonIcon },
  methods: {
    segmentChanged(ev: CustomEvent) {
      console.log('Segment changed', ev);
    }
  },
  setup() {
    return {
      home,
      heart,
      pin,
      star,
      call,
      globe,
      basket,
      camera,
      bookmark,
    }
  }
});
</script>