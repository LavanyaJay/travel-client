import ItineraryService from "../../services/ItineraryService";

export const state = {
  attractions: []
};
export const mutations = {
  FETCH_ATTRACTION(state, data) {
    state.attractions = data;
  }
  /* DELETE_ATTRACTION(state, data) {
    state.attractions = state.attractions.filter(
      attraction => attraction.id !== data.id
    );
  } */
};

export const actions = {
  fetchAttractions({ commit }, data) {
    console.log(data);
    return ItineraryService.computeItinerary(data).then(attraction => {
      console.log("ITYACTION: ", attraction.data);
      commit("FETCH_ATTRACTION", attraction.data);
    });
  }
  /* deleteAttraction({ commit }, data) {
    console.log(data.placeName);
    return ItineraryService.addRejectedAttraction(data.placeName).then(
      rejected => {
        console.log(rejected);
        commit("DELETE_ATTRACTION", data);
      }
    );
  } */
};
