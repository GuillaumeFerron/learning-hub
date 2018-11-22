<template>
  <div id="default-container" class="row mx-0">
    <nav-bar/>
    <div class="col-10">
      <h3 class="py-4 text-uppercase">{{ $route.path !== '/' ? $options.filters.navigationFormat($route.name) : '' }}</h3>
      <nuxt/>
    </div>
  </div>
</template>

<script>
import Navigation from '~/mixins/Navigation.js'
import NavBar from '../components/utils/NavBar'

export default {
  components: { NavBar },
  mixins: [
    Navigation
  ],
  head() {
    return {
      title: `CD | ${this.$route.path !== '/' ? this.$options.filters.navigationFormat(this.$route.name) : 'Learning Hub'}`
    }
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
