import { defineStore } from "pinia";

export const store = defineStore("main", {
  state: () => ({ count: 0 }),
  getters: {
    countGetter: (state) => state.count,
  },
  actions: {
    incrementCount() {
      this.count++;
    },
    decrementCount() {
      this.count--;
    },
  },
});
