<template>
  <div>
    <img :src="poster" width="170" height="250" alt="">
    <label for="">Title</label>
    <p>{{title}}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    poster: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
