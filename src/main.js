import Vue from "vue";
import App from "./App.vue";

import { createPinia, PiniaVuePlugin } from "pinia";

import "./assets/css/tailwind.css";

Vue.config.productionTip = false;

Vue.use(PiniaVuePlugin);

const pinia = createPinia();

new Vue({
  el: "#app", // Binds to the #app element in public/index.html; Only works with this ID within codesandbox
  render: (h) => h(App),
  pinia,
});
