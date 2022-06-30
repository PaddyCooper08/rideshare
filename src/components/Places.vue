<template>
  <form>
    <div style="width: 100%">
      <p>Name</p>
      <input name="name" autofocus />
    </div>
    <div style="width: 100%">
      <p>IDENTIFICATION</p>
      <input name="id" />
    </div>

    <div style="width: 47%">
      <p>Destination</p>
      <input name="email" />
    </div>
    <div style="width: 47%; margin-left: 6%">
      <p>PHONE</p>
      <input name="phone" />
    </div>
  </form>

  <div v-if="store.isData">
    <p>ETA: {{ store.eta }}, Distance: {{ store.distance }}</p>
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

<style scoped>
@import url("./bootstrap.min.css");
@import url("mapbox-gl-controls/lib/controls.css");
input:focus {
  outline: none;
}

form {
  width: 35%;
  margin-left: auto;
  margin-right: auto;
  padding: 50px;
  background: whitesmoke;
  border-radius: 5px;
  position: relative;
  font-family: "Libre Franklin", sans-serif;
}

form > div {
  float: left;
  margin-bottom: 30px;
}
form > div > p {
  font-size: 12px;
  margin-bottom: 3px;
}
form > div > input {
  font-size: 12px;
  letter-spacing: 1px;
  padding: 5px;
  border: 0;
  background: whitesmoke;
  border-bottom: 1px solid silver;
  width: 100%;
  color: gray;
}

form > p:last-of-type {
  text-align: center;
  padding-top: 50px;
  display: table;
  width: 100%;
  color: white;
}

.term {
  padding-top: 40px;
  display: flex;
  width: 100%;
  align-items: center;
}

.term > i {
  cursor: pointer;
  width: 20px;
}

.term > span {
  font-size: 12px;
}
</style>
