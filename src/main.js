import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./plugins/ant-design";
import "./plugins/bootstrap";
import "./plugins/vee-validate";
import "./assets/main.scss";

import "./plugins/bootstrap-vue";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
