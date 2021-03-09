<template>
  <div id="container">  
    <ion-button @click="tampilkanAlert">Tampilkan Alert</ion-button>
    <ion-button @click="tampilkanKonfirmasi">Tampilkan Konfirmasi</ion-button>
    <ion-button @click="tampilkanInput">Tampilkan Input</ion-button>
    <p>
      Pilihan anda = {{ hasilAlert }}
    </p>
  </div>
</template>

<script>
import { IonButton, alertController } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonButton },
  data() {
    return {
      hasilAlert: '',
    }
  },
  methods: {
    async tampilkanAlert() {
      const alert = await alertController
        .create({
          header: 'MaskaApp:',
          subHeader: 'Pemberitahuan',
          message: 'Proses sudah selesai.',
          buttons: [{
            text: 'Ok',
            handler: () => {
              this.hasilAlert = "Ok dipilih"
            }
          }]
        });
      return alert.present();
    },

    async tampilkanKonfirmasi() {
      const alert = await alertController
        .create({
          header: 'MaskaApp:',
          subheader: "Peringatan:",
          message: 'Pilih salah satu!',
          buttons: [
            {
              text: 'Batal',
              role: 'cancel',
              handler: () => {
                this.hasilAlert = 'Konfirmasi batal'
              },
            },
            {
              text: 'Ok',
              handler: () => {
                this.hasilAlert = 'Ok dipilih'
              },
            },
          ],
        });
      return alert.present();
    },

    async tampilkanInput() {
      const alert = await alertController
        .create({
          header: 'MaskaApp:',
          subheader: 'Masukkan password: ',
          inputs: [
            {
              name: 'passwd',
              type: 'password',
              placeholder: 'password...',
              attributes: {
                maxlength: 8
              }
            }
          ],
          buttons: [
            {
              text: 'Batal',
              role: 'cancel',
              handler: () => {
                this.hasilAlert = 'Batal'
              },
            },
            {
              text: 'Ok',
              handler: (alertData) => {
                this.hasilAlert = alertData.passwd
              },
            },
          ],
        });
      return alert.present();
    },
  },
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
</style>
