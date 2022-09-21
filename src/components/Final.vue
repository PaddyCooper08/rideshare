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
    <h1 class="p-1 mb-2 text-6xl text-[#5ce7c8]">You're all set!</h1>
    <svg
      width="600"
      class="mb-4"
      height="80"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 511.999 511.999"
      style="enable-background: new 0 0 511.999 511.999"
      xml:space="preserve"
    >
      <polygon
        style="fill: #ff7099"
        points="501.801,120.455 441.047,59.701 169.957,330.79 70.954,231.787 10.199,292.541 
	169.957,452.299 "
      />
      <g>
        <path
          style="fill: #db006e"
          d="M169.957,462.498c-2.61,0-5.22-0.995-7.212-2.987L2.987,299.753c-3.983-3.983-3.983-10.441,0-14.425
		l60.754-60.754c1.912-1.912,4.507-2.987,7.212-2.987s5.3,1.075,7.212,2.987l91.793,91.793L433.835,52.489
		c3.982-3.983,10.441-3.983,14.424,0l60.754,60.755c3.983,3.983,3.983,10.441,0,14.424L177.169,459.51
		C175.178,461.502,172.567,462.498,169.957,462.498z M24.623,292.541l145.335,145.334l317.42-317.42l-46.33-46.33L177.169,338.003
		c-3.983,3.983-10.442,3.983-14.424,0L70.953,246.21L24.623,292.541z"
        />
        <path
          style="fill: #db006e"
          d="M355.91,234.596c-2.61,0-5.221-0.995-7.212-2.987c-3.983-3.983-3.983-10.441,0-14.425l74.423-74.423
		c3.983-3.983,10.441-3.983,14.425,0c3.984,3.983,3.983,10.441,0,14.425l-74.423,74.423
		C361.13,233.599,358.52,234.596,355.91,234.596z"
        />
        <path
          style="fill: #db006e"
          d="M454.884,135.649c-2.61,0-5.221-0.995-7.212-2.987c-3.983-3.983-3.983-10.441,0-14.425l2.55-2.55
		c3.983-3.983,10.441-3.983,14.425,0c3.983,3.983,3.983,10.441,0,14.425l-2.55,2.55
		C460.105,134.654,457.494,135.649,454.884,135.649z"
        />
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
    <h2 class="mb-2 text-3xl">
      You're ridesharing with
      <span class="text-[#ebc4f5]">{{ this.name }}</span>
    </h2>
    <i class="text-6xl bi bi-envelope-fill"></i>
    <h2 class="mb-2 text-3xl">
      You can contact them to discuss timings at
      <a :href="this.emailLink" class="text-[#ebc4f5]">{{ this.email }}</a>
    </h2>
    <svg
      class="mb-2"
      width="600"
      height="80"
      viewBox="0 0 492 533"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1_113)">
        <path
          d="M209.401 164.269L414.802 438.961H4L209.401 164.269Z"
          fill="#006738"
        />
      </g>
      <g filter="url(#filter1_dd_1_113)">
        <path
          d="M209.401 77.6539L382.63 307.802H36.1712L209.401 77.6539Z"
          fill="#019444"
        />
      </g>
      <rect
        x="179.704"
        y="438.961"
        width="59.393"
        height="94.0389"
        fill="#7E4D37"
      />
      <g filter="url(#filter2_d_1_113)">
        <path
          d="M209.401 0.937897L345.51 181.592H73.2918L209.401 0.937897Z"
          fill="#47C653"
        />
      </g>
      <path
        d="M283.642 221.952H404.903V261.547H283.642V221.952Z"
        fill="#019444"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M425.943 156.047C428.613 157.396 430.993 159.961 431.979 162.552C432.758 164.601 433.007 165.929 433.107 168.555C433.304 173.758 432.46 177.866 428.905 189.003C425.869 198.513 425.74 199.943 427.868 200.502C428.293 200.613 434.012 200.741 442.613 200.829C451.088 200.917 457.123 201.05 457.821 201.165C460.238 201.562 461.339 202.159 463.222 204.095C465.134 206.059 465.945 208.138 465.945 211.07C465.945 211.98 465.824 213.174 465.67 213.781C465.015 216.362 463.186 218.772 461.012 219.916C459.949 220.476 459.616 220.78 460.066 220.78C460.171 220.78 460.759 221.023 461.373 221.321C463.309 222.262 465.577 224.741 466.362 226.776C466.803 227.918 466.905 230.3 466.58 231.85C466 234.62 464.012 237.392 461.854 238.44C461.242 238.738 460.741 239.054 460.741 239.143C460.741 239.232 461.151 239.573 461.652 239.899C463.534 241.128 465.331 243.645 466.015 246.013C466.823 248.811 465.731 252.422 463.342 254.851C461.548 256.675 460.221 257.19 456.491 257.508C455.251 257.614 454.165 257.719 454.08 257.741C453.994 257.764 454.32 258.041 454.804 258.357C455.991 259.132 457.033 260.318 457.591 261.529C457.995 262.407 458.052 262.749 458.048 264.296C458.045 265.92 458 266.155 457.487 267.229C456.808 268.65 455.922 269.608 454.318 270.654L453.105 271.446L440.486 271.442C413.623 271.433 406.566 270.971 393.224 268.348C386.83 267.092 381.179 266.442 374.179 266.158C369.036 265.949 368.253 265.715 367.928 264.287C367.743 263.473 367.73 228.622 367.913 222.81C368.05 218.458 368.152 218.048 369.231 217.528C370.174 217.072 371.431 216.922 375.983 216.722C382.99 216.414 384.635 216.18 386.398 215.241C389.405 213.64 394.264 207.438 399.761 198.183C403.468 191.941 404.816 189.982 408.873 184.943C414.189 178.34 414.502 177.577 417.359 164.288C418.344 159.704 419.063 157.286 419.69 156.449C419.934 156.124 420.468 155.685 420.878 155.472C421.504 155.148 421.839 155.097 422.971 155.156C424.152 155.218 424.518 155.327 425.943 156.047Z"
        fill="#019444"
      />
      <defs>
        <filter
          id="filter0_d_1_113"
          x="0"
          y="164.269"
          width="418.802"
          height="282.693"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_113"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_113"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_dd_1_113"
          x="32.1712"
          y="77.6539"
          width="354.459"
          height="238.148"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_113"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_1_113"
            result="effect2_dropShadow_1_113"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_1_113"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d_1_113"
          x="69.2918"
          y="0.937897"
          width="280.218"
          height="188.654"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_113"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_113"
            result="shape"
          />
        </filter>
      </defs>
    </svg>

    <C02Counter :c02="store.carbon" />
    <br /><br /><br /><br />
    <i class="mb-2 text-6xl bi bi-megaphone-fill"></i>
    <h2 class="mb-2 text-3xl">
      Please rate your experience with rideshare today
    </h2>
    <Star />
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
    sendEmail() {
      const options = {
        method: "POST",
        url: "https://black-star-4232.fly.dev/https://broken-sun-1539.fly.dev/sendEmail",
        headers: { "content-type": "application/json" },
        data: {
          from: "confirmation@rideshare.xyz",
          to: store.contactEmail,
          subject: `Rideshare confirmation with ${this.name}`,
          message: `${store.contactName}, this is an automated email to confirm your rideshare with ${this.name}. Email them to figure out details at ${this.email}`,
        },
      };

      axios
        .request(options)
        .then(function (response) {})
        .catch(function (error) {
          console.error(error);
        });
    },
  },

  async mounted() {
    setTimeout(this.showS, 4000);

    const options = {
      method: "POST",
      url: "https://black-star-4232.fly.dev/https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles",
      headers: {
        "content-type": "application/json",
        "x-api-key": import.meta.env.VITE_VES,
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
    this.sendEmail();
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