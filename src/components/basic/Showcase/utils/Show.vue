<template>
  <div class="show-wrapper">
    <img :src="poster" width="170" height="250" alt="">
    <div class="show-wrapper__information">
      <label>Title</label>
      <p>{{title}}</p>
      <label>Status</label>
      <p>{{status}}</p>
      <label>Last Aired</label>
      <p>season {{last_aired}}</p>
      <label>Last Seen</label>
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
.show-wrapper {
  display: flex;

  &__information {
    margin-left: 10px;

    label {
      text-decoration: underline;
    }

    p {
      margin: 5px 0 10px 0;
    }
  }
}

</style>
