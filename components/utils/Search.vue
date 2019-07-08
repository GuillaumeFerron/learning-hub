<template>
  <div class="col-12 h-100 position-relative">
    <label for="search-container"></label>
    <input
      id="search-container"
      :style="{width: searchBoxW, color: !searchTerm ? '#aaa' : '#000'}"
      v-model="searchTerm"
      :placeholder="initSearchTerm"
      contenteditable="true"
      class="search-container h-50 px-2"
      @focus="handleFocus"
      @blur="handleBlur"/>
    <div
      id="search-results-container"
      :style="{height: !searchTerm || escaped ? '0px' : '100vh'}"
      :class="`${!searchTerm || escaped ? `py-0` : `py-4`} px-4`">
      <div v-if="$store.state.searchResults.boilerplates.length">
        Boilerplates
        <boiler-link
          v-for="(key, index) in $store.state.searchResults.boilerplates"
          :key="`boilerplate_${index}`"
          :name="boilerplates.links[key].name"
          :type="boilerplates.links[key].type"
          :link="boilerplates.links[key].link"
          :description="boilerplates.links[key].description"
          :tags="boilerplates.links[key].tags"
          :directory="boilerplates.directory"></boiler-link>
      </div>
      <div v-if="$store.state.searchResults.cheatsheets.length">
        Cheatsheets
        <file
          v-for="(key, index) in $store.state.searchResults.cheatsheets"
          :key="`cheatsheet_${index}`"
          :name="cheatsheets.files[key].name"
          :file_name="cheatsheets.files[key].file"
          :file_extension="cheatsheets.files[key].file_extension"
          :file_description="cheatsheets.files[key].description"
          :file_tags="cheatsheets.files[key].tags"
          :directory="cheatsheets.directory"></file>
      </div>
      <div v-if="$store.state.searchResults.code_styles.length">
        Code Styles
        <code-viewer
          v-for="(key, index) in $store.state.searchResults.code_styles"
          :key="`code_style_${index}`"
          :code="code_styles.styles[key].code"
          :name="code_styles.styles[key].name"
          :type="code_styles.styles[key].type"
          :style_description="code_styles.styles[key].description"
          :style_tags="code_styles.styles[key].tags"></code-viewer>
      </div>
      <div v-if="$store.state.searchResults.videos.length">
        Videos
        <video-element
          v-for="(key, index) in $store.state.searchResults.videos"
          :key="`video_${index}`"
          :name="videos.files[key].name"
          :file_name="videos.files[key].file"
          :file_extension="videos.files[key].file_extension"
          :file_description="videos.files[key].description"
          :video_tags="videos.files[key].tags"
          :meta="videos.files[key].meta"
          :directory="videos.directory"/>
      </div>
    </div>
  </div>
</template>

<script>
import BoilerLink from '../boilerplates/BoilerLink'
import { mapState } from 'vuex'
import File from '../cheatsheets/File'
import CodeViewer from '../code_styles/CodeViewer'
import VideoElement from '../videos/VideoElement'

export default {
  name: 'Search',
  components: { VideoElement, CodeViewer, File, BoilerLink },
  data() {
    return {
      searchBoxW: '25%',
      searchTerm: '',
      initSearchTerm: 'Search',
      escaped: false
    }
  },
  computed: {
    ...mapState({
      boilerplates: state => state.boilerplates,
      cheatsheets: state => state.cheatsheets,
      code_styles: state => state.code_styles,
      videos: state => state.videos
    })
  },
  watch: {
    searchTerm(newValue, oldValue) {
      if ((!!newValue && oldValue === '') || this.escaped) {
        window.addEventListener('keydown', this.handleEscape)
        this.escaped = false

        return
      }

      if (newValue) {
        this.$store.commit('RESET_SEARCH_RESULTS')
        for (let i = 0; i < Object.keys(this.boilerplates.links).length; i++) {
          const key = Object.keys(this.boilerplates.links)[i]
          this.$store.state.searchableKeys.forEach(searchKey => {
            if (this.boilerplates.links[key][searchKey] && typeof this.boilerplates.links[key][searchKey] === 'string') {
              if (this.boilerplates.links[key][searchKey].indexOf(newValue) !== -1) {
                this.$store.commit('ADD_SEARCH_RESULT', {
                  result: key,
                  category: 'boilerplates'
                })
              }
            }
          })
        }

        for (let i = 0; i < Object.keys(this.cheatsheets.files).length; i++) {
          const key = Object.keys(this.cheatsheets.files)[i]
          this.$store.state.searchableKeys.forEach(searchKey => {
            if (this.cheatsheets.files[key][searchKey] && typeof this.cheatsheets.files[key][searchKey] === 'string') {
              if (this.cheatsheets.files[key][searchKey].indexOf(newValue) !== -1) {
                this.$store.commit('ADD_SEARCH_RESULT', {
                  result: key,
                  category: 'cheatsheets'
                })
              }
            }
          })
        }

        for (let i = 0; i < Object.keys(this.code_styles.styles).length; i++) {
          const key = Object.keys(this.code_styles.styles)[i]
          this.$store.state.searchableKeys.forEach(searchKey => {
            if (this.code_styles.styles[key][searchKey] && typeof this.code_styles.styles[key][searchKey] === 'string') {
              if (this.code_styles.styles[key][searchKey].indexOf(newValue) !== -1) {
                this.$store.commit('ADD_SEARCH_RESULT', {
                  result: key,
                  category: 'code_styles'
                })
              }
            }
          })
        }

        for (let i = 0; i < Object.keys(this.videos.files).length; i++) {
          const key = Object.keys(this.videos.files)[i]
          this.$store.state.searchableKeys.forEach(searchKey => {
            if (this.videos.files[key][searchKey] && typeof this.videos.files[key][searchKey] === 'string') {
              if (this.videos.files[key][searchKey].indexOf(newValue) !== -1) {
                this.$store.commit('ADD_SEARCH_RESULT', {
                  result: key,
                  category: 'videos'
                })
              }
            }
          })
        }
      }
    }
  },
  methods: {
    handleFocus() {
      this.searchBoxW = '100%'
    },
    handleBlur() {
      if (!this.searchTerm) this.searchBoxW = '25%'
    },
    handleEscape(e) {
      if (`${e.key}` === 'Escape') {
        this.escaped = true

        window.removeEventListener('keydown', this.handleEscape)
      }
    }
  }
}
</script>

<style scoped lang="scss">
  #search-container {
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    @include transition(all, 0.2s, ease-out);
    border-bottom: solid 1px #aaa;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 6px;
    font-size: 25px;
    border-top: none;
    border-left: none;
    border-right: none;
    position: absolute;
    top: 50%;
    @include transform(translate(0, -65%));
    right: 0;

    &:focus {
      outline: none;
    }
  }

  #search-results-container {
    position: fixed;
    top: 83px;
    right: 0;
    @include transition(all, 0.3s, ease-out);
    overflow: scroll;
    background-color: #FFF;
    z-index: 999;
    width: calc(100vw - 240px);
  }
</style>
