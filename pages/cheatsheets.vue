<template>
  <div>
    <file
      v-for="(file, index) in cheatsheets.files"
      :key="index"
      :name="file.name"
      :file_name="file.file"
      :file_extension="file.file_extension"
      :file_description="file.description"
      :file_tags="file.tags"
      :directory="cheatsheets.directory"/>
  </div>
</template>

<script>
import File from '../components/cheatsheets/File'
import { mapState } from 'vuex'

export default {
  name: 'Cheatsheets',
  components: { File },
  computed: {
    ...mapState({
      cheatsheets: state => state.cheatsheets
    })
  }
}
</script>

<style scoped>

</style>
