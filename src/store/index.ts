import { createStore } from 'vuex';
import VuexPersist from 'vuex-persist';

const vuexLocal = new VuexPersist({
  storage: window.localStorage,
});

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
  plugins: [vuexLocal.plugin],
});
