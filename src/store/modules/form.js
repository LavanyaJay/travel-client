export const state = {
  form: []
};
export const mutations = {
  STORE_INPUT(state, data) {
    state.form = data;
  }
};
export const actions = {
  storeInput({ commit }, data) {
    commit("STORE_INPUT", data);
  }
};
