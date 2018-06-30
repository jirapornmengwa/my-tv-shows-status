import * as API from "../utils/api";
import _ from "lodash";

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
      "shows",
      (resolve) => {
        commit("setList", resolve.data);
      },
      (reject) => {
        console.log(reject);
      }
    );
  },
  addShow({commit, state}, data) {
    API.post(
      "shows",
      data,
      (resolve) => {
        commit("addShow", resolve.data);
      },
      (reject) => {
        console.log(reject);
      }
    );
  },
  updateShow({commit, state}, {id, data}) {
    API.put(
      `shows/${id}`,
      data,
      (resolve) => {
        commit("updateShow", {id, data});
      },
      (reject) => {
        console.log(reject);
      }
    );
  },
  deleteShow({commit, state}, id) {
    API.del(
      `shows/${id}`,
      (resolve) => {
        commit("removeShow", id);
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
  },
  removeShow(state, id) {
    state.showsList = _.filter(state.showsList, (elem) => elem._id !== id);
  },
  updateShow(state, {id, data}) {
    let index = _.findIndex(state.showsList, {_id: id});
    let keys = _.keys(data);
    for (let key of keys) {
      state.showsList[index][key] = data[key];
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
