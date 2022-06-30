// store.js
import { reactive } from 'vue'

export const store = reactive({
  city: String,
  country: String,
  postcode: String,
  lat: String,
  long: String,
  show: Boolean,
  start: String,
  eta: Number,
  distance: Number,
  isData: false


})  