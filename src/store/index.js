import { defineStore } from "pinia";

export const store = defineStore("main", {
  state: () => ({
    coords: { latitude: "0", longitude: "0" },
    current: {},
    location: {},
    API_KEY: "bfb13de1cffa47f284f90409220702",
    isLoad: true,
  }),
  getters: {},
  actions: {
    defineCoords(position) {
      this.coords.latitude = position.coords.latitude;
      this.coords.longitude = position.coords.longitude;
    },
    async getWeather() {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${this.API_KEY}&q=${this.coords.latitude},${this.coords.longitude}&aqi=no`
      );
      if (response.ok) {
        let { current, location } = await response.json();
        this.current = current;
        this.location = location;
        this.isLoad = false;
      }
    },
  },
});
