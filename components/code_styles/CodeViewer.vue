<template>
  <div class="code-viewer">
    <dropdown>
      <template slot="dropdown-preview">
        <div class="col-12">
          <span>{{ name }}</span>
          <span class="fa fa-code"/>
        </div>
        <div class="col-12">
          <small class="text-secondary">{{ style_description }}</small>
        </div>
        <div class="col-12">
          <tag v-for="(tag, index) in style_tags" :tag="tag" :key="index"/>
        </div>
      </template>
      <template slot="dropdown-content">
        <codemirror :value="code" :mode="type"/>
      </template>
    </dropdown>
  </div>
</template>

<script>
import Tag from '../utils/Tag'
import Dropdown from '../utils/Dropdown'

export default {
  name: 'CodeViewer',
  components: { Tag, Dropdown },
  props: {
    code: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    style_description: {
      type: String,
      required: false,
      default: () => ''
    },
    style_tags: {
      type: Array,
      required: false,
      default: () => []
    }
  }
}
</script>

<style scoped>

</style>
