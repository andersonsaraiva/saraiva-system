<template>
  <button class="on-button" v-bind="$attrs" v-text="title"></button>
</template>

<script>
export default {
  name: "OnButton",

  inheritAttrs: false,

  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
