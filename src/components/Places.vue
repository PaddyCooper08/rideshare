<template>
  <div class="container h-screen p-0 mb-0 bg-white rounded-md">
    <div v-if="!store.show2">
      <form action="#" @submit.prevent>
        <div
          class="shadow overflow-hidden sm:rounded-md mt-[15] text-[#00345c]"
        >
          <div class="px-4 py-3 bg-white sm:p-6">
            <div class="text-center">
              <h1 class="p-1 mb-2 text-4xl">Rideshare</h1>
            </div>
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-12 sm:col-span-6">
                <label for="first-name" class="block text-sm font-medium"
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
                <label for="last-name" class="block text-sm font-medium"
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
                <label for="meet" class="block text-sm font-medium"
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
                <label for="car-reg" class="block text-sm font-medium"
                  >Car Reg</label
                >
                <input
                  type="text"
                  v-model="reg"
                  name="car-reg"
                  placeholder="LLNNLLL"
                  id="car-reg"
                  class="mt-1 block w-full shadow-sm sm:text-sm rounded-md outline-none focus:outline-[#5ce7c8]"
                />
              </div>
            </div>
          </div>
          <div
            class="justify-center px-4 py-4 text-center bg-white sm:px-6 align-center"
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
      <div class="mt-10 mr-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          width="400"
          height="100"
          viewBox="0 0 642 149"
          xml:space="preserve"
          class="mx-auto"
        >
          <defs></defs>
          <g transform="matrix(1 0 0 1 331.85 171.26)">
            <g style="">
              <g
                transform="matrix(1.9 1.9 -1.9 1.9 -257.66 -97.12)"
                id="circle1858-5-9-3"
              >
                <circle
                  style="
                    stroke: rgb(255, 99, 140);
                    stroke-width: 0;
                    stroke-dasharray: none;
                    stroke-linecap: round;
                    stroke-dashoffset: 0;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 4;
                    fill: rgb(235, 196, 245);
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  cx="0"
                  cy="0"
                  r="27.529131"
                />
              </g>
              <g
                transform="matrix(1.9 1.9 -1.9 1.9 -257.66 -97.12)"
                id="circle1860-0-8-5"
              >
                <linearGradient
                  id="SVGID_linearGradient1888-0-1-9_5"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="matrix(1.41 0 0 1.41 -54.37 -251.26)"
                  x1="74.801247"
                  y1="172.20081"
                  x2="132.7516"
                  y2="122.59023"
                >
                  <stop
                    offset="0%"
                    style="stop-color: rgb(255, 0, 255); stop-opacity: 1"
                  />
                  <stop
                    offset="100%"
                    style="stop-color: rgb(255, 102, 0); stop-opacity: 1"
                  />
                </linearGradient>
                <circle
                  style="
                    stroke: url(#SVGID_linearGradient1888-0-1-9_5);
                    stroke-width: 0;
                    stroke-dasharray: none;
                    stroke-linecap: round;
                    stroke-dashoffset: 0;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 4;
                    fill: rgb(255, 255, 255);
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  cx="0"
                  cy="0"
                  r="20.607521"
                />
              </g>
              <g
                transform="matrix(1.9 1.9 -1.9 1.9 -257.66 -97.12)"
                id="circle1862-1-0-0"
              >
                <circle
                  style="
                    stroke: rgb(255, 99, 140);
                    stroke-width: 0;
                    stroke-dasharray: none;
                    stroke-linecap: round;
                    stroke-dashoffset: 0;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 4;
                    fill: rgb(235, 196, 245);
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  cx="0"
                  cy="0"
                  r="9.5958691"
                />
              </g>
              <g
                transform="matrix(1.9 1.9 -1.9 1.9 -228.52 -126.24)"
                id="rect1864-5-6-8"
              >
                <rect
                  style="
                    stroke: rgb(255, 99, 140);
                    stroke-width: 0;
                    stroke-dasharray: none;
                    stroke-linecap: round;
                    stroke-dashoffset: 0;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 4;
                    fill: rgb(235, 196, 245);
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  x="-2.9102223"
                  y="-9.640112"
                  rx="0"
                  ry="0"
                  width="5.8204446"
                  height="19.280224"
                />
              </g>
              <g
                transform="matrix(-1.9 1.9 -1.9 -1.9 -227.67 -67.1)"
                id="rect1866-0-3-7"
              >
                <rect
                  style="
                    stroke: rgb(255, 99, 140);
                    stroke-width: 0;
                    stroke-dasharray: none;
                    stroke-linecap: round;
                    stroke-dashoffset: 0;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 4;
                    fill: rgb(235, 196, 245);
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  x="-2.9102223"
                  y="-9.640112"
                  rx="0"
                  ry="0"
                  width="5.8204446"
                  height="19.280224"
                />
              </g>
              <g
                transform="matrix(1.9 1.9 -1.9 1.9 -288.61 -66.2)"
                id="rect1868-2-5-3"
              >
                <rect
                  style="
                    stroke: rgb(255, 99, 140);
                    stroke-width: 0;
                    stroke-dasharray: none;
                    stroke-linecap: round;
                    stroke-dashoffset: 0;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 4;
                    fill: rgb(235, 196, 245);
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  x="-2.9102223"
                  y="-9.640112"
                  rx="0"
                  ry="0"
                  width="5.8204446"
                  height="19.280224"
                />
              </g>
              <g
                transform="matrix(-1.9 1.9 -1.9 -1.9 -286.47 -125.96)"
                id="rect1870-1-1-1"
              >
                <rect
                  style="
                    stroke: rgb(255, 99, 140);
                    stroke-width: 0;
                    stroke-dasharray: none;
                    stroke-linecap: round;
                    stroke-dashoffset: 0;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 4;
                    fill: rgb(235, 196, 245);
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  x="-2.9102223"
                  y="-9.640112"
                  rx="0"
                  ry="0"
                  width="5.8204446"
                  height="19.280224"
                />
              </g>
              <g
                transform="matrix(2.69 0 0 2.69 -257.66 -135.56)"
                id="rect1874-8-8-0"
              >
                <rect
                  style="
                    stroke: rgb(255, 99, 140);
                    stroke-width: 0;
                    stroke-dasharray: none;
                    stroke-linecap: round;
                    stroke-dashoffset: 0;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 4;
                    fill: rgb(235, 196, 245);
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  x="-2.9102223"
                  y="-9.640112"
                  rx="0"
                  ry="0"
                  width="5.8204446"
                  height="19.280224"
                />
              </g>
              <g
                transform="matrix(0 2.69 -2.69 0 -220.5 -97.12)"
                id="rect1876-0-3-5"
              >
                <rect
                  style="
                    stroke: rgb(255, 99, 140);
                    stroke-width: 0;
                    stroke-dasharray: none;
                    stroke-linecap: round;
                    stroke-dashoffset: 0;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 4;
                    fill: rgb(235, 196, 245);
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  x="-2.9102223"
                  y="-9.640112"
                  rx="0"
                  ry="0"
                  width="5.8204446"
                  height="19.280224"
                />
              </g>
              <g
                transform="matrix(-2.69 0 0 -2.69 -257.66 -57.33)"
                id="rect1878-5-6-18"
              >
                <rect
                  style="
                    stroke: rgb(255, 99, 140);
                    stroke-width: 0;
                    stroke-dasharray: none;
                    stroke-linecap: round;
                    stroke-dashoffset: 0;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 4;
                    fill: rgb(235, 196, 245);
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  x="-2.9102223"
                  y="-9.640112"
                  rx="0"
                  ry="0"
                  width="5.8204446"
                  height="19.280224"
                />
              </g>
              <g
                transform="matrix(0 2.69 -2.69 0 -294.62 -97.12)"
                id="rect1880-2-4-5"
              >
                <rect
                  style="
                    stroke: rgb(255, 99, 140);
                    stroke-width: 0;
                    stroke-dasharray: none;
                    stroke-linecap: round;
                    stroke-dashoffset: 0;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 4;
                    fill: rgb(235, 196, 245);
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  x="-2.9102223"
                  y="-9.640112"
                  rx="0"
                  ry="0"
                  width="5.8204446"
                  height="19.280224"
                />
              </g>
              <g
                transform="matrix(7.51 0 0 7.51 72.33 -90.27)"
                style=""
                id="text440-9-1"
              >
                <text
                  xml:space="preserve"
                  font-family="ubuntu"
                  font-size="13.5862"
                  font-style="normal"
                  font-weight="normal"
                  style="
                    stroke: none;
                    stroke-width: 0.0203794;
                    stroke-dasharray: none;
                    stroke-linecap: butt;
                    stroke-dashoffset: 0;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 4;
                    fill: rgb(0, 52, 92);
                    fill-rule: nonzero;
                    opacity: 1;
                    white-space: pre;
                  "
                >
                  <tspan x="-32.1" y="4.27">RideShare</tspan>
                </text>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
    <Transition name="fade">
      <div v-if="store.show2">
        <div
          class="container relative items-center py-2 mt-5 text-center bg-white rounded shadow"
        >
          <div class="">
            <img
              :src="store.img"
              alt=""
              class="w-32 mx-auto rounded-full shadow-lg"
            />
          </div>

          <h1 class="text-2xl text-[#ebc4f5] font-semibold my-3">
            You've matched with
          </h1>
          <h5 class="text-3xl font-medium leading-tight my-3 text-[#5ce7c8]">
            {{ store.firstName }} {{ store.lastName }}
          </h5>
          <h4 class="text-lg text-[#ebc4f5] font-semibold my-3">
            Who lives at
          </h4>
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
          <a
            class="text-xl text-[rgb(92,231,200)] font-bold my-3"
            :href="this.email"
          >
            {{ this.eemail }}</a
          >
        </div>
        <div class="mt-10 mr-0 text-center text-underline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="400"
            height="100"
            viewBox="0 0 642 149"
            xml:space="preserve"
            class="mx-auto"
          >
            <defs></defs>
            <g transform="matrix(1 0 0 1 331.85 171.26)">
              <g style="">
                <g
                  transform="matrix(1.9 1.9 -1.9 1.9 -257.66 -97.12)"
                  id="circle1858-5-9-3"
                >
                  <circle
                    style="
                      stroke: rgb(255, 99, 140);
                      stroke-width: 0;
                      stroke-dasharray: none;
                      stroke-linecap: round;
                      stroke-dashoffset: 0;
                      stroke-linejoin: miter;
                      stroke-miterlimit: 4;
                      fill: rgb(235, 196, 245);
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    cx="0"
                    cy="0"
                    r="27.529131"
                  />
                </g>
                <g
                  transform="matrix(1.9 1.9 -1.9 1.9 -257.66 -97.12)"
                  id="circle1860-0-8-5"
                >
                  <linearGradient
                    id="SVGID_linearGradient1888-0-1-9_5"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(1.41 0 0 1.41 -54.37 -251.26)"
                    x1="74.801247"
                    y1="172.20081"
                    x2="132.7516"
                    y2="122.59023"
                  >
                    <stop
                      offset="0%"
                      style="stop-color: rgb(255, 0, 255); stop-opacity: 1"
                    />
                    <stop
                      offset="100%"
                      style="stop-color: rgb(255, 102, 0); stop-opacity: 1"
                    />
                  </linearGradient>
                  <circle
                    style="
                      stroke: url(#SVGID_linearGradient1888-0-1-9_5);
                      stroke-width: 0;
                      stroke-dasharray: none;
                      stroke-linecap: round;
                      stroke-dashoffset: 0;
                      stroke-linejoin: miter;
                      stroke-miterlimit: 4;
                      fill: rgb(255, 255, 255);
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    cx="0"
                    cy="0"
                    r="20.607521"
                  />
                </g>
                <g
                  transform="matrix(1.9 1.9 -1.9 1.9 -257.66 -97.12)"
                  id="circle1862-1-0-0"
                >
                  <circle
                    style="
                      stroke: rgb(255, 99, 140);
                      stroke-width: 0;
                      stroke-dasharray: none;
                      stroke-linecap: round;
                      stroke-dashoffset: 0;
                      stroke-linejoin: miter;
                      stroke-miterlimit: 4;
                      fill: rgb(235, 196, 245);
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    cx="0"
                    cy="0"
                    r="9.5958691"
                  />
                </g>
                <g
                  transform="matrix(1.9 1.9 -1.9 1.9 -228.52 -126.24)"
                  id="rect1864-5-6-8"
                >
                  <rect
                    style="
                      stroke: rgb(255, 99, 140);
                      stroke-width: 0;
                      stroke-dasharray: none;
                      stroke-linecap: round;
                      stroke-dashoffset: 0;
                      stroke-linejoin: miter;
                      stroke-miterlimit: 4;
                      fill: rgb(235, 196, 245);
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    x="-2.9102223"
                    y="-9.640112"
                    rx="0"
                    ry="0"
                    width="5.8204446"
                    height="19.280224"
                  />
                </g>
                <g
                  transform="matrix(-1.9 1.9 -1.9 -1.9 -227.67 -67.1)"
                  id="rect1866-0-3-7"
                >
                  <rect
                    style="
                      stroke: rgb(255, 99, 140);
                      stroke-width: 0;
                      stroke-dasharray: none;
                      stroke-linecap: round;
                      stroke-dashoffset: 0;
                      stroke-linejoin: miter;
                      stroke-miterlimit: 4;
                      fill: rgb(235, 196, 245);
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    x="-2.9102223"
                    y="-9.640112"
                    rx="0"
                    ry="0"
                    width="5.8204446"
                    height="19.280224"
                  />
                </g>
                <g
                  transform="matrix(1.9 1.9 -1.9 1.9 -288.61 -66.2)"
                  id="rect1868-2-5-3"
                >
                  <rect
                    style="
                      stroke: rgb(255, 99, 140);
                      stroke-width: 0;
                      stroke-dasharray: none;
                      stroke-linecap: round;
                      stroke-dashoffset: 0;
                      stroke-linejoin: miter;
                      stroke-miterlimit: 4;
                      fill: rgb(235, 196, 245);
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    x="-2.9102223"
                    y="-9.640112"
                    rx="0"
                    ry="0"
                    width="5.8204446"
                    height="19.280224"
                  />
                </g>
                <g
                  transform="matrix(-1.9 1.9 -1.9 -1.9 -286.47 -125.96)"
                  id="rect1870-1-1-1"
                >
                  <rect
                    style="
                      stroke: rgb(255, 99, 140);
                      stroke-width: 0;
                      stroke-dasharray: none;
                      stroke-linecap: round;
                      stroke-dashoffset: 0;
                      stroke-linejoin: miter;
                      stroke-miterlimit: 4;
                      fill: rgb(235, 196, 245);
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    x="-2.9102223"
                    y="-9.640112"
                    rx="0"
                    ry="0"
                    width="5.8204446"
                    height="19.280224"
                  />
                </g>
                <g
                  transform="matrix(2.69 0 0 2.69 -257.66 -135.56)"
                  id="rect1874-8-8-0"
                >
                  <rect
                    style="
                      stroke: rgb(255, 99, 140);
                      stroke-width: 0;
                      stroke-dasharray: none;
                      stroke-linecap: round;
                      stroke-dashoffset: 0;
                      stroke-linejoin: miter;
                      stroke-miterlimit: 4;
                      fill: rgb(235, 196, 245);
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    x="-2.9102223"
                    y="-9.640112"
                    rx="0"
                    ry="0"
                    width="5.8204446"
                    height="19.280224"
                  />
                </g>
                <g
                  transform="matrix(0 2.69 -2.69 0 -220.5 -97.12)"
                  id="rect1876-0-3-5"
                >
                  <rect
                    style="
                      stroke: rgb(255, 99, 140);
                      stroke-width: 0;
                      stroke-dasharray: none;
                      stroke-linecap: round;
                      stroke-dashoffset: 0;
                      stroke-linejoin: miter;
                      stroke-miterlimit: 4;
                      fill: rgb(235, 196, 245);
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    x="-2.9102223"
                    y="-9.640112"
                    rx="0"
                    ry="0"
                    width="5.8204446"
                    height="19.280224"
                  />
                </g>
                <g
                  transform="matrix(-2.69 0 0 -2.69 -257.66 -57.33)"
                  id="rect1878-5-6-18"
                >
                  <rect
                    style="
                      stroke: rgb(255, 99, 140);
                      stroke-width: 0;
                      stroke-dasharray: none;
                      stroke-linecap: round;
                      stroke-dashoffset: 0;
                      stroke-linejoin: miter;
                      stroke-miterlimit: 4;
                      fill: rgb(235, 196, 245);
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    x="-2.9102223"
                    y="-9.640112"
                    rx="0"
                    ry="0"
                    width="5.8204446"
                    height="19.280224"
                  />
                </g>
                <g
                  transform="matrix(0 2.69 -2.69 0 -294.62 -97.12)"
                  id="rect1880-2-4-5"
                >
                  <rect
                    style="
                      stroke: rgb(255, 99, 140);
                      stroke-width: 0;
                      stroke-dasharray: none;
                      stroke-linecap: round;
                      stroke-dashoffset: 0;
                      stroke-linejoin: miter;
                      stroke-miterlimit: 4;
                      fill: rgb(235, 196, 245);
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    x="-2.9102223"
                    y="-9.640112"
                    rx="0"
                    ry="0"
                    width="5.8204446"
                    height="19.280224"
                  />
                </g>
                <g
                  transform="matrix(7.51 0 0 7.51 72.33 -90.27)"
                  style=""
                  id="text440-9-1"
                >
                  <text
                    xml:space="preserve"
                    font-family="ubuntu"
                    font-size="13.5862"
                    font-style="normal"
                    font-weight="normal"
                    style="
                      stroke: none;
                      stroke-width: 0.0203794;
                      stroke-dasharray: none;
                      stroke-linecap: butt;
                      stroke-dashoffset: 0;
                      stroke-linejoin: miter;
                      stroke-miterlimit: 4;
                      fill: rgb(0, 52, 92);
                      fill-rule: nonzero;
                      opacity: 1;
                      white-space: pre;
                    "
                  >
                    <tspan x="-32.1" y="4.27">RideShare</tspan>
                  </text>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </Transition>
    <p @click="getCarDetails()">e</p>
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
      email: "",
      eemail: "",
      c02: null,
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
        let fname = store.firstName.toLowerCase();
        let lname = store.lastName.toLowerCase();
        this.eemail = `${fname}.${lname}@gmail.com`;
        this.email = `mailto: ${this.eemail}`;

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
    getCarDetails() {
      var data = JSON.stringify({
        registrationNumber: store.reg,
      });

      var config = {
        method: "post",
        url: "https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles",
        headers: {
          "x-api-key": "REmv9sFZbE3Dc9tbvWlpraoGUNnaoYKi1ulj1gtI",
          "Content-Type": "application/json",
        },
        data: data,
      };
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          this.co2 = response.data.co2Emissions;
          console.log(this.co2);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
