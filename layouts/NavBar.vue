<template>
    <section id="nav-bar" class="col-2 border-right px-0">
        <div class="logo row py-3 border-bottom mx-0">
            <img src="/images/cd_color_1.png" class="mx-auto" alt="CandyDigital Logo" width="80" height="50">
        </div>
        <div class="nav mt-5 d-flex flex-column">
            <div v-for="(route, index) in $store.state.routes" :key="index" class="mt-3">
                <nuxt-link :to="route.path" class="pl-3 py-1">
                    <span :class="route.icon"></span>
                    {{ route.name | navigationFormat }}
                </nuxt-link>
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
            @include transition();
            border-left: solid 3px transparent;

            &:hover {
                color: $cd-pink;
                text-decoration: none;
            }
        }
    }
</style>
