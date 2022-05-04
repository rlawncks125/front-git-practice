import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/tailwind.scss";

// swiper
import "@/plugin/swiper"; // css 및 swiper 사용 모듈 정의
import { Swiper, SwiperSlide } from "swiper/vue";

createApp(App)
  .component("swiper", Swiper)
  .component("swiperSlide", SwiperSlide)
  .use(store)
  .use(router)
  .mount("#app");
