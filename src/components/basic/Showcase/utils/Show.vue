<template>
  <div class="wrapper">
    <img :src="poster" width="170" height="250" alt="">
    <div class="information">
      <label for="">Title</label>
      <p>{{title}}</p>
      <label for="">Status</label>
      <p>{{status}}</p>
      <label for="">Last Aired</label>
      <p>season {{last_aired}}</p>
      <label for="">Last Seen</label>
      <p>season {{last_seen}}</p>
    </div>
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
    },
    status: {
      type: String
    },
    last_aired: {
      type: String
    },
    last_seen: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
}

.information {
  margin-left: 10px;

  label {
    text-decoration: underline;
  }

  p {
    margin: 5px 0 10px 0;
  }
}
</style>
