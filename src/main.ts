import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/tailwind.scss";
import "@/plugin/swiper";

import { Swiper, SwiperSlide } from "swiper/vue";

createApp(App)
  .component("swiper", Swiper)
  .component("swiperSlide", SwiperSlide)
  .use(store)
  .use(router)
  .mount("#app");
