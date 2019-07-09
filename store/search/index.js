import * as misc from '../../mixins/miscellaneous'

/**
 * PREFACE : SEARCH FUNCTIONALITY REMAINS BASIC AS IT WILL ONLY BE AN INDEXOF COMPARISON IN A STRING
 */

const searchState = () => ({
  searchableKeys: ['tags', 'name', 'description', 'type'],
  searchableModules: ['cheatsheets', 'boilerplates', 'videos', 'code_styles'],
  searchSlug: '',
  searchItems: [
    // WILL BE FILLED OUT BY THE INITSEARCHTERMS ACTION
  ]
})

const searchGetters = {
  searchResults: state => state.searchSlug ? state.searchItems.filter(elem => elem.searchableSlug.indexOf(state.searchSlug.toLowerCase()) !== -1 || elem.category.indexOf(state.searchSlug.toLowerCase()) !== -1).sort((a, b) => {
    return a.category.localeCompare(b.category)
  }) : []
}

const searchMutations = {
  ADD_SEARCH_ITEMS(state, { item }) {
    state.searchItems.push(item)
  },
  SET_SEARCH_SLUG(state, value) {
    state.searchSlug = value
  }
}

const searchActions = {
  /**
   * Init the searchable items. Not scalable but works for a finite amount of items.
   *
   * @param state
   * @param commit
   * @param dispatch
   * @param rootState
   * @returns {Promise<void>}
   */
  async initSearchItems({ state, commit, dispatch, rootState }) {
    const hR = misc && misc.default && misc.default.filters && misc.default.filters.humanReadable || (string => string)
    /**
     * 3 nested loops :
     * ¬ 1. searchable modules
     *    ¬ 2. modules items
     *        ¬ 3. searchable keys
     *            ¬ 4. (optional) key value items
     *
     * Estimation of the complexity is o(#modules * #max_items_in_module * (#searchable_keys + (optional) #items_in_value))
     * Ex: If we have 5 modules, 5 searchable keys, 10 items per module, each item has a tag array with 5 elements, we get o(500)
     */
    const start = +new Date()
    let counter = 0
    /**
     * 1. Parse through the modules
     */
    state.searchableModules.forEach(module => {
      if (rootState[module] && rootState[module].searchKey && rootState[module][rootState[module].searchKey]) {
        /**
         * 2. Parse through the searchable items in the module
         */
        for (let i = 0; i < Object.keys(rootState[module][rootState[module].searchKey]).length; i++) {
          const key = Object.keys(rootState[module][rootState[module].searchKey])[i]
          let appendedValue = ''
          /**
           * 3. Parse through the searchable keys
           */
          state.searchableKeys.forEach(searchKey => {
            if (rootState[module][rootState[module].searchKey][key][searchKey] && typeof rootState[module][rootState[module].searchKey][key][searchKey] === 'string') {
              appendedValue += '__' + hR(rootState[module][rootState[module].searchKey][key][searchKey], false, false, false, true)
              counter++
            } else if (rootState[module][rootState[module].searchKey][key][searchKey] && Array.isArray(rootState[module][rootState[module].searchKey][key][searchKey])) {
              /**
               * 4. If the value is an array, parse through its elements
               */
              rootState[module][rootState[module].searchKey][key][searchKey].forEach(elem => {
                appendedValue += '__' + hR(elem, false, false, false, true)
                counter++
              })
            } else {
              counter++
            }
          })
          if (appendedValue) {
            commit('ADD_SEARCH_ITEMS', {
              item: {
                key: key,
                searchableSlug: appendedValue,
                category: module
              }
            })
          }
        }
      }
    })
    const end = +new Date()
    const execTimeMs = end - start
    console.log(`SEARCH INIT : start: ${start}, end: ${end}, execution time: ${execTimeMs}, loops: ${counter}`)
  }
}

export { searchState, searchMutations, searchActions, searchGetters }
