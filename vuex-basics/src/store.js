import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    registrations: [],
    users: [
      { id: 1, name: 'Gary', registered: false },
      { id: 2, name: 'Pippa', registered: false },
      { id: 3, name: 'Georgie', registered: false },
      { id: 4, name: 'Maisie', registered: false },
      { id: 5, name: 'Mr. Poopy Butthole', registered: false },
    ],
  },
  getters: {
    unregisteredUsers(state) {
      return state.users.filter(u => !u.registered);
    },
    registrations(state) {
      return state.registrations;
    },
    totalRegistrations(state) {
      return state.registrations.length;
    },
  },
  mutations: {
    register(state, userId) {
      const date = new Date();
      const user = state.users.find(u => u.id === userId);

      user.registered = true;
      const registration = {
        userId,
        name: user.name,
        date: `${date.getMonth()}/${date.getDay()}`,
      };
      state.registrations.push(registration);
    },
    unregister(state, payload) {
      const user = state.users.find(u => u.id === payload.userId);
      user.registered = false;
      const registration = state.registrations.find(reg => reg.userId === payload.userId);
      state.registrations.splice(state.registrations.indexOf(registration), 1);
    },
  },
  actions: {
    // ASYNC CODE goes in an action (think Redux-Thunk)
    // NOTE: ES6 deconstruction can be used to extract action: eg. {commit} from context
    register(context, userId) {
      setTimeout(() => context.commit('register', userId), 1000);
    },
  },
});

export default store;
