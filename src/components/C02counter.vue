<template>
  <h1>{{ this.c02 }}</h1>
</template>

<script>
import { store } from "../store.js";
export default {
  data() {
    return {
      store,
      emSaved: Number,
    };
  },
  props: ["c02"],
  mounted() {
    // let carbon = this.c02.slice(0, -5).toNumber();
    let c002 = this.c02;
    let carbon = parseFloat(c002);
    console.log(carbon);
    let dist = (store.distance / 1000).toFixed(2);
    console.log(dist);
    let emissionsSaved = Math.round(carbon * dist);
    this.emSaved = emissionsSaved;

    console.log(emissionsSaved);
  },
};
</script>

<style>
</style>