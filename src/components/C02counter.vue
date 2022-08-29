<template>
  <h1 class="text-xl">
    You've stopped {{ this.emSaved }} grams of harmful carbon dioxide being let
    into the atmosphere
  </h1>
  <h1 class="text-xl">
    You've allowed {{ this.treeDays }} trees to have a day off from extracting
    carbon dioxide for the atmosphere.
    <span class="text-2xl">{{ this.Emojis }}</span>
  </h1>
</template>

<script>
import { store } from "../store.js";
export default {
  data() {
    return {
      store,
      emSaved: Number,
      treeDays: Number,
      Emojis: "",
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
    let tree = 58;
    let rawTree = emissionsSaved / tree;
    this.treeDays = Math.ceil(rawTree);

    console.log(this.treeDays);

    // console.log(emojis);

    console.log(emissionsSaved);

    const loopTime = this.treeDays;

    for (let i = 0; i < loopTime; i++) {
      this.Emojis += "🌲";
    }
  },
};
</script>

<style>
</style>