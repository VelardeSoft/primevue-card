import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

import Card from "primevue/card";
import Button from "primevue/button";
import FloatLabel from "primevue/floatlabel";
import InputText from "primevue/inputtext";

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});

app.component('pv-card', Card);
app.component('pv-button', Button);
app.component('pv-floatlabel', FloatLabel);
app.component('pv-inputtext', InputText);


app.mount('#app');
