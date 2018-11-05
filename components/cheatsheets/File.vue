<template>
    <div class="file">
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
            <small class="text-secondary">{{ file_description }}</small>
        </div>
        <div class="col-12">
            <span class="badge badge-secondary text-uppercase mr-2" v-for="(tag, index) in file_tags" :key="index">{{ tag }}</span>
        </div>
        <hr>
    </div>
</template>

<script>
  export default {
    name: 'File',
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
        default: 'pdf'
      },
      directory: {
        type: String,
        required: true
      },
      file_description: {
        type: String,
        required: false,
        default: 'A Candy Digital cheatsheet.'
      },
      file_tags: {
        type: Array,
        required: false
      }
    },
    computed: {
      fileUrl() {
        return `${this.directory}${this.file_name}${this.file_extension}`;
      }
    }
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
