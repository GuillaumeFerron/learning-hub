<template>
  <transition name="notification">
    <div :class="`notification-container px-4 py-2 my-1 mode-${mode}`">
      <span class="fa fa-times close-notification clickable" @click="$store.dispatch('removeNotification', id)"/>
      {{ content }}
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    id: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    priority: {
      type: Number,
      required: true
    },
    mode: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .notification-container {
    border-radius: 10px;
    position: relative;

    &.mode-0 {
      background: $mode-0-background;
      border: solid 1px $mode-0;
      color: $mode-0-text;
    }

    &.mode-1 {
      background: $mode-1-background;
      border: solid 1px $mode-1;
      color: $mode-1-text;
    }

    &.mode-2 {
      background: $mode-2-background;
      border: solid 1px $mode-2;
      color: $mode-2-text;
    }

    .close-notification {
      position: absolute;
      top: 5px;
      right: 10px;
      font-size: 10px;
    }
  }
</style>
