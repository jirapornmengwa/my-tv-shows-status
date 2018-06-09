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
  },
  addShow({commit, state}, data) {
    API.post(
      '/shows',
      data,
      (resolve) => {
        commit('addShow', resolve.data);
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
  },
  addShow(state, show) {
    state.showsList.push(show);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
