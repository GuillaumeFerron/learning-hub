export default {
  filters: {
    navigationFormat(name) {
      return name.charAt(0).toUpperCase() + name.slice(1)
    }
  }
}
