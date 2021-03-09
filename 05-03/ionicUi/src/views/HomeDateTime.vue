<template>

  <ion-item>
    <ion-label>Pilih tanggal:</ion-label>
    <ion-datetime :picker-options="customPickerOptions" placeholder="Pilih tanggal" display-format="DD-MM-YYYY" min="1981" max="2002"></ion-datetime>
  </ion-item>

</template>

<script>
import { IonDatetime, IonItem, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonDatetime, IonItem, IonLabel },
  setup() {
    const customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: (pilihan) => {
          console.log('Pilihan anda:', pilihan)
        }
      }, {
        text: 'Batal',
        handler: () => {
          console.log('Anda memilih batal.');
          return true;
        }
      }]
    }

    return {
      customPickerOptions
    }
  }
});
</script>