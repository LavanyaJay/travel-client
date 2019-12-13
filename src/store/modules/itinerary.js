import ItineraryService from "../../services/ItineraryService";

export const state = {
  itinerary: []
};
export const mutations = {
  FETCH_ITINERARY(state, itinerary) {
    function compare(a, b) {
      var time1 = parseFloat(
        a.fromTime.replace(":", ".").replace(/[^\d.-]/g, "")
      );
      var time2 = parseFloat(
        b.fromTime.replace(":", ".").replace(/[^\d.-]/g, "")
      );

      if (time1 < time2) return -1;
      if (time1 > time2) return 1;
      return 0;
    }
    const sortedItinerary = itinerary.sort(compare);
    console.log(sortedItinerary);
    state.itinerary = sortedItinerary;
  },
  DELETE_ITINERARY(state, data) {
    state.itinerary = state.itinerary.filter(
      itinerary => itinerary.id !== data.id
    );
  }
};
export const actions = {
  fetchItinerary({ commit }) {
    return ItineraryService.getItinerary().then(itinerary => {
      commit("FETCH_ITINERARY", itinerary.data);
    });
  },
  deleteItinerary({ commit }, data) {
    return ItineraryService.addRejectedAttraction(data.placeName).then(
      rejected => {
        console.log(rejected);
        commit("DELETE_ITINERARY", data);
      }
    );
  },
  clearRejects() {
    return ItineraryService.clearRejects().then(rejects => {
      console.log(rejects);
    });
  }
  /* clearItinerary({ commit }) {
    return ItineraryService.clearItinerary().then(itinerary => {
      console.log(itinerary);
      commit("CLEAR_ITINERARY");
    });
  } */
};
