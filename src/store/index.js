import Vue from 'vue';
import Vuex from 'vuex';
import {
  set,
  includes,
  keys,
} from 'lodash';
import {
  searchChCatalogos,
} from '@/api';

// https://github.com/vuejs/vuex/issues/676#issuecomment-339855002
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    chCatalogos: [],
    chCatalogosFilters: {
      nombre: null,
      codpostal: null,
      codprov: null,
      codfi: null,
    },
    loading: false,
  },
  mutations: {
    setChCatalogos(state, chCatalogos) {
      state.chCatalogos = chCatalogos;
    },
    setChCatalogosFilter(state, {
      path,
      filter,
    }) {
      const allowSet = includes(keys(state.chCatalogosFilters), path);

      if (allowSet) {
        set(state.chCatalogosFilters, path, filter);
      }
    },
    setLoading(state, loading = true) {
      state.loading = loading;
    },
  },
  actions: {
    async searchChCatalogos({
      state,
      commit,
    }) {
      commit('setLoading');
      commit('setChCatalogos', await searchChCatalogos(state.chCatalogosFilters));
      commit('setLoading', false);
    },
  },
});
