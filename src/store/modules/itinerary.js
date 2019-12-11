import ItineraryService from "../../services/ItineraryService";

export const state = {
  itinerary: []
};
export const mutations = {
  FETCH_ITINERARY(state, data) {
    state.itinerary = data;
  }
};
export const actions = {
  createItinerary({ commit }, data) {
    console.log(data);
    return ItineraryService.computeItinerary(data).then(itinerary => {
      console.log("ITYACTION: ", itinerary.data);
      commit("FETCH_ITINERARY", itinerary.data);
    });
  }
};
