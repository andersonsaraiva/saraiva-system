<template>
  <component :is="tag" :class="columns" v-bind="$attrs">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'OnCol',

  inheritAttrs: false,

  props: {
    cols: {
      type: [String, Number]
    },
    sm: {
      type: [String, Number]
    },
    md: {
      type: [String, Number]
    },
    lg: {
      type: [String, Number]
    },
    xl: {
      type: [String, Number]
    },
    tag: {
      type: String,
      default: 'div'
    }
  },

  computed: {
    columns() {
      let classList = [];

      for (const [key, value] of Object.entries(this.$props)) {
        if (key.includes('cols')) {
          if (value) {
            classList.push(`on-col-${value}`);
          } else {
            classList.push(`on-col`);
          }
        } else if (key.match(/(sm|md|lg|xl)/)) {
          if (value) {
            classList.push(`on-col-${key}-${value}`);
          }
        }
      }

      return classList;
    }
  }
};
</script>
