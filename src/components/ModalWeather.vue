<template>
  <section class="flex-0">
    <h2>Modal view</h2>
    <section class="modal-wrapper" v-if="!useStore.isLoad">
      <section
        class="flex justify-between items-center flex-col m-2 bg-cyan-800 bg-opacity-20 rounded-lg p-2"
      >
        <h3 class="font-black text-lg text-white">Current location weather</h3>
        <p class="text-white">{{ location.region }}, {{ location.name }}</p>
      </section>
      <section class="flex items-center justify-between m-4">
        <section>
          <p class="font-black text-4xl text-slate-700">
            {{ current.temp_c }} °C
          </p>
          <p class="text-cyan-800 opacity-50 font-bold">
            {{ current.condition.text }}
          </p>
        </section>
        <img :src="current.condition.icon" :alt="current.condition.text" />
      </section>
      <section
        class="bg-cyan-800 bg-opacity-20 text-center rounded-b-xl text-white"
      >
        last update {{ current.last_updated }}
      </section>
    </section>
  </section>
</template>
<script setup>
import { store } from "../store/index";
import { storeToRefs } from "pinia";
const useStore = store();
const { current, location } = storeToRefs(useStore);
</script>
<style scoped>
.modal-wrapper {
  @apply border rounded-xl border-zinc-100  bg-slate-100 bg-opacity-60 hover:bg-opacity-100 transition-all max-w-sm;
}
</style>
