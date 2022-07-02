<template>
  <div class="container bg-white rounded-md h-screen mb-0 p-0">
    <div v-if="!store.show2">
      <form action="#" @submit.prevent>
        <div class="shadow overflow-hidden sm:rounded-md mt-[15]">
          <div class="px-4 py-3 bg-white sm:p-6">
            <div class="text-center">
              <h1 class="text-4xl p-1 mb-2 text-[#ebc4f5]">Rideshare</h1>
            </div>
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-12 sm:col-span-6">
                <label
                  for="first-name"
                  class="block text-sm font-medium text-gray-700"
                  >First name</label
                >
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  required
                  class="mt-1 outline-none block w-full shadow-sm sm:text-sm focus:outline-[#5ce7c8] border-gray-300 rounded-md"
                />
              </div>

              <div class="col-span-12 sm:col-span-6">
                <label
                  for="last-name"
                  class="block text-sm font-medium text-gray-700"
                  >Last name</label
                >
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  required
                  autocomplete="family-name"
                  class="mt-1 outline-none block w-full shadow-sm sm:text-sm focus:outline-[#5ce7c8] border-gray-300 rounded-md"
                />
              </div>
              <div class="col-span-12 sm:col-span-6">
                <label
                  for="meet"
                  class="block text-sm font-medium text-gray-700"
                  >Meet time</label
                >
                <input
                  type="datetime-local"
                  name="meet"
                  required
                  id="meet"
                  class="mt-1 outline-none block w-full shadow-sm sm:text-sm focus:outline-[#5ce7c8] border-gray-300 rounded-md"
                />
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label
                  for="car-reg"
                  class="block text-sm font-medium text-gray-700"
                  >Car Reg</label
                >
                <input
                  type="text"
                  v-model="reg"
                  name="car-reg"
                  required
                  id="car-reg"
                  class="mt-1 block w-full shadow-sm sm:text-sm rounded-md outline-none focus:outline-[#5ce7c8]"
                />
              </div>
            </div>
          </div>
          <div
            class="px-4 py-4 bg-white text-center sm:px-6 justify-center align-center"
          >
            <button
              type="submit"
              @click="this.submitForm"
              class="inline-flex justify-center py-2 mb-1 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black hover:bg-[#5ce7c8] bg-[#ebc4f5] w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Get Sharing
            </button>
          </div>
        </div>
      </form>
      <div class="mt-10 mx-auto text-center text-underline">
        <img
          src="../assets/e2.svg"
          style="width: 400px; height: 100px"
          alt=""
        />
      </div>
    </div>

    <div v-if="store.show2">
      <div
        class="items-center text-center bg-white rounded py-2 mt-5 mx-auto relative container shadow"
      >
        <img
          :src="store.img"
          alt=""
          class="rounded-full w-32 shadow-lg mx-auto"
        />
        <h1 class="text-2xl text-[#ebc4f5] font-semibold my-3">
          You've matched with
        </h1>
        <h5 class="text-3xl font-medium leading-tight my-3 text-[#5ce7c8]">
          {{ store.firstName }} {{ store.lastName }}
        </h5>
        <h4 class="text-lg text-[#ebc4f5] font-semibold my-3">Who lives at</h4>
        <a
          target="_blank"
          :href="link"
          class="text-xl font-bold text-[#5ce7c8] my-3"
          >{{ store.loccode }}</a
        >

        <h4
          v-if="store.gender"
          class="text-lg text-[#ebc4f5] font-semibold my-3"
        >
          Contact him at
        </h4>
        <h4 v-else class="text-lg text-[#ebc4f5] font-semibold my-3">
          Contact her at
        </h4>
        <h5 class="text-xl text-[#5ce7c8] font-bold my-3">{{ store.email }}</h5>
      </div>
      <div class="mt-10 text-center text-underline">
        <img src="../assets/e2.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store.js";
import axios from "axios";
import useValidate from "@vuelidate/core";
import {
  required,
  minLength,
  maxLength,
  alphaNum,
} from "@vuelidate/validators";

import Map from "./Map.vue";
// import mapboxgl from "mapbox-gl";
// import { GeolocateControl } from "mapbox-gl-controls";

export default {
  data() {
    return {
      v$: useValidate(),
      store,
      reg: "",
      link: "",
    };
  },
  validations() {
    return {
      reg: {
        required,
        minLength: minLength(7),
        maxLength: maxLength(7),
        alphaNum,
      },
    };
  },
  components: {
    Map,
  },
  methods: {
    submitForm() {
      this.v$.$validate();
      if (this.v$.$error) {
        console.log(this.v$.$error.$message);
        alert("Please enter a valid car reg");
      } else {
        store.reg = this.reg;
        let code = store.loccode;
        this.link = `https://www.google.com/maps/search/${code}`;
        this.getFakeData();
      }
    },
    async getFakeData() {
      if (store.distance != 0) {
        const res = await fetch("https://randomuser.me/api");
        const { results } = await res.json();
        store.firstName = results[0].name.first;
        store.lastName = results[0].name.last;
        store.email = results[0].email;
        store.age = results[0].dob.age;
        store.img = results[0].picture.large;
        let gen = results[0].gender;
        console.log(gen);
        if (gen === "male") {
          store.gender = true;
        } else {
          store.gender = false;
        }

        const lon = store.long;
        const lat = store.lat;

        axios
          .get(
            `https://api.postcodes.io/postcodes?lon=${lon}&lat=${lat}&widesearch=true&limit=1`
          )
          .then(function (response) {
            store.loccode = response.data.result[0].postcode;
            // handle success
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
        store.show2 = true;
        this.getDistSaved();
      } else {
        alert("Please your destination on the map.");
      }
    },
    getDistSaved() {
      let dist = store.distance;

      let sub = dist / (Math.floor(Math.random() * 10) + 1);

      let distSaved = dist - sub;

      store.distSaved = distSaved.toString();

      store.showDistSaved = true;
    },
  },
};
</script>

<style scoped></style>
