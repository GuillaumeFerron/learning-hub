<template>
  <div>
    <boiler-link
      v-for="(link, index) in boilerplates.links"
      :key="index"
      :name="link.name"
      :type="link.type"
      :link="link.link"
      :description="link.description"
      :tags="link.tags"
      :directory="boilerplates.directory"/>
  </div>
</template>

<script>
import BoilerLink from '../components/boilerplates/BoilerLink'
import { mapState } from 'vuex'

export default {
  name: 'Boilerplates',
  components: { BoilerLink },
  computed: {
    ...mapState({
      boilerplates: state => state.boilerplates
    })
  }
}
</script>

<style scoped>

</style>
