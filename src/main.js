import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index";

import './index.css'
emailjs.init("ywRVjikV2yB-OcnOK");


const app = createApp(App)
app.use(router)



// app.component('star-rating', VueStarRating.default)
app.mount('#app')
