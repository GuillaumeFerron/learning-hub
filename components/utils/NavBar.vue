<template>
  <section id="nav-bar" class="col-2 border-right px-0">
    <div class="logo row py-3 border-bottom mx-0">
      <img src="/images/cd_color_1.png" class="mx-auto" alt="CandyDigital Logo" width="80" height="50">
    </div>
    <div class="nav mt-5 d-flex flex-column">
      <div v-for="(route, index) in navigation.routes" :key="index" class="mt-3">
        <nuxt-link :to="route.path" class="px-3 py-2">
          <span :class="route.icon"/>
          {{ $options.filters.humanReadable(route.name, true, true) }}
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import Miscellaneous from '~/mixins/Miscellaneous.js'
import { mapState } from 'vuex'

export default {
  name: 'NavBar',
  mixins: [
    Miscellaneous
  ],
  computed: {
    ...mapState({
      navigation: state => state.navigation
    })
  }
}
</script>

<style scoped lang="scss">
  #nav-bar {
    a {
      color: #000;
      @include transition();
      border-left: solid 3px transparent;
      border-bottom-right-radius: 25px;
      border-top-right-radius: 25px;

      &:hover {
        color: $cd-pink;
        background: $nav-background-active;
        text-decoration: none;
      }
    }
  }
</style>
