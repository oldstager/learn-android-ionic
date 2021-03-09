<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button 
            :text="getBackButtonText()" 
            default-href="/">
          </ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true" v-if="actor">
      <ion-item>
        <ion-icon :icon="personCircle" color="primary"></ion-icon>
        <ion-label class="ion-text-wrap">
          <h2>
            {{ actor.name }}
            <span class="date">
              <ion-note>
                {{ actor.birthDate }} 
                ( Usia: {{ usia }} tahun )
              </ion-note>
            </span>
          </h2>
        </ion-label>
      </ion-item>
      
      <div class="ion-padding">
        <ion-img class="img-wrapper" :src="actor.photo"></ion-img>
      
      <table>
        <tr>
          <td width="10%">Pasangan</td>
          <td width="1%">:</td>
          <td>{{ actor.wife }}</td>
        </tr>
        <tr>
          <td>Tempat Lahir</td>
          <td>:</td>
          <td>{{ actor.bornAt }}</td>
        </tr>
        <tr>
          <td>Berat Badan</td>
          <td>:</td>
          <td>{{ actor.weight }}</td>
        </tr>
        <tr v-if="actor.hasChildren">
          <td>Anak</td>
          <td>:</td>
          <td>
            <ol>
              <li 
                v-for="(child, index) in actor.children" 
                :key="index">{{ child }}
              </li>
            </ol>
          </td>
        </tr>
        <tr v-if="actor.hasGreyHar">
          <td>Rambut Abu-abu</td>
          <td>:</td>
          <td>Ya</td>
        </tr>
        <tr>
          <td>Filmografi</td>
          <td>:</td>
          <td>
            <ol>
              <li 
                v-for="(film, index) in actor.filmography" 
                :key="index">{{ film }}
              </li>
            </ol>
          </td>
        </tr>
      </table>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { useRoute } from 'vue-router';
import { IonImg, IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonNote, IonPage, IonToolbar } from '@ionic/vue';
import { personCircle } from 'ionicons/icons';
import { defineComponent } from 'vue';
import Rest from '@/services/Rest';
import spacetime from "spacetime";

export default defineComponent({
  name: 'ViewActor',
  data() {
    return {
      actor: {},
      usia: 0,
      personCircle,
      getBackButtonText: () => {
        const win = window as any;
        const mode = win && win.Ionic && win.Ionic.mode;
        return mode === 'ios' ? 'Inbox' : '';
      }
    }
  },
  ionViewWillEnter() {  
    
    const route = useRoute();
    const theId = parseInt(route.params.id as string, 10);
    
    const getRest = new Rest('http://192.168.1.5:4000/actors/' + theId);
    getRest.get().
      then((ok: any) => {
        this.actor = ok.data;
        const dob = spacetime(ok.data.birthDate, 'America/New_York');
        const t = Date.now() - dob.epoch;
        const tAge = new Date(t);
        this.usia = Math.abs(tAge.getUTCFullYear() - 1970);
      }
    );

  },
  components: {
    IonImg,
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonNote,
    IonPage,
    IonToolbar
  },
});
</script>

<style scoped>
ion-item {
  --inner-padding-end: 0;
  --background: transparent;
}

ion-label {
  margin-top: 12px;
  margin-bottom: 12px;
}

ion-item h2 {
  font-weight: 600;
}

ion-item .date {
  float: right;
  align-items: center;
  display: flex;
}

ion-item ion-icon {
  font-size: 42px;
  margin-right: 8px;
}

ion-item ion-note {
  font-size: 15px;
  margin-right: 12px;
  font-weight: normal;
}

table {
  width: 100%;
}

tr:hover {background-color: #f5f5f5;}

td {
  white-space: nowrap;
  vertical-align: top;
  padding: 5px;
}

h1 {
  margin: 0;
  font-weight: bold;
  font-size: 22px;
}

p {
  line-height: 22px;
}
</style>