<template>
  <div
    v-if="this.showSpinner"
    class="justify-center mx-auto my-auto spinner align-center"
  >
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
  </div>
  <div
    v-if="this.showRest"
    class="
      container
      items-center
      justify-center
      text-[#00345c]
      px-4
      py-3
      m-4
      mx-auto
      text-center
      bg-white
      rounded-md
      shadow
      sm:p-6
    "
  >
    <h1 class="p-1 mb-6 text-6xl">You're all set!</h1>
    <h2>
      You're ride sharing with
      <span class="text-rose-700">{{ this.name }}</span>
    </h2>
    <h2>
      If anything changes contact them at
      <a :href="this.emailLink" class="text-rose-700">{{ this.email }}</a>
    </h2>
    <Star /> <C02Counter :c02="store.carbon" />
  </div>
</template>

<script>
import C02Counter from "./C02counter.vue";
import Star from "./Star.vue";
import { store } from "../store.js";

import axios from "axios";
export default {
  data() {
    return {
      store,
      showSpinner: true,
      showRest: false,
    };
  },
  props: ["reg", "name", "email", "emailLink"],
  components: {
    C02Counter,
    Star,
  },
  methods: {
    showS() {
      this.showSpinner = false;
      this.showRest = true;
      this.Confetti();
    },
    Confetti() {
      const jsConfetti = new JSConfetti();

      jsConfetti.addConfetti({
        emojis: ["🚗", "🌿", "🏭", "⛽", "🌲", "🌴", "🌷"],
        emojiSize: 75,
        confettiNumber: 74,
      });
    },
  },

  async mounted() {
    setTimeout(this.showS, 4000);

    const options = {
      method: "POST",
      url: "https://cors-anywhere.herokuapp.com/https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles",
      headers: {
        "content-type": "application/json",
        "x-api-key": "REmv9sFZbE3Dc9tbvWlpraoGUNnaoYKi1ulj1gtI",
      },
      data: { registrationNumber: this.reg },
    };

    axios
      .request(options)
      .then(function (response) {
        store.carbon = response.data.co2Emissions;
      })
      .catch(function (error) {
        alert(
          "Car reg invalid, please re-enter data, page will reload when you close this dialog "
        );
        window.location.reload(true);
      });
  },
};
</script>

<style scoped>
.spinner {
  animation: rotate 0.8s infinite linear;
  position: relative;
  display: block;
  width: 500px;
  height: 500px;
}
.spinner i {
  animation: rotate 3s infinite linear;
  transform-origin: 50% 100% 0;
  position: absolute;
  display: inline-block;
  top: 50%;
  left: 50%;
  border: solid 12px transparent;
  border-bottom: none;
}
.spinner i:nth-child(1) {
  animation-timing-function: cubic-bezier(0.09, 0.3, 0.12, 0.03);
  width: 44px;
  height: 22px;
  margin-top: -22px;
  margin-left: -22px;
  border-color: #2172b8;
  border-top-left-radius: 36px;
  border-top-right-radius: 36px;
}
.spinner i:nth-child(2) {
  animation-timing-function: cubic-bezier(0.09, 0.4, 0.14, 0.03);
  width: 58px;
  height: 29px;
  margin-top: -29px;
  margin-left: -29px;
  border-color: #18a39b;
  border-top-left-radius: 42px;
  border-top-right-radius: 42px;
}
.spinner i:nth-child(3) {
  animation-timing-function: cubic-bezier(0.09, 0.6, 0.16, 0.03);
  width: 72px;
  height: 36px;
  margin-top: -36px;
  margin-left: -36px;
  border-color: #82c545;
  border-top-left-radius: 48px;
  border-top-right-radius: 48px;
}
.spinner i:nth-child(4) {
  animation-timing-function: cubic-bezier(0.09, 0.8, 0.18, 0.03);
  width: 86px;
  height: 43px;
  margin-top: -43px;
  margin-left: -43px;
  border-color: #f8b739;
  border-top-left-radius: 54px;
  border-top-right-radius: 54px;
}
.spinner i:nth-child(5) {
  animation-timing-function: cubic-bezier(0.09, 1, 0.2, 0.03);
  width: 100px;
  height: 50px;
  margin-top: -50px;
  margin-left: -50px;
  border-color: #f06045;
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
}
.spinner i:nth-child(6) {
  animation-timing-function: cubic-bezier(0.09, 1.2, 0.22, 0.03);
  width: 114px;
  height: 57px;
  margin-top: -57px;
  margin-left: -57px;
  border-color: #ed2861;
  border-top-left-radius: 66px;
  border-top-right-radius: 66px;
}
.spinner i:nth-child(7) {
  animation-timing-function: cubic-bezier(0.09, 1.4, 0.24, 0.03);
  width: 128px;
  height: 64px;
  margin-top: -64px;
  margin-left: -64px;
  border-color: #c12680;
  border-top-left-radius: 72px;
  border-top-right-radius: 72px;
}
.spinner i:nth-child(8) {
  animation-timing-function: cubic-bezier(0.09, 1.6, 0.26, 0.03);
  width: 142px;
  height: 71px;
  margin-top: -71px;
  margin-left: -71px;
  border-color: #5d3191;
  border-top-left-radius: 78px;
  border-top-right-radius: 78px;
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}
</style>