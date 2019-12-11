import Vue from "vue";
import Router from "vue-router";

import ItineraryFormContainer from "../views/ItineraryFormContainer";
import ItineraryDetailContainer from "../views/ItineraryDetailContainer";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "ity_form",
      component: ItineraryFormContainer
    },
    {
      path: "/itinerary",
      name: "itinerary",
      component: ItineraryDetailContainer
    }
  ]
});
