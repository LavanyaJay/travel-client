import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSpinner,
  faTrash,
  faBus,
  faEllipsisV
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faSpinner);
library.add(faTrash, faBus, faEllipsisV);

Vue.config.productionTip = false;
Vue.component("font-awesome-icon", FontAwesomeIcon);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
Vue.use(BootstrapVue);
