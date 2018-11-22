/**
 * State
 */
const notificationsState = () => ({
  enabled: true,
  queue: [],
  delay: 3000
})

/**
 * Getters
 */
const notificationsGetters = () => ({
  enabled: state => state.enabled,
  queue: state => state.queue,
  delay: state => state.delay
})

/**
 * Mutations
 */
const notificationsMutations = {
  /**
   * Disables the notification system
   *
   * @param state
   * @constructor
   */
  DISABLE_NOTIFICATIONS: state => { state.enabled = false },

  /**
   * Enable the notification system
   *
   * @param state
   * @constructor
   */
  ENABLE_NOTIFICATIONS: state => { state.enabled = true },

  /**
   * Sets the delay to a new value
   *
   * @param state
   * @param delay
   * @constructor
   */
  SET_DELAY: (state, delay) => { state.delay = delay },

  /**
   * Clears the notification queue
   *
   * @param state
   * @constructor
   */
  CLEAR_QUEUE: state => { state.queue = [].slice(0) },

  /**
   * Add a notification add the end of the queue
   *
   * @param state
   * @param notification
   * @constructor
   */
  ADD_NOTIFICATION: (state, notification) => { state.queue.push(notification) },

  /**
   * Removes the first element from the queue
   *
   * @param state
   * @constructor
   */
  POP_NOTIFICATION: state => { state.queue.shift() }
}

/**
 * Actions
 */
const notificationsActions = {
  /**
   * Clears the notification queue
   *
   * @param commit
   */
  clearQueue: ({ commit }) => {
    return new Promise((resolve) => {
      commit('CLEAR_QUEUE')

      return resolve()
    })
  },

  /**
   * Add a notification add the end of the queue
   *
   * @param commit
   * @param dispatch
   * @param state
   * @param notification
   */
  addNotification: ({ commit, dispatch, state }, notification) => {
    // TODO Validation
    return new Promise((resolve) => {
      commit('ADD_NOTIFICATION', notification)

      dispatch('popNotification', state.delay)
      return resolve()
    })
  },

  /**
   * Removes the first element from the queue
   *
   * @param commit
   * @param delay
   */
  popNotification: ({ commit }, delay) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        commit('POP_NOTIFICATION')
      }, delay)

      return resolve()
    })
  }
}

export { notificationsGetters, notificationsState, notificationsMutations, notificationsActions }
