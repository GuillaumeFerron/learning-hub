<template>
    <div>
        <boiler-link v-for="(link, index) in $store.state.boilerplates.links"
             :key="index"
             :name="link.name"
             :type="link.type"
             :link="link.link"
             :description="link.description"
             :tags="link.tags"
             :directory="$store.state.boilerplates.directory">
        </boiler-link>
    </div>
</template>

<script>
  import BoilerLink from '../components/boilerplates/BoilerLink';

  export default {
    name: 'boilerplates',
    components: { BoilerLink }
  };
</script>

<style scoped>

</style>
