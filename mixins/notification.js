import Notification from '@/utils/Notification'

export default {
  methods: {
    /**
     * Triggers the notification
     *
     * @param id
     * @param content
     * @param priority
     * @param mode
     * @param delay
     */
    notification(id, content, priority, mode, delay) {
      const notification = new Notification(id, content, priority, mode, delay)

      this.$store.dispatch('addNotification', notification)
    }
  }
}
