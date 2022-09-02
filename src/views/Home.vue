<template>
  <div class="row g-0">
    <div class="col-md-8" v-show="store.show">
      <!-- <Map /> -->
      <SkeletonMap />
    </div>
    <div class="col-md-4">
      <!-- <Places /> -->
      <SkeletonPlaces />
    </div>
  </div>
</template>

<script>
import Map from "../components/Map.vue";
import Places from "../components/Places.vue";
import SkeletonPlaces from "../components/SkeletonPlaces.vue";
import SkeletonMap from "../components/SkeletonMap.vue";
import { store } from "../store.js";
import axios from "axios";

export default {
  components: {
    Map,
    Places,
    SkeletonPlaces,
    SkeletonMap,
  },
  data() {
    return {
      store,
    };
  },
  created() {
    axios
      .get(
        "https://ipgeolocation.abstractapi.com/v1/?api_key=8a7e5729eb624b5598766419a83486b9"
      )
      .then(function (response) {
        // handle success
        store.city = response.data.city;
        store.country = response.data.country;
        store.postcode = response.data.postal_code;
        store.lat = response.data.latitude;
        store.long = response.data.longitude;
        store.start = [store.long, store.lat];

        store.show = true;
      })
      .catch(function (error) {
        // handle error
      })
      .then(function () {
        // always executed
      });
  },
};
</script>

<style scoped>
@import url("../components/bootstrap.min.css");
@import url("mapbox-gl-controls/lib/controls.css");
</style>
