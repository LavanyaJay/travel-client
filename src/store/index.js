import Vue from "vue";
import Vuex from "vuex";
import * as category from "./modules/category";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    category
  }
});
