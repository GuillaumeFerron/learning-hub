/* eslint import/no-extraneous-dependencies : 0 */

import Vuex from 'vuex'

/**
 * Modules
 */
import { cheatsheetsState, cheatsheetsGetters } from './cheatsheets/index'
import { boilerplatesState, boilerplatesGetters } from './boilerplates/index'
import { videosState, videosGetters } from './videos/index'
import { codestylesState, codestylesGetters } from './code_styles/index'
import { navigationState, navigationGetters } from './navigation/index'

const createStore = () => new Vuex.Store({
  modules: {
    namespaced: true,
    cheatsheets: {
      state: cheatsheetsState,
      getters: cheatsheetsGetters
    },
    boilerplates: {
      state: boilerplatesState,
      getters: boilerplatesGetters
    },
    videos: {
      state: videosState,
      getters: videosGetters
    },
    code_styles: {
      state: codestylesState,
      getters: codestylesGetters
    },
    navigation: {
      state: navigationState,
      getters: navigationGetters
    }
  }
})

export default createStore
