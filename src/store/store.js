import Vue from "vue";
import Vuex from "vuex";
import shows from "./modules/showsModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    shows
  }
});
