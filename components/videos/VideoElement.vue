<template>
  <div class="video-element">
    <dropdown>
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
          <small class="text-secondary">{{ video_description }}</small>
        </div>
        <div class="col-12">
          <tag v-for="(tag, index) in video_tags" :tag="tag" :key="index"/>
        </div>
      </template>

      <template slot="dropdown-content">
        <div class="my-3 row mx-0">
          <div class="col-8">
            <video :src="fileUrl" controls/>
          </div>
          <ul class="col-4 list-unstyled text-secondary text-uppercase">
            <li><span class="font-weight-bold">Author: </span><span>{{ meta.author }}</span></li>
            <li><span class="font-weight-bold">Length: </span><span>{{ meta.length }}</span></li>
            <li><span class="font-weight-bold">Type: </span><span>{{ file_extension }}</span></li>
          </ul>
        </div>
      </template>
    </dropdown>
  </div>
</template>

<script>
import Tag from '../utils/Tag'
import FileAccess from '~/mixins/FileAccess.js'
import Dropdown from '../utils/Dropdown'

export default {
  name: 'VideoElement',
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
      default: '.mp4'
    },
    directory: {
      type: String,
      required: true
    },
    video_description: {
      type: String,
      required: false,
      default: 'A CandyDigital video tutorial.'
    },
    video_tags: {
      type: Array,
      required: false,
      default: () => []
    },
    meta: {
      type: Object,
      required: true
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
