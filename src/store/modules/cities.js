import ItineraryService from "../../services/ItineraryService";

export const state = {
  cities: []
};
export const mutations = {
  SHOW_CITY(state, cities) {
    state.cities = cities;
  }
};
export const actions = {
  fetchCities({ commit }) {
    return ItineraryService.getCity().then(cities => {
      commit("SHOW_CITY", cities.data);
    });
  }
};
export const getters = {
  catLength: state => {
    return state.cities.length;
  }
};
