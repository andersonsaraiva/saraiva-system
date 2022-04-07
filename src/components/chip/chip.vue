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
    <button v-if="removable" @click="remove" class="on-chip-close" tabindex="-1">X</button>
  </component>
</template>

<script>
export default {
  name: 'OnChip',

  props: {
    color: {
      type: String,
      default: 'medium',
      validator: value => {
        return value.match(/(medium|inverse|primary|success|warning|danger)/);
      }
    },

    size: {
      type: String,
      default: 'base',
      validator: value => {
        return value.match(/(base|large|small)/);
      }
    },

    removable: {
      type: Boolean,
      default: false
    },

    round: {
      type: Boolean,
      default: true
    },

    tag: {
      type: String,
      default: 'span'
    }
  },
  methods: {
    remove() {
      this.$emit('remove');
    }
  }
};
</script>

<style lang="scss">
@import './chip.scss';
</style>
