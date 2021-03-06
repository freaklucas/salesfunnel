import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import Embed from "v-video-embed";

Vue.use(Embed);

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  router,
  BootstrapVue,
  render: (h) => h(App),
}).$mount("#app");
