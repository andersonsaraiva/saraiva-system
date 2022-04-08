<template>
  <component
    :is="tag"
    class="on-row"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script>
  export default {
    name: 'OnRow',

    inheritAttrs: false,

    props: {
      tag: {
        type: String,
        default: 'div'
      }
    }
  };
</script>
