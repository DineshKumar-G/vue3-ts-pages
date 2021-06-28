import { createStore } from 'vuex';
import VuexPersist from 'vuex-persist';

const vuexLocal = new VuexPersist({
  storage: window.localStorage,
});

export default createStore({
  state: {
    searchText: '',
    isLoggedIn: false,
  },
  mutations: {
    resetSearchText(state) {
      state.searchText = '';
    },
    setSeachText(state, val) {
      state.searchText = val;
    },
    setAuthentic(state, val) {
      state.isLoggedIn = val;
    },
  },
  getters: {
    getSearchText(state) {
      return state.searchText;
    },
    ensureAuthentic(state) {
      return state.isLoggedIn;
    },
  },
  actions: {},
  modules: {},
  plugins: [vuexLocal.plugin],
});
