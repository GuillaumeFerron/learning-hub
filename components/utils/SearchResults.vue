<template>
  <div
    id="search-results-container"
    :style="{height: display ? '0px' : 'calc(100vh - 83px)'}"
    :class="`${display ? `py-0` : `py-4`} px-4`">
    <div v-for="(elem, index) in $store.getters.searchResults" :key="elem.category + index">
      <div v-if="elem.category === 'boilerplates' && boilerplates.links[elem.key]">
        <boiler-link
          :name="boilerplates.links[elem.key].name"
          :type="boilerplates.links[elem.key].type"
          :link="boilerplates.links[elem.key].link"
          :description="boilerplates.links[elem.key].description"
          :tags="boilerplates.links[elem.key].tags"
          :directory="boilerplates.directory"></boiler-link>
      </div>
      <div v-else-if="elem.category === 'cheatsheets' && cheatsheets.files[elem.key]">
        <file
          :name="cheatsheets.files[elem.key].name"
          :file_name="cheatsheets.files[elem.key].file"
          :file_extension="cheatsheets.files[elem.key].file_extension"
          :file_description="cheatsheets.files[elem.key].description"
          :file_tags="cheatsheets.files[elem.key].tags"
          :directory="cheatsheets.directory"></file>
      </div>
      <div v-else-if="elem.category === 'code_styles' && code_styles.styles[elem.key]">
        <code-viewer
          :code="code_styles.styles[elem.key].code"
          :name="code_styles.styles[elem.key].name"
          :type="code_styles.styles[elem.key].type"
          :style_description="code_styles.styles[elem.key].description"
          :style_tags="code_styles.styles[elem.key].tags"></code-viewer>
      </div>
      <div v-else-if="elem.category === 'videos' && videos.files[elem.key]">
        <video-element
          :name="videos.files[elem.key].name"
          :file_name="videos.files[elem.key].file"
          :file_extension="videos.files[elem.key].file_extension"
          :file_description="videos.files[elem.key].description"
          :video_tags="videos.files[elem.key].tags"
          :meta="videos.files[elem.key].meta"
          :directory="videos.directory"/>
      </div>
    </div>
    <small v-if="$store.getters.searchResults.length >= 5" class="pl-4">More results are not displayed...</small>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BoilerLink from '../boilerplates/BoilerLink'
import File from '../cheatsheets/File'
import CodeViewer from '../code_styles/CodeViewer'
import VideoElement from '../videos/VideoElement'

export default {
  name: 'SearchResults',
  components: { VideoElement, CodeViewer, File, BoilerLink },
  props: {
    display: {
      type: Boolean,
      required: false,
      default: false
    },
    searchTerm: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    ...mapState({
      boilerplates: state => state.boilerplates,
      cheatsheets: state => state.cheatsheets,
      code_styles: state => state.code_styles,
      videos: state => state.videos,
      search: state => state.search
    })
  }
}
</script>

<style scoped lang="scss">
  #search-results-container {
    position: fixed;
    top: 83px;
    right: 0;
  @include transition(all, 0.3s, ease-out);
    overflow: scroll;
    background-color: rgba(255, 255, 255, 0.9);
    z-index: 999;
    width: calc(100vw - 242px);
    margin-right: 1px;
  }
</style>
