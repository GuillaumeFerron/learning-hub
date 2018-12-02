<template>
  <div class="notification-queue">
    <notification
      v-for="notification in notifications.queue"
      :key="notification.id"
      :id="notification.id"
      :content="notification.content"
      :priority="notification.priority"
      :mode="notification.mode"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Notification from './Notification'

export default {
  name: 'NotificationQueue',
  components: { Notification },
  computed: {
    ...mapState({
      notifications: state => state.notifications
    })
  }
}
</script>

<style lang="scss" scoped>
  .notification-queue {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 999;
    background: #fff;
    @include transition();
  }
</style>
