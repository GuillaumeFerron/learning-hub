export default {
  computed: {
    fileUrl() {
      return `${this.directory}${this.file_name}${this.file_extension}`
    }
  }
}
