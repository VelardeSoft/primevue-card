import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

import Card from "primevue/card";
import Button from "primevue/button";

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});

app.component('pv-card', Card);
app.component('pv-button', Button);

app.mount('#app');
