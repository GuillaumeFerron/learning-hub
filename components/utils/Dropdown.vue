<template>
  <div :class="`dropdown-container card mx-3 pt-3 row ${expanded ? `expanded` : ``}`">
    <div class="dropdown-preview col-12">
      <slot name="dropdown-preview"/>
    </div>
    <div class="dropdown-content col-12 m-3">
      <slot name="dropdown-content"/>
    </div>
    <div class="dropdown-button clickable" @click="expanded = !expanded">
      <span class="fa fa-angle-right"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  data() {
    return {
      expanded: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .dropdown-container {
    position: relative;

    .dropdown-content {
      max-height: 0;
      @include transition();
      overflow: hidden;
    }

    .dropdown-button {
      position: absolute;
      font-size: 30px;
      @include transition();
      right: 20px;
      top: 40px;
    }

    &.expanded {
      .dropdown-content {
        max-height: 500px;
      }

      .dropdown-button {
        @include transform(rotate(90deg))
      }
    }
  }
</style>
