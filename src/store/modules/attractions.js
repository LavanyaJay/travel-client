import ItineraryService from "../../services/ItineraryService";

export const state = {
  attractions: []
};
export const mutations = {
  FETCH_ATTRACTION(state, data) {
    state.attractions = data;
  }
};

export const actions = {
  fetchAttractions({ commit }, data) {
    console.log(data);
    return ItineraryService.computeItinerary(data).then(attraction => {
      console.log("ITYACTION: ", attraction.data);
      if (attraction.data !== 0) {
        commit("FETCH_ATTRACTION", attraction.data);
      }
    });
  }
};
