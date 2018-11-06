<template>
    <div class="video-element">
        <div class="col-12">
            <span>{{ name }}</span>
            <a :href="fileUrl" target="_blank" class="file-preview">
                <span class="fa fa-eye"></span>
            </a>
            <a :href="fileUrl" :download="name" class="file-download">
                <span class="fa fa-arrow-circle-down"></span>
            </a>
        </div>
        <div class="col-12">
            <small class="text-secondary">{{ video_description }}</small>
        </div>
        <div class="col-12">
            <tag v-for="(tag, index) in video_tags" :tag="tag" :key="index"></tag>
        </div>
    </div>
</template>

<script>
  import Tag from '../utils/Tag';
  import FileAccess from '~/mixins/FileAccess.vue';

  export default {
    name: 'video-element',
    components: { Tag },
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
        required: false
      }
    },
  };
</script>

<style scoped lang="scss">
    .file-preview {
        color: $cd-pink !important;
    }

    .file-download {
        color: $cd-pink !important;
    }
</style>
