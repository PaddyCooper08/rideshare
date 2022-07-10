<template>
  <div v-if="this.renderMap"><Map :showMap="this.renderMap" /></div>
  <div
    v-show="!this.renderMap"
    class="container h-screen p-0 m-0 mb-0 bg-white rounded-md shadow"
  >
    <svg viewBox="0 0 503 418" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="25" height="418" rx="6" fill="#D9D9D9" />
      <rect
        class="animate-pulse"
        x="36"
        y="25"
        width="25"
        height="467"
        rx="6"
        transform="rotate(-90 36 25)"
        fill="#D9D9D9"
      />
      <rect
        class="animate-pulse"
        x="124"
        y="418"
        width="25"
        height="251"
        rx="6"
        transform="rotate(-180 124 418)"
        fill="#D9D9D9"
      />
      <rect
        class="animate-pulse"
        x="91"
        y="279"
        width="25"
        height="100"
        rx="6"
        transform="rotate(-180 91 279)"
        fill="#D9D9D9"
      />
      <rect
        class="animate-pulse"
        x="91"
        y="376"
        width="25"
        height="80"
        rx="6"
        transform="rotate(-180 91 376)"
        fill="#D9D9D9"
      />
      <rect
        class="animate-pulse"
        x="503"
        y="342"
        width="25"
        height="300"
        rx="6"
        transform="rotate(-180 503 342)"
        fill="#D9D9D9"
      />
      <rect
        class="animate-pulse"
        x="62"
        y="418"
        width="25"
        height="300"
        rx="6"
        transform="rotate(-180 62 418)"
        fill="#D9D9D9"
      />
      <rect
        class="animate-pulse"
        x="456"
        y="161"
        width="25"
        height="100"
        rx="6"
        transform="rotate(-180 456 161)"
        fill="#D9D9D9"
      />
      <rect
        x="378"
        y="418"
        width="25"
        height="63"
        rx="6"
        transform="rotate(-180 378 418)"
        fill="#D9D9D9"
      />
      <rect
        class="animate-pulse"
        x="503"
        y="418"
        width="25"
        height="63"
        rx="6"
        transform="rotate(-180 503 418)"
        fill="#D9D9D9"
      />
      <rect
        x="339"
        y="349"
        width="25"
        height="73"
        rx="6"
        transform="rotate(-180 339 349)"
        fill="#D9D9D9"
      />
      <rect
        class="animate-pulse"
        x="161"
        y="308"
        width="25"
        height="100"
        rx="6"
        transform="rotate(-180 161 308)"
        fill="#D9D9D9"
      />
      <rect
        class="animate-pulse"
        x="131"
        y="349"
        width="25"
        height="100"
        rx="6"
        transform="rotate(-90 131 349)"
        fill="#D9D9D9"
      />
      <rect
        x="193"
        y="308"
        width="25"
        height="100"
        rx="6"
        transform="rotate(-90 193 308)"
        fill="#D9D9D9"
      />
      <rect
        class="animate-pulse"
        x="136"
        y="387"
        width="25"
        height="190"
        rx="6"
        transform="rotate(-90 136 387)"
        fill="#D9D9D9"
      />
      <rect
        x="243"
        y="349"
        width="25"
        height="61"
        rx="6"
        transform="rotate(-90 243 349)"
        fill="#D9D9D9"
      />
      <rect
        class="animate-pulse"
        x="395"
        y="380"
        width="25"
        height="61"
        rx="6"
        transform="rotate(-90 395 380)"
        fill="#D9D9D9"
      />
      <rect
        x="395"
        y="416"
        width="25"
        height="61"
        rx="6"
        transform="rotate(-90 395 416)"
        fill="#D9D9D9"
      />
      <rect
        x="171"
        y="233"
        width="25"
        height="60"
        rx="6"
        transform="rotate(-90 171 233)"
        fill="#D9D9D9"
      />
      <rect
        x="264"
        y="160"
        width="25"
        height="150"
        rx="6"
        transform="rotate(-90 264 160)"
        fill="#D9D9D9"
      />
      <rect
        class="animate-pulse"
        x="169"
        y="160"
        width="25"
        height="80"
        rx="6"
        transform="rotate(-90 169 160)"
        fill="#D9D9D9"
      />
      <rect
        class="animate-pulse"
        x="93"
        y="162"
        width="25"
        height="100"
        rx="6"
        transform="rotate(-180 93 162)"
        fill="#D9D9D9"
      />
      <rect
        class="animate-pulse"
        x="143"
        y="192"
        width="25"
        height="300"
        rx="6"
        transform="rotate(-90 143 192)"
        fill="#D9D9D9"
      />
      <rect
        class="animate-pulse"
        x="249"
        y="233"
        width="25"
        height="200"
        rx="6"
        transform="rotate(-90 249 233)"
        fill="#D9D9D9"
      />
      <rect
        x="169"
        y="271"
        width="25"
        height="300"
        rx="6"
        transform="rotate(-90 169 271)"
        fill="#D9D9D9"
      />
      <rect
        x="99"
        y="131"
        width="25"
        height="300"
        rx="6"
        transform="rotate(-90 99 131)"
        fill="#D9D9D9"
      />
      <rect
        class="animate-pulse"
        x="293"
        y="86"
        width="25"
        height="121"
        rx="6"
        transform="rotate(-90 293 86)"
        fill="#D9D9D9"
      />
      <rect
        class="animate-pulse"
        x="124"
        y="87"
        width="25"
        height="149"
        rx="6"
        transform="rotate(-90 124 87)"
        fill="#D9D9D9"
      />
      <rect
        x="357"
        y="308"
        width="25"
        height="99"
        rx="6"
        transform="rotate(-90 357 308)"
        fill="#D9D9D9"
      />
      <rect
        class="animate-pulse"
        x="150"
        y="418"
        width="25"
        height="99"
        rx="6"
        transform="rotate(-90 150 418)"
        fill="#D9D9D9"
      />
      <rect
        class="animate-pulse"
        x="262"
        y="416"
        width="25"
        height="79"
        rx="6"
        transform="rotate(-90 262 416)"
        fill="#D9D9D9"
      />
      <rect
        x="347"
        y="342"
        width="25"
        height="52"
        rx="6"
        transform="rotate(-90 347 342)"
        fill="#D9D9D9"
      />
      <rect
        class="animate-pulse"
        x="409"
        y="342"
        width="25"
        height="52"
        rx="6"
        transform="rotate(-90 409 342)"
        fill="#D9D9D9"
      />
      <rect
        x="36"
        y="56"
        width="25"
        height="290"
        rx="6"
        transform="rotate(-90 36 56)"
        fill="#D9D9D9"
      />
    </svg>
  </div>
</template>

<script>
import Map from "./Map.vue";
export default {
  components: {
    Map,
  },
  data() {
    return {
      renderMap: false,
    };
  },
  mounted() {
    setTimeout(this.renderMapp, 2000);
  },
  methods: {
    renderMapp() {
      this.renderMap = true;
    },
  },
};
</script>

<style>
</style>