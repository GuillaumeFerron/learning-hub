export default {
  computed: {
    /**
     * Returns the fetchable url from a directory, file name and file extension
     *
     * @returns {string}
     */
    fileUrl() {
      return `${this.directory}${this.file_name}${this.file_extension}`
    }
  }
}
