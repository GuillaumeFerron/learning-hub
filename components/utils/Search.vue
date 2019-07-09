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
    <search-results :display="!searchTerm || escaped" :search-term="searchTerm"></search-results>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SearchResults from './SearchResults'

export default {
  name: 'Search',
  components: { SearchResults },
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
      this.$store.commit('SET_SEARCH_SLUG', newValue)
      if ((!!newValue && oldValue === '') || this.escaped) {
        window.addEventListener('keydown', this.handleEscape)
        this.escaped = false

        return
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
    border: solid 1px #aaa;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
    font-size: 25px;
    position: absolute;
    top: 50%;
    @include transform(translate(0, -65%));
    right: 0;

    &:focus {
      outline: none;
    }
  }
</style>
