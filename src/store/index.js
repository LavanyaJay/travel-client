import Vue from "vue";
import Vuex from "vuex";
import * as cities from "./modules/cities.js";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cities
  }
});
