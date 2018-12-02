<template>
  <div class="code-viewer">
    <dropdown @dropdownTrigger="handleDropdownTrigger">
      <template slot="dropdown-preview">
        <div class="col-12">
          <span>{{ name }}</span>
          <span class="fa fa-code code-icons"/>
          <transition name="page">
            <span v-if="expanded" class="code-icons clickable" @click="copyText(code)">
              <span class="fa fa-copy"/>
              Copy
            </span>
          </transition>
        </div>
        <div class="col-12">
          <small class="text-secondary">{{ style_description }}</small>
        </div>
        <div class="col-12">
          <tag v-for="(tag, index) in style_tags" :tag="tag" :key="index"/>
        </div>
      </template>
      <template slot="dropdown-content">
        <codemirror :value="code" :options="options"/>
      </template>
    </dropdown>
  </div>
</template>

<script>
import Tag from '../utils/Tag'
import Dropdown from '../utils/Dropdown'

export default {
  name: 'CodeViewer',
  components: { Tag, Dropdown },
  props: {
    code: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    style_description: {
      type: String,
      required: false,
      default: () => ''
    },
    style_tags: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  data() {
    return {
      expanded: false
    }
  },
  computed: {
    options: function() {
      return {
        mode: this.type,
        tabSize: 2,
        lineNumbers: true,
        lineWrapping: true,
        extraKeys: { 'Ctrl-Space': 'autocomplete' },
        readOnly: 'nocursor',
        showCursorWhenSelecting: false
      }
    }
  },
  methods: {
    handleDropdownTrigger(expanded) {
      this.expanded = expanded
    }
  }
}
</script>

<style lang="scss" scoped>
  .code-icons {
    color: $cd-pink !important;
  }
</style>
