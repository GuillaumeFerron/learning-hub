<template>
  <div class="notification-container">
    {{ notificationContent }}
  </div>
</template>

<script>
// TODO Have a queue system
// TODO Have a transition
// TODO Make it usable across the whole application
// TODO Have modes like colors, priorities

export default {
  name: 'Notification',
  data() {
    return {
      notificationContent: '',
      display: false
    }
  },
  methods: {
    /**
     * Triggers the notification
     *
     * @param content
     * @param delay
     */
    notification(content, delay = 3000) {
      this.notificationContent = content
      this.display = true

      setTimeout(() => {
        this.resetNotification()
      }, delay)
    },

    /**
     * Resets the notification to its disabled state
     */
    resetNotification() {
      this.notificationContent = ''
      this.display = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .notification-container {
    position: absolute;
    top: 20px;
    left: 50%;
    @include transform(translate(-50%, 0));
    border-radius: 4px;
    background: rgba(255,0,0,0.3);
    color: #ff0000;
  }
</style>
