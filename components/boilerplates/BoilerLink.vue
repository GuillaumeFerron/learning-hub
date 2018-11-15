<template>
  <div class="boiler-link">
    <div class="col-12">
      <div class="boiler-type col-1 text-secondary">
        <span :class="`${type.icon.prefix}${type.icon.slug}`"/>
      </div>
      <div class="boiler-description col-11">
        <div class="col-12">
          <a :href="link" target="_blank" class="boiler-link-url">
            <span>{{ name }}</span>
            <span class="fa fa-link"/>
          </a>
        </div>
        <div class="col-12">
          <small class="text-secondary">{{ description }}</small>
        </div>
        <div class="col-12">
          <tag v-for="(tag, index) in tags" :tag="tag" :key="index"/>
          <tag :tag="type.name"/>
        </div>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
import Tag from '../utils/Tag'

export default {
  name: 'BoilerLink',
  components: { Tag },
  props: {
    name: {
      type: String,
      required: true
    },
    type: {
      type: Object,
      required: false,
      default: () => ({
        name: 'boilerplate',
        icon: {
          prefix: 'fa fa-',
          type: 'fa',
          slug: 'link'
        }
      })
    },
    link: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false,
      default: 'A CandyDigital boilerplate.'
    },
    tags: {
      type: Array,
      required: false,
      default: () => []
    },
    directory: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  .boiler-link-url {
    color: $cd-pink !important;
  }
</style>
