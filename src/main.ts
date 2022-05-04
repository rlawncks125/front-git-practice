import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/tailwind.scss";

// swiper

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

createApp(App)
  .component("swiper", Swiper)
  .component("swiperSlide", SwiperSlide)
  .use(store)
  .use(router)
  .mount("#app");
