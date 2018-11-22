export default {
  filters: {
    /**
     * Makes a lower case string first uppercased
     *
     * @param name
     * @returns {string}
     */
    navigationFormat(name) {
      return name ? name.charAt(0).toUpperCase() + name.slice(1).replace('_', ' ') : ''
    }
  }
}
