import Vue from "vue";
import Vuex from "vuex";
import * as cities from "./modules/cities.js";
import * as attractions from "./modules/attractions";
import * as itinerary from "./modules/itinerary";
import * as form from "./modules/form";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cities,
    attractions,
    itinerary,
    form
  }
});
