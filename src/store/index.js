import Vue from 'vue';
import Vuex from 'vuex';
// store modules
import activities from './activities';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    activities,
  },
});

export default store;
