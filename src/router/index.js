import Vue from "vue";
import Router from "vue-router";

import ItineraryFormContainer from "../views/ItineraryFormContainer";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "ity_form",
      component: ItineraryFormContainer
    }
  ]
});
