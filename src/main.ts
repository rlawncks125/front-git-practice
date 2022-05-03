import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/tailwind.scss";
import "@/plugin/swiper";

createApp(App).use(store).use(router).mount("#app");
