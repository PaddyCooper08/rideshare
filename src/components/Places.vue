<template>
  <div class="container bg-slate-200 rounded-md h-100 p-9">
    <div class="text-center">
      <h1 class="underline text-3xl p-3">Rideshare</h1>
      <p class="flex-wrap">
        Click where you would like to go on the map and our AI will find you a
        rideshare partner nearby!
      </p>

      
    </div>
  </div>
</template>

<script>
import axios from "axios";
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
  
};
</script>

<style scoped></style>
