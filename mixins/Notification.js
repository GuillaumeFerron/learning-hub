export default {
  methods: {
    /**
     * Triggers the notification
     *
     * @param content
     * @param delay
     */
    notification(content) {
      this.$store.dispatch('addNotification', content)
    }
  }
}
