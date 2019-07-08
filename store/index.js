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
import { notificationsState, notificationsGetters, notificationsMutations, notificationsActions } from './notifications/index'

const createStore = () => new Vuex.Store({
  state: {
    searchableKeys: ['tags', 'name', 'description', 'type'],
    searchResults: {
      boilerplates: [],
      cheatsheets: [],
      videos: [],
      code_styles: []
    }
  },
  mutations: {
    ADD_SEARCH_RESULT(state, { result, category }) {
      state.searchResults[category].indexOf(result) === -1 ? state.searchResults[category].push(result) : ''
    },
    RESET_SEARCH_RESULTS(state) {
      Object.keys(state.searchResults).forEach(key => {
        state.searchResults[key] = []
      })
    }
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
    },
    notifications: {
      state: notificationsState,
      getters: notificationsGetters,
      mutations: notificationsMutations,
      actions: notificationsActions
    }
  }
})

export default createStore
