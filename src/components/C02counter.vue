<template>
  <h1 class="text-2xl">
    You've stopped
    <span class="text-[#ebc4f5]">{{ this.emSaved }}kg</span>
    of harmful carbon dioxide being let into the atmosphere
  </h1>
  <h1 class="mb-2 text-2xl">
    You've allowed <span class="text-[#ebc4f5]">{{ this.trueDays }}</span> trees
    to have a day off from extracting carbon dioxide for the atmosphere. <br />

    <span class="text-4xl line-clamp"
      ><span class="text-2xl">
        That's this many!!! <i class="bi bi-arrow-right"></i
      ></span>
      {{ this.Emojis }}
      <p class="text-2xl" v-if="this.isExtra">
        There's so many they don't even fit on the screen!
      </p></span
    >
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
      isExtra: false,
      trueDays: Number,
    };
  },
  props: ["c02"],
  mounted() {
    // let carbon = this.c02.slice(0, -5).toNumber();
    let c002 = this.c02;
    let carbon = parseFloat(c002);

    let dist = (store.distance / 1000).toFixed(2);

    let emissionsSaved = ((carbon * dist) / 1000).toFixed(2);
    this.emSaved = emissionsSaved;
    let tree = 0.058;
    let rawTree = emissionsSaved / tree;
    this.treeDays = Math.ceil(rawTree);

    this.trueDays = this.treeDays;

    //

    // 40 emojis tops
    if (this.treeDays > 40) {
      this.treeDays = 41;
      this.isExtra = true;
    }

    const loopTime = this.treeDays;

    for (let i = 0; i < loopTime; i++) {
      this.Emojis += "🌲";
    }
  },
};
</script>

<style scoped>
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>