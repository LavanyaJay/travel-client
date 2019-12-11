import Vue from "vue";
import Vuex from "vuex";
import * as cities from "./modules/cities.js";
import * as itinerary from "./modules/itinerary";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cities,
    itinerary
  }
});
