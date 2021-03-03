export default {
  // in production code for state I would use
  // an object like activities: { isLoaded: false, data: [] }
  state: {
    activities: [],
  },
  actions: {
    addActivity({ commit }, activity) {
      commit('SET_ACTIVITY', activity);
    },
    changeActivityStatus({ commit }, activity) {
      commit('SET_ACTIVITY_STATUS', activity);
    },
    deleteActivity({ commit }, activity) {
      commit('CLEAR_ACTIVITY', activity);
    },
  },
  mutations: {
    SET_ACTIVITY(state, activity) {
      state.activities.push(activity);
    },
    SET_ACTIVITY_STATUS(state, activity) {
      state.activities.map((el) => {
        if (el.id === activity.id) {
          const completed = !el.completed;
          // eslint-disable-next-line no-param-reassign
          el.completed = completed;
        }
        return el;
      });
    },
    CLEAR_ACTIVITY(state, activity) {
      state.activities = state.activities.filter((el) => el.id !== activity.id);
    },
  },
  getters: {
    getActivities(state) {
      return state.activities;
    },
  },
};
