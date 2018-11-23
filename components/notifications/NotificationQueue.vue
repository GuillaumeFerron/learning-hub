<template>
  <div class="notification-queue">
    <notification v-for="(notification, index) in notifications.queue" :key="`notification-${index}`" :notification-content="notification.content"/>
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
