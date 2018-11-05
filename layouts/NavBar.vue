<template>
    <section id="nav-bar" class="col-2 border-right">
        <div class="logo row py-3 border-bottom">
            <img src="/images/cd_color_1.png" class="mx-auto" alt="CandyDigital Logo" width="80" height="50">
        </div>
        <div class="nav pl-5 mt-5 d-flex flex-column">
            <div v-for="(route, index) in $router.options.routes" :key="index" class="mt-3">
                <nuxt-link :to="route.path">{{ route.name | navigationFormat }}</nuxt-link>
            </div>
        </div>
    </section>
</template>

<script>
  import Navigation from '~/mixins/Navigation.vue';

  export default {
    name: 'nav-bar',
    mixins: [
      Navigation
    ]
  };
</script>

<style scoped lang="scss">
    #nav-bar {
        a {
            color: #000;

            &:hover {
                color: $cd-pink;
                text-decoration: none;
            }
        }
    }
</style>
