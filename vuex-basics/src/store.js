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
});

export default store;
