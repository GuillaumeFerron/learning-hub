<template>
    <div>
        <file v-for="(file, index) in $store.state.cheatsheets.files"
              :key="index"
              :name="file.name"
              :file_name="file.file"
              :file_extension="file.file_extension"
              :file_description="file.description"
              :file_tags="file.tags"
              :directory="$store.state.cheatsheets.directory">
        </file>
    </div>
</template>

<script>
  import File from '../components/cheatsheets/File';

  export default {
    name: 'cheatsheets',
    components: { File }
  };
</script>

<style scoped>

</style>
