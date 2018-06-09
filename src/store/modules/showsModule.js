import * as API from '../utils/api';

// initial state
const state = {
  showsList: []
};

// getters
const getters = {};

// actions
const actions = {
  getShows({commit, state}) {
    API.get(
      '/shows',
      (resolve) => {
        commit('setList', resolve.data);
      },
      (reject) => {
        console.log(reject);
      }
    );
  }
};

// mutations
const mutations = {
  setList(state, shows) {
    state.showsList = shows;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
