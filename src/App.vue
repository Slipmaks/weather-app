<template>
  <the-header></the-header>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <section>
    <!-- <section v-if="useStore?.currentLocation?.length > 0"> -->
    <section v-if="!useStore.isLoad">
      <h2>Pogoda</h2>
      <p>{{ useStore.current.temp_c }} celcium</p>
      <p>Oblast: {{ useStore.location.name }}</p>
      <p>Region: {{ useStore.location.region }}</p>
    </section>

    <p>
      Lalitude: {{ useStore.coords.latitude }}, Longtitude:
      {{ useStore.coords.longitude }}
    </p>
  </section>
</template>

<script setup>
import { store } from "./store/index";
import TheHeader from "./components/TheHeader.vue";
import { onMounted } from "vue";

const useStore = store();
// const { current, location } = useStore;

// const currentLocation = useStore.currentLocation;

const getPosition = onMounted(() => {
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
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
