// src/main.js
import Vue from "vue";
import "bulma/css/bulma.css"; // this is the line you need to add
import App from "./App";
import router from "./router";

// rest of the file

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
