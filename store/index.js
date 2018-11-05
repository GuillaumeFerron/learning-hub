/* eslint import/no-extraneous-dependencies : 0 */

import Vuex from 'vuex';

/**
 * Modules
 */
import {cheatsheetsState, cheatsheetsGetters} from './cheatsheets/index';

const createStore = () => new Vuex.Store({
  state: () => ({
  }),
  modules: {
    namespaced: true,
    cheatsheets: {
      state: cheatsheetsState,
      getters: cheatsheetsGetters
    }
  }
});

export default createStore;
