import { createStore } from 'vuex';

export default createStore({
  state: {
    searchText: '',
  },
  mutations: {
    resetSearchText(state) {
      state.searchText = '';
    },
    setSeachText(state, val) {
      state.searchText = val;
    },
  },
  getters: {
    getSearchText(state) {
      return state.searchText;
    },
  },
  actions: {},
  modules: {},
});
