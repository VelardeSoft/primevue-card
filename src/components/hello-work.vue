
<template>
  <div class="contenedor">
    <pv-card style="width: 25rem; overflow: hidden">
      <template #header>
        <div style="text-align: center">
          <img alt="user header" src="../assets/img/tere.png" width="50%"/>
        </div>
      </template>
      <template #title>Advanced Card</template>
      <template #subtitle>Card subtitle</template>
      <template #content>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
          quas!
        </p>
        <br/>
      </template>
      <template #footer>
        <div class="flex" style="text-align: center">
          <pv-button label="Cancel" severity="secondary" outlined class="w-full" style="margin-right: 10px"/>
          <pv-button label="Save" class="w-full" style="margin-left: 10px"/>
        </div>
      </template>
    </pv-card>
  </div>
</template>

<script setup>
</script>

<style scoped>
.contenedor {
  display: flex; /* Que sea un contenedor flex */
  justify-content: center; /* Centrar horizontalmente */
  align-items: center; /* Centrar verticalmente */
  height: 100vh; /* Altura del 100% de la pantalla */
}
</style>
