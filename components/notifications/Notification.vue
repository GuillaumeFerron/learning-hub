<template>
  <transition name="notification">
    <div class="notification-container px-4 py-2 my-1">
      {{ notificationContent }}
    </div>
  </transition>
</template>

<script>
// TODO Have modes like colors, priorities

export default {
  name: 'Notification',
  props: {
    notificationContent: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .notification-container {
    border-radius: 10px;
    background: rgba(255,0,0,0.3);
    border: solid 1px #ff0000;
    color: #ff0000;
  }
</style>
