<template>
  <div class="container bg-slate-200 rounded-md h-100 p-9">
    <div class="text-center">
      <h1 class="underline text-3xl p-3">Rideshare</h1>
      <p class="flex-wrap">
        Click where you would like to go on the map and our AI will find you a
        rideshare partner nearby!
      </p>
    </div>
    <a @click="this.getFakeData">get data</a>
    <div v-if="store.show2">
      <h1>
        {{ store.firstName }}, {{ store.lastName }}, {{ store.email }},
        {{ store.age }},
      </h1>
      <img :src="store.img" alt="" />
    </div>
  </div>
</template>

<script>
import { store } from "../store.js";
import Map from "./Map.vue";
// import mapboxgl from "mapbox-gl";
// import { GeolocateControl } from "mapbox-gl-controls";

export default {
  data() {
    return {
      store,
    };
  },

  components: {
    Map,
  },
  methods: {
    async getFakeData() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();
      store.firstName = results[0].name.first;
      store.lastName = results[0].name.last;
      store.email = results[0].email;
      store.age = results[0].dob.age;
      store.img = results[0].picture.large;

      store.show2 = true;
    },
  },
};
</script>

<style scoped></style>
