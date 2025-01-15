import './assets/main.css'
import '/node_modules/primeflex/primeflex.css'
import 'primeflex/themes/primeone-light.css'
import 'primeicons/primeicons.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/bundle';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { Swiper, SwiperSlide } from 'swiper/vue';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('Swiper', Swiper);
app.component('SwiperSlide', SwiperSlide);

app.mount('#app')
