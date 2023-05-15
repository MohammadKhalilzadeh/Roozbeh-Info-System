import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import vuetify from "./plugins/vuetify";
// import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
import VuePersianDatetimePicker from "vue-persian-datetime-picker";
// const dotenv = require("dotenv").config();
// dotenv.config();

Vue.config.productionTip = false;
Vue.component("date-picker", VuePersianDatetimePicker);

new Vue({
  router,
  vuetify,
  // BootstrapVue,
  // IconsPlugin,
  render: (h) => h(App),
}).$mount("#app");
