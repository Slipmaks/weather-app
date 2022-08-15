<template>
  <section class="wrapper">
    <the-header></the-header>

    <modal-weather></modal-weather>
  </section>
</template>

<script setup>
import ModalWeather from "./components/ModalWeather.vue";
import { store } from "./store/index";
import TheHeader from "./components/TheHeader.vue";
import { onMounted } from "vue";

const useStore = store();

onMounted(() => {
  const success = (pos) => {
    useStore.defineCoords(pos);
    useStore.getWeather();
  };
  const error = (err) => {
    console.log(err);
  };
  navigator.geolocation.getCurrentPosition(success, error);
});
</script>

<style scoped>
.wrapper {
  @apply flex flex-col items-center justify-start;
}
</style>
