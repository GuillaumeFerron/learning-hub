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
import { searchState, searchMutations, searchActions, searchGetters } from './search/index'
import { notificationsState, notificationsGetters, notificationsMutations, notificationsActions } from './notifications/index'

const createStore = () => new Vuex.Store({
  actions: {
    init: ({ state, getters, commit, dispatch }) => {
      dispatch('initSearchItems')
        .then(() => {
          console.log('init')
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
    },
    search: {
      state: searchState,
      mutations: searchMutations,
      actions: searchActions,
      getters: searchGetters
    }
  }
})

export default createStore
