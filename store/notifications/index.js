/**
   * State
   */
const
  notificationsState = () => ({
    enabled: true,
    queue: []
  })

/**
   * Getters
   */
const
  notificationsGetters = () => ({
    enabled: state => state.enabled,
    queue: state => state.queue
  })

/**
   * Mutations
   */
const
  notificationsMutations = {
    /**
     * Disables the notification system
     *
     * @param state
     * @constructor
     */
    DISABLE_NOTIFICATIONS: state => {
      state.enabled = false
    },

    /**
     * Enable the notification system
     *
     * @param state
     * @constructor
     */
    ENABLE_NOTIFICATIONS: state => {
      state.enabled = true
    },

    /**
     * Clears the notification queue
     *
     * @param state
     * @constructor
     */
    CLEAR_QUEUE: state => {
      state.queue = [].slice(0)
    },

    /**
     * Add a notification add the end of the queue
     *
     * @param state
     * @param notification
     * @constructor
     */
    ADD_NOTIFICATION: (state, notification) => {
      state.queue.push(notification)
    },

    /**
     * Removes the first element from the queue
     *
     * @param state
     * @constructor
     */
    POP_NOTIFICATION: state => {
      state.queue.shift()
    },

    /**
     * Removes a notification for a given ID
     *
     * @param state
     * @param id
     * @constructor
     */
    REMOVE_NOTIFICATION: (state, id) => {
      state.queue.forEach((elem, index) => {
        if (elem.id === id) {
          state.queue.splice(index, 1)
          return
        }
      })
    }
  }

/**
   * Actions
   */
const
  notificationsActions = {
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
     * @param payload
     * @param id
     */
    addNotification: ({ commit, dispatch, state }, notification) => {
      return new Promise((resolve, reject) => {
        commit('ADD_NOTIFICATION', notification)

        dispatch('popNotification', notification.delay)
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
    },

    /**
     * Removes a notificartion for a given id
     *
     * @param commit
     * @param id
     */
    removeNotification: ({ commit }, id) => {
      return new Promise((resolve) => {
        commit('REMOVE_NOTIFICATION', id)

        return resolve()
      })
    }
  }

export {
  notificationsGetters
  ,
  notificationsState
  ,
  notificationsMutations
  ,
  notificationsActions
}
