<template>
    <span class="tag badge badge-secondary text-uppercase mr-2 px-2 py-1">{{ tag }}</span>
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

<style scoped lang="scss">
    .tag {
        border-radius: 25px;
    }
</style>
