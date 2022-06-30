<template>
  <div class="col-md-8">
    <Map />
  </div>
  <div class="col-m-4">
    <Places />
  </div>
</template>

<script>
import Map from "../components/Map.vue";
import Places from "../components/Places.vue";
import { store } from "../store.js";
import axios from "axios";

export default {
  components: {
    Map,
    Places,
  },
  data() {
    return {
      store,
    };
  },
  mounted() {
    axios
      .get(
        "https://ipgeolocation.abstractapi.com/v1/?api_key=8a7e5729eb624b5598766419a83486b9"
      )
      .then(function (response) {
        console.log(response);
        // handle success
        store.city = response.data.city;
        store.country = response.data.country;
        store.postcode = response.data.postal_code;
        store.lat = response.data.latitude;
        store.long = response.data.longitude;
        store.start = [store.long, store.lat];
        console.log(store.start);
        store.show = true;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  },
};
</script>

<style scoped>
@import url("../components/bootstrap.min.css");
</style>
