<template>
  <label v-text="label"></label>
  <input :type="type" />
</template>
<script>
export default {
  name: 'OnTextField',

  props: {
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      require: false
    }
  }
};
</script>
