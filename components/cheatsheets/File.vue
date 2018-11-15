<template>
  <div class="file">
    <dropdown :disable="file_extension !== '.pdf'">
      <template slot="dropdown-preview">
        <div class="col-12">
          <span>{{ name }}</span>
          <a :href="fileUrl" target="_blank" class="file-preview">
            <span class="fa fa-eye"/>
          </a>
          <a :href="fileUrl" :download="name" class="file-download">
            <span class="fa fa-arrow-circle-down"/>
          </a>
        </div>
        <div class="col-12">
          <small class="text-secondary">{{ file_description }}</small>
        </div>
        <div class="col-12">
          <tag v-for="(tag, index) in file_tags" :tag="tag" :key="index"/>
        </div>
      </template>
      <template slot="dropdown-content">
        <embed :src="fileUrl" type="application/pdf" width="100%" height="500">
      </template>
    </dropdown>
  </div>
</template>

<script>
import Tag from '../utils/Tag'
import FileAccess from '~/mixins/FileAccess.js'
import Dropdown from '../utils/Dropdown'

export default {
  name: 'File',
  components: { Dropdown, Tag },
  mixins: [FileAccess],
  props: {
    name: {
      type: String,
      required: true
    },
    file_name: {
      type: String,
      required: true
    },
    file_extension: {
      type: String,
      required: false,
      default: '.pdf'
    },
    directory: {
      type: String,
      required: true
    },
    file_description: {
      type: String,
      required: false,
      default: 'A CandyDigital cheatsheet.'
    },
    file_tags: {
      type: Array,
      required: false,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
  .file-preview {
    color: $cd-pink !important;
  }

  .file-download {
    color: $cd-pink !important;
  }
</style>
