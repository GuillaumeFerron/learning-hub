<script>
export default {
  name: 'Navigation',
  filters: {
    navigationFormat(name) {
      return name.charAt(0).toUpperCase() + name.slice(1)
    }
  }
}
</script>

<style scoped>

</style>
