<template>
  <div id="default-container" class="row mx-0">
    <nav-bar/>
    <div class="col-10">
      <h3 class="py-4 text-uppercase border-bottom">{{ $route.name | navigationFormat }}</h3>
      <nuxt/>
    </div>
  </div>
</template>

<script>
import Navigation from '~/mixins/Navigation.vue'
import NavBar from './NavBar'

export default {
  components: { NavBar },
  mixins: [
    Navigation
  ]
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
