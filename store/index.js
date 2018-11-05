/* eslint import/no-extraneous-dependencies : 0 */

import Vuex from 'vuex';

/**
 * Modules
 */
import {cheatsheetsState, cheatsheetsGetters} from './cheatsheets/index';
import {boilerplatesState, boilerplatesGetters} from './boilerplates/index';

const createStore = () => new Vuex.Store({
  state: () => ({
    routes: [
      {
        name: 'index',
        path: '/',
        icon: 'fa fa-home'
      },
      {
        name: 'boilerplates',
        path: '/boilerplates',
        icon: 'fa fa-link'
      },
      {
        name: 'cheatsheets',
        path: '/cheatsheets',
        icon: 'fa fa-paperclip'
      }
    ]
  }),
  getters: {
    routes: state => state.routes
  },
  modules: {
    namespaced: true,
    cheatsheets: {
      state: cheatsheetsState,
      getters: cheatsheetsGetters
    },
    boilerplates: {
      state: boilerplatesState,
      getters: boilerplatesGetters
    }
  }
});

export default createStore;
