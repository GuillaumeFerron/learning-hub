<template>
    <span class="badge badge-secondary text-uppercase mr-2">{{ tag }}</span>
</template>

<script>
  export default {
    name: 'tag',
    props: {
      tag: {
        type: String,
        required: true
      }
    }
  };
</script>

<style scoped>

</style>
