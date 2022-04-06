<template>
  <button class="on-button" v-text="title"></button>
</template>

<script>
export default {
  name: 'OnButton',

  props: {
    title: {
      type: String,
      default: '',
      require: true
    }
  }
};
</script>
