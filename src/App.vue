<template>
  <section class="wrapper">
    <the-header></the-header>
    <!-- <button @click="switchView">switch</button> -->
    <component :is="componentsList[comp]"></component>
    <the-footer></the-footer>
  </section>
</template>

<script setup>
import TheHeader from "./components/TheHeader.vue";
import ModalWeather from "./components/ModalWeather.vue";
import PageWeather from "./components/PageWeather.vue";
import TheFooter from "./components/TheFooter.vue";
import { store } from "./store/index";
import { onMounted, ref } from "vue";

const componentsList = {
  ModalWeather,
  PageWeather,
};

const useStore = store();
const comp = ref("ModalWeather");

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

const switchView = () => {
  if (comp.value === "ModalWeather") {
    comp.value = "PageWeather";
  } else {
    comp.value = "ModalWeather";
  }
};
</script>

<style scoped>
.wrapper {
  @apply flex flex-col items-center justify-start h-full;
}
</style>
