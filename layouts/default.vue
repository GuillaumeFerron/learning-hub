<template>
  <div id="default-container" class="row mx-0">
    <nav-bar/>
    <notification-queue/>
    <div class="col-10">
      <div class="row mx-0">
        <h3 v-if="$route && $route.name" class="py-4 col-3">{{ $options.filters.humanReadable($route.name, true, true, true) }}</h3>
        <div class="col-9">
          <search/>
        </div>
      </div>
      <nuxt/>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/utils/NavBar'
import NotificationQueue from '../components/notifications/NotificationQueue'
import Search from '../components/utils/Search'

export default {
  components: { Search, NotificationQueue, NavBar },
  head() {
    return {
      title: `CD | ${this.$route.path !== '/' ? this.$options.filters.humanReadable(this.$route.name) : 'Learning Hub'}`
    }
  },
  mounted() {
    this.$store.dispatch('init')
  }
}
</script>

<style>
  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  #default-container {
    min-height: 100vh;
  }
</style>
