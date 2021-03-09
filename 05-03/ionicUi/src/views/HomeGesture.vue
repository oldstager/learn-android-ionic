<template>
    <div class="rectangle"></div>
    <p>
      Swipe to start tracking
    </p>
</template>

<script>

import { createGesture } from '@ionic/vue';
import { defineComponent } from 'vue';

const p = document.querySelector("p")
const rectangleRef = document.querySelector("rectangle")

const onMove = (detail) => {
  const type = detail.type;
  const currentX = detail.currentX;
  const deltaX = detail.deltaX;
  const velocityX = detail.velocityX;
    
  p.innerHTML = `
    <div>Type: ${type}</div>
    <div>Current X: ${currentX}</div>
    <div>Delta X: ${deltaX}</div>
    <div>Velocity X: ${velocityX}</div>
  `
}

const gesture = createGesture({
  el: rectangleRef,
  onMove: (detail) => { onMove(detail); }
})

gesture.enable(true);

export default defineComponent({
  name: 'Home',
  components: gesture
});

</script>

<style scoped>
.rectangle {
  width: 500px;
  height: 100px;
  background: rgba(0, 0, 255, 0.5);
}
</style>