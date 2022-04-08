<template>
  <component :is="tag" class="on-container" :class="fluid && 'on-container--fluid'" v-bind="$attrs">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'OnContainer',

  inheritAttrs: false,

  props: {
    fluid: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'div'
    }
  }
};
</script>

<style lang="scss">
@import './container.scss';
</style>
