<script>
export default {
  name: 'FileAccess',
  computed: {
    fileUrl() {
      return `${this.directory}${this.file_name}${this.file_extension}`
    }
  }
}
</script>

<style scoped>

</style>
