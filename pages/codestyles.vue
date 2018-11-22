<template>
  <div>
    <CodeViewer v-for="style in styles" :key="`code-viewer-${style.name}`" :code="style.code" :name="style.name" :type="style.type" :style_description="style.description" :style_tags="style.tags"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CodeViewer from '../components/code_styles/CodeViewer'

export default {
  name: 'CodeStyles',
  components: { CodeViewer },
  computed: {
    ...mapState({
      styles: state => state.code_styles.styles
    })
  }
}
</script>

<style scoped>

</style>
