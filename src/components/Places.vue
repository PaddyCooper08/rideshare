<template>
  <div class="container bg-slate-200 rounded-md h-screen">
    <div class="text-center">
      <h1 class="underline text-3xl p-3">Rideshare</h1>
    </div>
    <div v-if="!store.show2">
      <form action="#" @submit.prevent>
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
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
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                  autocomplete="family-name"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-center sm:px-6">
            <button
              type="submit"
              @click="this.submitForm"
              class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Get Sharing
            </button>
          </div>
        </div>
      </form>
      <div class="mt-4 text-center text-underline">
        <h6 class="">Privacy statement</h6>
        <small
          >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
          cupiditate vero sed doloribus dolorem sapiente? Alias ab deleniti et
          architecto.</small
        >
      </div>
    </div>

    <div
      v-if="store.show2"
      class="items-center text-center h-full bg-white rounded p-3 mt-5 relative"
    >
      <img
        :src="store.img"
        alt=""
        class="rounded-full w-32 shadow-lg mx-auto"
      />
      <h1 class="text-2xl text-yellow-400">You've matched with</h1>
      <h5 class="text-xl font-medium leading-tight mb-2 text-purple-500">
        {{ store.firstName }} {{ store.lastName }}
      </h5>
      <p class="text-gray-500">{{ store.email }}</p>

      <button
        type=""
        @click="getDistSaved"
        class="sticky top-500 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        getdistsaved
      </button>
    </div>

    <!-- <a @click="this.getFakeData">get data</a>
    <div v-if="store.show2">
      <h1>
        {{ store.firstName }}, {{ store.lastName }}, {{ store.email }},
        {{ store.age }},
      </h1>
      <img :src="store.img" alt="" />
    </div> -->
  </div>
</template>

<script>
import { store } from "../store.js";
import axios from "axios";
import useValidate from "@vuelidate/core";
import { required, minLength, maxLength } from "@vuelidate/validators";

import Map from "./Map.vue";
// import mapboxgl from "mapbox-gl";
// import { GeolocateControl } from "mapbox-gl-controls";

export default {
  data() {
    return {
      v$: useValidate(),
      store,
      reg: "",
    };
  },
  validations() {
    return {
      reg: { required, minLength: minLength(6), maxLength: maxLength(6) },
    };
  },
  components: {
    Map,
  },
  methods: {
    submitForm() {
      this.v$.$validate();
      if (this.v$.$error) {
        alert("Please enter a valid car reg");
      } else {
        store.reg = reg;
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
      } else {
        alert("Please your destination on the map.");
      }
    },
    getDistSaved() {
      let dist = store.distance;
      console.log(dist);

      let sub = dist / (Math.floor(Math.random() * 10) + 1);

      let distSaved = dist - sub;

      store.distSaved = distSaved.toString();

      store.showDistSaved = true;
    },
  },
};
</script>

<style scoped></style>
