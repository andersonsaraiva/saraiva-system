<template>
  <button
    @click.capture="handleClick"
    class="on-button"
    :class="[
      size && `on-button-size-${size}`,
      fullwidth && `on-button-fullwidth`,
      primary && `on-button-primary`,
      secondary && `on-button-secondary`,
      danger && `on-button-danger`,
      ghost && `on-button-ghost`,
      hover && `on-button-hover`
    ]"
  >
    <span class="on-button-text" v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: 'OnButton',

  props: {
    /**
     * The path of this button. Can be a url or a Vue router path object.
     */
    path: {
      type: [String, Object],
      default() {
        return null;
      }
    },
    /**
     * The size used for the text.
     * @options small|base|large
     */
    size: {
      type: String,
      default: null,
      validator: value => {
        return value.match(/(small|base|large)/);
      }
    },

    /**
     * Fill the full width
     */
    fullwidth: {
      type: Boolean,
      default: false
    },
    /**
     * Primary style
     */
    primary: {
      type: Boolean,
      default: false
    },
    /**
     * Secondary style
     */
    secondary: {
      type: Boolean,
      default: false
    },
    /**
     * Danger style
     */
    danger: {
      type: Boolean,
      default: false
    },
    /**
     * Toggle the hover state
     */
    hover: {
      type: Boolean,
      default: false
    },
    /**
     * Make the buttons background transparent
     */
    ghost: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    handleClick(event) {
      /**
       * Click on button.
       * Receives two arguments:
       * event, route object
       *
       * @event click
       */
      this.$emit('click', event);
    }
  }
};
</script>

<style lang="scss" src="./button.scss"></style>
