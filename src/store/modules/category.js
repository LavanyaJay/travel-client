import EventService from "../../services/ItineraryService";
export const state = {
  categories: []
};
export const mutations = {
  SHOW_CATEGORY(state, categories) {
    state.categories = categories;
  }
};
export const actions = {
  fetchCategories({ commit }) {
    return EventService.getCategory().then(categories => {
      commit("SHOW_CATEGORY", categories.data);
    });
  }
};
export const getters = {
  catLength: state => {
    return state.categories.length;
  }
};
