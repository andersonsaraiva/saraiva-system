<template>
  <button
    class="on-button"
    :class="[
      size && `on-button-size-${size}`,
      fullwidth && `on-button-fullwidth`,
      primary && `on-button-primary`,
      secondary && `on-button-secondary`,
      ghost && `on-button-ghost`,
      hover && `on-button-hover`
    ]"
    v-bind="$attrs"
  >
    <span class="on-button-text" v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: 'OnButton',

  inheritAttrs: false,

  props: {
    size: {
      type: String,
      default: null,
      validator: value => {
        return value.match(/(small|base|large)/);
      }
    },

    fullwidth: {
      type: Boolean,
      default: false
    },

    primary: {
      type: Boolean,
      default: false
    },

    secondary: {
      type: Boolean,
      default: false
    },

    hover: {
      type: Boolean,
      default: false
    },

    ghost: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
@import './button.scss';
</style>
