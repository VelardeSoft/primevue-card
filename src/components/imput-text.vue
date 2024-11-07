
<template>
  <div class="component">
    <div class="card flex flex-wrap justify-center items-end gap-4 tere">
      <pv-floatlabel style="margin-top: 10%">
        <pv-inputtext id="over_label" v-model="value1" />
        <label for="over_label">Over Label</label>
      </pv-floatlabel>

      <pv-floatlabel variant="in" style="margin-top: 10%">
        <pv-inputtext id="in_label" v-model="value2" variant="filled" />
        <label for="in_label">In Label</label>
      </pv-floatlabel>

      <pv-floatlabel variant="on" style="margin-top: 10%">
        <pv-inputtext id="on_label" v-model="value3" />
        <label for="on_label">On Label</label>
      </pv-floatlabel>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(null);
const value2 = ref(null);
const value3 = ref(null);
</script>

<style scoped>
.component {
  display: flex; /* Que sea un contenedor flex */
  justify-content: center; /* Centrar horizontalmente */
  align-items: center; /* Centrar verticalmente */
  height: 100vh; /* Altura del 100% de la pantalla */
}
.tere{
  border: 1px solid #ecebeb; /* Borde suave */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Sombra suave */
  border-radius: 10px;
  padding: 6%;
}
</style>
