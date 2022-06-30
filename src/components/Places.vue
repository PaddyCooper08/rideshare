<template>
  <div class="text-center">
    <h1 class="underline text-3xl">Rideshare</h1>

    <div v-if="store.isData">
      <p>ETA: {{ store.eta }}, Distance: {{ store.distance }}</p>
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
