<template>
  <div>
    <label v-text="label"></label>
    <textarea />
  </div>
</template>
<script>
export default {
  name: 'OnTextarea',

  props: {
    label: {
      type: String
    }
  }
};
</script>
