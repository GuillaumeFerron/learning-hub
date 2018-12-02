<template>
  <div class="boiler-link card mx-3 p-3 mb-3">
    <div class="boiler-description col-12">
      <div class="col-12">
        <a :href="link" target="_blank" class="boiler-link-url">
          <span>{{ name }}</span>
          <span class="icons">
            <span class="fa fa-link"/>
            <span :class="`${type.icon.prefix}${type.icon.slug}`"/>
          </span>
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
    color: #000;

    .icons {
      color: $cd-pink !important;
    }
  }
</style>
