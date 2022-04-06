<template>
  <component
    :is="tag"
    class="on-chip"
    :class="[
      `on-chip-size-${size}`,
      `on-chip-${color}`,
      removable && 'on-chip-removable',
      round && 'on-chip-round'
    ]"
  >
    <slot />
    <button v-if="removable" @click="remove" class="on-chip-close" tabindex="-1">
      <on-icon name="close" />
    </button>
  </component>
</template>

<script>
export default {
  name: 'OnChip',

  props: {
    /**
     * The background color used for the chip.
     * @options medium|inverse|primary|success|warning|danger
     */
    color: {
      type: String,
      default: 'medium',
      validator: value => {
        return value.match(/(medium|inverse|primary|success|warning|danger)/);
      }
    },
    /**
     * The size used for the text.
     * @options base|large|small
     */
    size: {
      type: String,
      default: 'base',
      validator: value => {
        return value.match(/(base|large|small)/);
      }
    },
    /**
     * Whether the chip should be removeable
     */
    removable: {
      type: Boolean,
      default: false
    },
    /**
     * Whether the chip should be rounded
     */
    round: {
      type: Boolean,
      default: true
    },
    /**
     * The html element name used for the text.
     */
    tag: {
      type: String,
      default: 'span'
    }
  },
  methods: {
    remove() {
      /**
       * Fires after user clicked the remove button.
       *
       * @event remove
       */
      this.$emit('remove');
    }
  }
};
</script>

<style lang="scss">
@import './chip.scss';
</style>
