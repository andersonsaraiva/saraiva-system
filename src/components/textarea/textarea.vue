<template>
  <label v-text="label"></label>
  <textarea />
</template>
<script>
export default {
  name: 'OnTextarea',

  props: {
    label: {
      type: String,
      require: false
    }
  }
};
</script>
