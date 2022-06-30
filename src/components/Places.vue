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
  methods: {
    getFakeData() {
      axios
        .get("https://randomuser.me/api")
        .then(function (response) {
          console.log(response);
          
          store.firstName = response.data.results.first;
          store.lastName = response.data.results.last;
          store.email = response.data.results.email;
          store.img = response.data.results.picture;
          store.age = response.data.results.dob;
          store.show2 = true;
          console.log(store.firstName);
          console.log(store.lastName);
          console.log(store.email);
          console.log(store.img);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    },
  },
};
</script>

<style scoped></style>
