import ItineraryService from "../../services/ItineraryService";

export const state = {
  itinerary: []
};
export const mutations = {
  FETCH_ITINERARY(state, data) {
    state.itinerary = data;
  },
  DELETE_ATTRACTION(state, data) {
    state.itinerary = state.itinerary.filter(
      itinerary => itinerary.id === data.id
    );
  }
};

export const actions = {
  createItinerary({ commit }, data) {
    console.log(data);
    return ItineraryService.computeItinerary(data).then(itinerary => {
      console.log("ITYACTION: ", itinerary.data);
      commit("FETCH_ITINERARY", itinerary.data);
    });
  },
  deleteAttraction({ commit }, data) {
    console.log(data.placeName);
    return ItineraryService.addRejectedAttraction(data.placeName).then(
      rejected => {
        console.log(rejected);
        commit("DELETE_ATTRACTION", data);
      }
    );
  }
};
