import { make } from 'vuex-pathify';

const state = {
  lastScan: undefined,
  beatmaps: [],
  playlists: [],
};

const getters = {
  ...make.getters(state),
};

const mutations = {
  ...make.mutations(state),
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};