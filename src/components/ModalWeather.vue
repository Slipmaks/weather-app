<template>
  <section>
    <h2>Modal view</h2>
    <section class="modal-wrapper" v-if="!useStore.isLoad">
      <section class="flex justify-between items-center">
        <h3 class="font-black text-lg text-cyan-500">
          Current location weather
        </h3>
        <section class="flex items-center">
          <p class="text-orange-600 font-bold">
            {{ current.condition.text }}
          </p>
          <img :src="current.condition.icon" :alt="current.condition.text" />
        </section>
      </section>
      <p>Region: {{ location.region }}, {{ location.name }}</p>
      <p>Temperature: {{ current.temp_c }} celcium</p>
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
  @apply border rounded-xl border-zinc-200 p-2 bg-slate-50 hover:bg-slate-100 transition-all;
}
</style>
