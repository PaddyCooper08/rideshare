// store.js
import { reactive } from "vue";

export const store = reactive({
  city: String,
  country: String,
  postcode: String,
  lat: String,
  long: String,
  show: false,
  start: String,
  eta: Number,
  distance: Number,
  isData: false,
  firstName: String,
  lastName: String,
  email: String,
  img: String,
  age: Number,
  show2: false,
  loccode: String,
  distSaved: Number,
  showDistSaved: false,
  reg: String,
  gender: Boolean,
  carbon: String,
  renderMapps: false
});
